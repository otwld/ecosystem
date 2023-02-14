import { WorkMode } from '../../../src/app/modules/workModes/models/workMode.model';
import {createTranslatedField} from './fixture.utils';

export const WorkMode1: Partial<WorkMode> = {
  _id: 'workMode-1',
  name: createTranslatedField('workMode 1 fr', 'workMode 1 en'),
  description: createTranslatedField('workMode 1 description fr', 'workMode 1 description en'),
}
