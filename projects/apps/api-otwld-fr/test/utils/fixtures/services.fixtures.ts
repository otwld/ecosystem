import {Service} from '../../../src/app/modules/services/models/service.model';

export const Service1: Partial<Service> = {
  _id: 'service-1',
  slug: 'service-1',
  title: {
    fr: 'service 1 fr',
    en: 'service 1 en'
  },
  description: {
    fr: 'description 1 fr',
    en: 'description 1 en'
  },
  icon: 'icon-1',
  content: {
    fr: 'content 1 fr',
    en: 'content 1 en'
  },
};
