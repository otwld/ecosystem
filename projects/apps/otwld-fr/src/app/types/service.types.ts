import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface Service {
  description: string;
  icon: IconDefinition;
  title: string;
  route: string;
  templateURL: string;
}
