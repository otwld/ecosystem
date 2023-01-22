import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Service, ServiceDocument} from '../models/service.model';
import {Model} from 'mongoose';
import {ListServiceInput} from '../models/dtos/list-service-input.dto';
import {PaginationService} from '../../../shared/modules/pagination/pagination.service';
import {GetMultipleIds} from '../../../shared/objects/services/multiple-id.service';
import {AppLogger} from '../../../shared/modules/logging/logging.service';

@Injectable()
export class ServiceService extends GetMultipleIds<Service> {
  constructor(@InjectModel(Service.name) public model: Model<ServiceDocument>,
              private paginationService: PaginationService, private readonly logger: AppLogger) {
    super(logger, model);
    this.logger.setContext(this.constructor.name);
  }

  getPaginated(dto: ListServiceInput) {
    return this.paginationService.paginate(this.model.find(), dto);
  }
}
