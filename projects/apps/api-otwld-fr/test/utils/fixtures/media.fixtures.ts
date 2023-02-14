import { Media } from '../../../src/app/modules/medias/models/media.model';
import {createTranslatedField} from './fixture.utils';

export const Media1: Partial<Media> = {
  _id: 'media-1',
  link: 'https://www.youtube.com/watch?v=1',
  author: 'author 1',
  members: ['member-1'],
  type: 'video',
  title: createTranslatedField('title fr', 'title en'),
}
