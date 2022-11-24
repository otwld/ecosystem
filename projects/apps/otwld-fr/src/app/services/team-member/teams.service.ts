import { Injectable } from '@angular/core';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { TeamMember } from '../../types/team-member.types';

@Injectable({
  providedIn: 'root',
})
export class TeamMemberService {
  members: TeamMember[] = [
    {
      firstName: 'Nathan',
      lastName: 'Tréhout',
      image: 'assets/images/team/ntrehout.jpg',
      imageTransparent: 'assets/images/team/ntrehout-transparent-2.png',
      role: 'Développeur Fullstack',
      route: '/members/ntrehout',
      socials: [
        {
          icon: faGithub,
          url: 'https://github.com/ntrehout',
        },
        {
          icon: faLinkedin,
          url: 'https://fr.linkedin.com/in/ntrehout-outworld',
        },
        {
          icon: faTwitter,
          url: 'https://twitter.com/n_trehout',
        },
        {
          icon: faInstagram,
          url: 'https://www.instagram.com/ntrehout/',
        },
      ],
    },
    {
      firstName: 'Arthur',
      lastName: 'Pain',
      image: 'assets/images/team/apain.jpg',
      imageTransparent: 'assets/images/team/apain-transparent-2.png',
      role: 'Développeur Fullstack',
      route: '/members/apain',
      socials: [
        {
          icon: faLinkedin,
          url: 'https://fr.linkedin.com/in/arthur-pain-b28253145',
        },
      ],
    },
    {
      firstName: 'Jean Baptiste',
      lastName: 'Detroyes',
      image: 'assets/images/team/jdetroyes.jpg',
      imageTransparent: 'assets/images/team/jdetroyes-transparent.png',
      role: 'Développeur Fullstack',
      route: '/members/jdetroyes',
      socials: [
        {
          icon: faLinkedin,
          url: 'https://www.linkedin.com/in/jdetroyes/',
        },
      ],
    },
  ];
}
