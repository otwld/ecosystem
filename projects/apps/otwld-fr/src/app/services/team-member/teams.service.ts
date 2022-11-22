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
  teams: TeamMember[] = [
    {
      firstName: 'Nathan',
      lastName: 'Tréhout',
      image: 'assets/images/ntrehout.jpg',
      role: 'Développeur Fullstack',
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
      image: 'assets/images/apain.jpg',
      role: 'Développeur Fullstack',
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
      image: 'assets/images/jdetroyes.jpg',
      role: 'Développeur Fullstack',
      socials: [
        {
          icon: faLinkedin,
          url: 'https://www.linkedin.com/in/jdetroyes/',
        },
      ],
    },
  ];
}
