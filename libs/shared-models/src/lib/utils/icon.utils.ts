import {faGithub, faLinkedin, IconDefinition} from '@fortawesome/free-brands-svg-icons';
import {faDesktop, faGlobe, faMobileScreen, faUsers} from '@fortawesome/free-solid-svg-icons';

const icons = new Map<string, IconDefinition>([
  ['linkedin', faLinkedin],
  ['github', faGithub],
  ['globe', faGlobe],
  ['mobile-screen', faMobileScreen],
  ['desktop', faDesktop],
  ['users', faUsers]
])

export const SocialIconToFa = (iconName: string): IconDefinition => {
  const icon = icons.get(iconName);
  if (!icon) {
    throw new Error(`Unknown social icon: ${icon}`);
  }
  return icon;
}
