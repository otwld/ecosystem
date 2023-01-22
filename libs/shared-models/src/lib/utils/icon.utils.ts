import {faGithub, faLinkedin, IconDefinition} from '@fortawesome/free-brands-svg-icons';
import {IconName} from '@fortawesome/free-solid-svg-icons';

export const SocialIconToFa = (iconName: string): IconDefinition => {
  const icon = {
    'linkedin': faLinkedin,
    'github': faGithub,
  }[iconName];
  if (!icon) {
    throw new Error(`Unknown social icon: ${icon}`);
  }
  return icon;
}
