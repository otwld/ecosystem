import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface Service {
  icon: IconDefinition;
  titleTranslationKey: string;
  route: string;
  templateURL: string;
}
