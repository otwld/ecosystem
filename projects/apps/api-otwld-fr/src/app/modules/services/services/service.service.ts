import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Service, ServiceDocument} from '../models/service.model';
import {Model} from 'mongoose';
import {ListServiceInput} from '../models/dtos/list-service-input.dto';
import {PaginationService} from '../../../shared/modules/pagination/pagination.service';

@Injectable()
export class ServiceService {
  constructor(@InjectModel(Service.name) private model: Model<ServiceDocument>, private paginationService: PaginationService) {}

  getPaginated(dto: ListServiceInput) {
    return this.paginationService.paginate(this.model.find(), dto);
  }
}
