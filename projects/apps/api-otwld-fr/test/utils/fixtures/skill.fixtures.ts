import { Skill } from '../../../src/app/modules/skills/models/skill.model';
import {createTranslatedField} from './fixture.utils';

export const Skill1: Partial<Skill> = {
  _id: 'skill-1',
  name: createTranslatedField('Skill 1 fr', 'Skill 1 en'),
}
