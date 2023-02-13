import {Member} from '../../../src/app/modules/members/models/member.model';
import {createTranslatedField} from './fixture.utils';
import {Project1} from './project.fixtures';
import {Service1} from './services.fixtures';
import {Skill1} from './skill.fixtures';
import {WorkMode1} from './workMode.fixtures';

export const Member1: Partial<Member> = {
  _id: 'member-1',
  medias: [],
  testimonials: [],
  location: {
    country: createTranslatedField('france', 'france'),
    city: createTranslatedField('paris', 'paris'),
    street: 'rue de la paix',
  },
  jobTitle: createTranslatedField('job title fr', 'job title en'),
  workModes: [{
    workMode: WorkMode1._id,
    description: createTranslatedField('description fr', 'description en'),
  }],
  socials: [{
    serviceName: 'linkedin',
    link: 'https://www.linkedin.com/in/',
    icon: 'linkedin'
  }],
  lastName: 'Member',
  firstName: 'Member',
  skills: [{
    skill: Skill1._id,
    startDate: new Date('2022-01-01'),
    level: 100,
  }],
  slug: 'member-1',
  projects: [Project1._id],
  services: [Service1._id],
}
