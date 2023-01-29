import {Args, Context, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {Member} from '../models/member.model';
import {MemberService} from '../services/member.service';
import {ListMemberPage} from '../models/dtos/list-member-page.dto';
import {ListMemberInput} from '../models/dtos/list-member-input.dto';
import {AppLogger} from '../../../shared/modules/logging/logging.service';
import {UseGuards} from '@nestjs/common';
import {LanguageGuard} from '../../../shared/modules/language/guards/language.guard';
import * as DataLoader from 'dataloader';
import {ListProjectsPage} from '../../projects/models/dto/list-projects-output.dto';
import {ListProjectsInput} from '../../projects/models/dto/list-projects-input.dto';
import {ProjectService} from '../../projects/services/project.service';
import {Service} from '../../services/models/service.model';
import {CurrentLanguage} from '../../../shared/modules/language/decorators/current-language.decorator';
import {HeaderLanguage} from '../../../shared/modules/language/enums/language.enum';
import {Testimonial} from '../../testimonials/models/testimonial.model';
import {ListMediasPage} from '../../medias/models/dto/list-medias-output.dto';
import {MediaService} from '../../medias/services/media.service';
import {ListMediasInput} from '../../medias/models/dto/list-medias-input.dto';

@Resolver(() => Member)
export class MemberResolver {
  constructor(private readonly memberService: MemberService, private logger: AppLogger,
              private projectService: ProjectService, private mediasService: MediaService) {
    this.logger.setContext(MemberResolver.name);
  }

  @Query(() => Member)
  @UseGuards(LanguageGuard)
  getMemberById(@Args('id') id: string): Promise<Member> {
    return this.memberService.getById(id);
  }

  @Query(() => Member)
  @UseGuards(LanguageGuard)
  getMemberBySlug(@Args('slug') slug: string): Promise<Member> {
    return this.memberService.getOneByFilter({slug});
  }

  @Query(() => [Member])
  @UseGuards(LanguageGuard)
  getAllMembers(): Promise<Member[]> {
    return this.memberService.model.find().lean().exec();
  }

  @Query(() => ListMemberPage)
  async getMembers(@Args() dto: ListMemberInput) {
    return this.memberService.getMembersPaginated(dto);
  }

  @ResolveField('projects', () => ListProjectsPage)
  async resolverProjects(@Parent() member: Member, @Args() args: ListProjectsInput) {
    return await this.projectService.listProjects({...args, criteria: {memberId: member._id}});
  }

  @ResolveField('services', () => [Service])
  async resolverServices(@Parent() member: Member,
                         @Context('serviceLoader') dataLoaders: DataLoader<string, Service[]>) {
    return dataLoaders.loadMany(member.services || []);
  }

  @ResolveField('jobTitle', () => String)
  async resolverTitle(@Parent() member: Member,
                      @CurrentLanguage() language: HeaderLanguage) {
    return member.jobTitle[language];
  }

  @ResolveField('testimonials', () => [Testimonial])
  async resolveTestimonial(@Parent() member: Member,
                           @Context('testimonialLoader') testimonialsLoader: DataLoader<string, Testimonial>) {
    return testimonialsLoader.loadMany(member.testimonials || []);
  }

  @ResolveField('medias', () => ListMediasPage)
  async resolveMedias(@Parent() member: Member, @Args() args: ListMediasInput) {
    return this.mediasService.listMedias({...args, criteria: {memberId: member._id}});
  }

  @ResolveField('fullName', () => String)
  async resolveFullName(@Parent() member: Member) {
    return `${member.firstName} ${member.lastName}`;
  }
}
