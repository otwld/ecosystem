import {Member} from '../src/app/modules/members/models/member.model';
import {Service} from '../src/app/modules/services/models/service.model';
import {defaultData, translatedField} from './utils';
import {Testimonial} from '../src/app/modules/testimonials/models/testimonial.model';
import {Project} from '../src/app/modules/projects/models/project.model';
import {Skill} from '../src/app/modules/skills/models/skill.model';
import {WorkMode} from '../src/app/modules/workModes/models/workMode.model';
import {v4} from 'uuid';
export const memberDataId = v4();
export const projectDataId = v4();
export const testimonials: Testimonial[] = [{
  ...defaultData(),
  content: translatedField(
    'Arthur est un collègue avec lequel j\'ai énormément apprécié travailler. Souriant et sociable, il est amoureux de son métier. ll cherchera toujours la meilleure pratique et la meilleure façon de réaliser une tâche. Professionnel et consciencieux, il n\'hésitera pas à faire des heures supplémentaires pour résoudre des problèmes urgent ou intervenir en Production. Il brille particulièrement dans le développement Front, ou il aimera passer du temps à coder des tâches complexe de la manière la plus élégante et efficiente possible. Plus jeune que les collègues habituel que j\'ai pu fréquenter, il fait partie des développeurs avec lesquels j\'ai préféré travailler. Je n\'hésiterais pas à le recommander sur n\'importe quel projet web ambitieux.',
    'Arthur is a colleague that I have enjoyed working with immensely. Smiling and sociable, he is in love with his job. He will always look for the best practice and the best way to achieve a task. Professional and conscientious, he will not hesitate to work overtime to solve urgent problems or intervene in Production. He particularly shines in Front-end development, where he will enjoy spending time coding complex tasks in the most elegant and efficient way possible. Younger than my usual colleagues, he is one of my favorite developers to work with. I would not hesitate to recommend him for any ambitious web project.'),
  author: {
    firstName: 'Robin',
    lastName: 'Didier',
    job: translatedField('Développeur fullstack', 'Fullstack developer'),
  },
  members: [memberDataId],
  project: projectDataId,
}, {
  ...defaultData(),
  content: translatedField(
    'Arthur a rejoint le projet il y a 7 mois pour renforcer notre équipe de développement.' +
    ' On a rapidement été étonnés par sa capacité à prendre le projet en main et à s\'occuper de grosses features' +
    ' (par exemple toute la gestion du paiement via stripe). Il maîtrise parfaitement le back et le front et a été un' +
    ' vrai moteur dans l\'équipe. Il a même pris le lead sur une des squads, a pris des décisions très stratégiques' +
    ' pour l\'équipe et n\'a pas hésité à former les plus juniors. Nous avons dû couper court au projet malheureusement' +
    ' pour cause de rachat mais si la situation avait été différente, nous aurions reconduit Arthur avec plaisir.' +
    ' C\'est un excellent communiquant, il travaille très bien en équipe et produit un code de qualité.' +
    ' Je le recommande vivement.',
    'Arthur joined the project 7 months ago to reinforce our development team. We were quickly surprised by his ability to take charge of the project and to handle big features (for example, all the payment management via stripe). He perfectly masters the back and the front and has been a real engine in the team. He even took the lead on one of the squads, made very strategic decisions for the team and did not hesitate to train the most junior members. Unfortunately, we had to cut the project short due to a buyout, but if the situation had been different, we would have gladly hired Arthur again. He is an excellent communicator, he works very well in a team and produces quality code. I highly recommend him.'),
  author: {
    firstName: 'Sandy',
    lastName: 'Giustino',
    job: translatedField('CTO adjointe', 'CTO'),
  },
  members: [memberDataId],
  project: projectDataId,
}];

export const skills: Skill[] = [
  {
    ...defaultData(),
    name: translatedField('Angular', 'Angular'),
  },
  {
    ...defaultData(),
    name: translatedField('NodeJs', 'NodeJs'),
  },
  {
    ...defaultData(),
    name: translatedField('Kubernetes', 'Kubernetes'),
  }, {
    ...defaultData(),
    name: translatedField('mongoDB', 'mongoDB'),
  }
]

export const services: Service[] = [{
  ...defaultData(),
  title: translatedField('Développement Web', 'Web development'),
  slug: 'web-development',
  content: translatedField('', ''),
  description: translatedField('', ''),
  icon: 'globe'
}, {
  ...defaultData(),
  title: translatedField('Développement Mobile', 'Mobile development'),
  slug: 'mobile-development',
  content: translatedField('', ''),
  description: translatedField('', ''),
  icon: 'mobile-screen'
}, {
  ...defaultData(),
  title: translatedField('Développement Bureau', 'Desktop development'),
  slug: 'desktop-development',
  content: translatedField('', ''),
  description: translatedField('', ''),
  icon: 'desktop'
}, {
  ...defaultData(),
  title: translatedField('Renforcement d\'équipe', 'Team extension'),
  slug: 'team-extension',
  content: translatedField('', ''),
  description: translatedField('', ''),
  icon: 'users'
}];

export const workModes: WorkMode[] = [{
  ...defaultData(),
  name: translatedField('Télétravail', 'Full Remote'),
  description: translatedField('Télétravail', 'Full Remote'),
}, {
  ...defaultData(),
  name: translatedField('Télétravail partiel', 'Remote'),
  description: translatedField('Télétravail partiel', 'Remote'),
}, {
  ...defaultData(),
  name: translatedField('Sur site', 'Presential'),
  description: translatedField('Sur site', 'Presential'),
}];

export const projects: Project[] = [
  {
    ...defaultData(),
    _id: projectDataId,
    title: translatedField('MesDocteurs', 'MesDocteurs'),
    slug: 'mesdocteurs',
    services: [services[3]._id],
    skills: [skills[0], skills[1], skills[3]].map(s => s._id),
    testimonials: testimonials.map(t => t._id),
    members: [memberDataId],
    startDate: new Date('2021-11-01'),
    image: {
      'originalName': 'mesdocteurs.png',
      'name': 'mesdocteurs.png',
      'bucket': 'development',
      'storageEngine': 's3',
      'size': 1600,
      'mimeType': 'image/png',
      'path': 'otwldfr/apain'
    },
    templates: translatedField(
      '<h2>MesDocteurs</h2>' +
      '<h3>Contexte mission</h3>' +
      '<p>' +
      '  J\'ai rejoint MesDocteurs pour un renfort d\'équipe en Novembre 2021.' +
      '  MesDocteurs propose un ensemble d\'application pour effectuer de la' +
      '  téléconsultation en ligne avec son médecin.' +
      '</p>' +
      '<p>' +
      '  Tout au long de ma mission chez MesDocteurs , j\'ai pu travailler conjointement' +
      '  avec l\'équipe produit ainsi qu\'avec l\'équipe de design afin de concevoir un' +
      '  ensemble de fonctionnalités allant de l\'appel vidéo jusqu\'à la gestion des' +
      '  paiements.' +
      '</p>' +
      '<p>' +
      '  En outre, bien que le développement représentait ma mission principale, j\'ai' +
      '  naturellement été investi par mes responsables à la gestion d\'équipe.' +
      '</p>' +
      '<p>' +
      '  ► Le challenge était faire évoluer une application très large tout en' +
      '  maintenant les applications "legacy"' +
      '</p>' +
      '<h3>Rôles, actions menées et objectifs atteints</h3>' +

      '<ul>' +
      '  <li>' +
      '    Architecture & intégration de fonctionnalités dans une API NodeJs (NestJs)' +
      '    REST' +
      '  </li>' +
      '  <li>' +
      '    Architecture & intégration de fonctionnalités dans une API NodeJs (NestJs)' +
      '    GraphQl' +
      '  </li>' +
      '  <li>Conception et développement de fonctionnalités sur 4 WebApps Angular</li>' +
      '  <li>Gestion des déploiements des applicatifs</li>' +
      '  <li>' +
      '    Gestion d\'équipe et de tâches avec le Framework Scrum en tant que tech lead' +
      '    <ul>' +
      '      <li>Gestion du tableau de tâche & des avancés de l\'équipe</li>' +
      '      <li>Animation des rituels</li>' +
      '      <li>Formations techniques pour les autres équipes</li>' +
      '    </ul>' +
      '  </li>' +
      '  <li>Intégration et accompagnement de nouveaux arrivants dans l\'équipe.</li>' +
      '  <li>' +
      '    Encadrement, accompagnement quotidien d’une équipe de 4 développeurs (1' +
      '    juniors et 3 confirmés).' +
      '  </li>' +
      '  <li>' +
      '    Réunion hebdomadaire avec les autres équipe et le CTO pour le découpage et' +
      '    la priorisation.' +
      '  </li>' +
      '  <li>' +
      '    Réunion hebdomadaire/quotidienne au réunion produit / ciblage du besoin.' +
      '  </li>' +
      '  <li>Mise en place et gestion des évolutions de la CI/CD (Sémpahore).</li>' +
      '</ul>',
      '<h2>MesDocteurs</h2>' +

      '<h3>Mission context</h3>' +

      '<p>' +
      '  I joined MesDocteurs for a team reinforcement in November 2021. MesDocteurs' +
      '  offers a set of applications to perform online teleconsultation with doctors.' +
      '</p>' +
      '<p>' +
      '  Throughout my mission at MesDocteurs, I was able to work with the product team' +
      '  as well as the design team to design a set of features ranging from video' +
      '  calling to payment management..' +
      '</p>' +

      '<p>' +
      '  In addition, although development was my main mission, I was naturally' +
      '  invested by my managers in team management.' +
      '</p>' +

      '<p>' +
      '  ► The challenge was to evolve a very large application while maintaining the' +
      '  legacy applications' +
      '</p>' +

      '<h3>Roles, actions taken and objectives achieved</h3>' +

      '<ul>' +
      '  <li>Architecture & integration of features in a NodeJs (NestJs) REST API</li>' +
      '  <li>' +
      '    Architecture & integration of features in a NodeJs API (NestJs) GraphQl' +
      '  </li>' +
      '  <li>Design and development of features on 4 Angular WebApps</li>' +
      '  <li>Application deployment management</li>' +
      '  <li>' +
      '    Team and task management with the Scrum Framework as a tech lead' +
      '    <ul>' +
      '      <li>Management of the task board & the team\'s progress</li>' +
      '      <li>Animation of rituals</li>' +
      '      <li>Technical training for other teams</li>' +
      '    </ul>' +
      '  </li>' +
      '  <li>Integration and support of newcomers to the team.</li>' +
      '  <li>' +
      '    Supervision, daily support of a team of 4 developers (1 junior and 3' +
      '    confirmed).' +
      '  </li>' +
      '  <li>' +
      '    Weekly meeting with the other teams and the CTO for the breakdown and' +
      '    prioritization.' +
      '  </li>' +
      '  <li>Weekly/daily meeting at the product meeting / targeting the need.</li>' +
      '  <li>Implementation and management of CI/CD evolutions (Sempahore).</li>' +
      '</ul>'),
  }, {
    ...defaultData(),
    title: translatedField('Ateme', 'Ateme'),
    slug: 'ateme',
    services: [services[3]._id],
    skills: [skills[0], skills[1], skills[3]].map(s => s._id),
    testimonials: [],
    members: [memberDataId],
    startDate: new Date('2021-08-01'),
    image: {
      'originalName': 'ateme.png',
      'name': 'ateme.png',
      'bucket': 'development',
      'storageEngine': 's3',
      'size': 1600,
      'mimeType': 'image/png',
      'path': 'otwldfr/apain'
    },
    templates: translatedField(
      '<h2>Ateme</h2>' +
      '<h3>Contexte mission</h3>' +
      '<p>' +
      '  En Aout 2021, j\'ai rejoint l\'entreprise Ateme pour renfort d\'équipe Vue &' +
      '  NodeJs.' +
      '</p>' +
      '<p>' +
      '  En travaillant conjointement avec l\'équipe produit et l\'équipe de design, j\'ai' +
      '  pu concevoir un ensemble de fonctionnalités sur les différents applicatifs de' +
      '  l\'entreprise.' +
      '</p>' +
      '<p>' +
      '  ► Le challenge était faire évoluer une application très large tout en' +
      '  maintenant un niveau de qualité très haut puisque le produit est utilisé pour' +
      '  de la retransmission en direct' +
      '</p>' +
      '<h3>Rôles, actions menées et objectifs atteints</h3>' +
      '<ul>' +
      '  <li>' +
      '    Architecture & intégration de fonctionnalités dans une API NodeJs (NestJs)' +
      '    REST' +
      '  </li>' +
      '  <li>' +
      '    Architecture & intégration de fonctionnalités dans une API NodeJs (NestJs)' +
      '    GraphQl en microservice' +
      '  </li>' +
      '  <li>' +
      '    Conception et développement de fonctionnalités sur plusieurs apps VueJs' +
      '  </li>' +
      '  <li>Gestion des déploiements des applicatifs sur kubernetes</li>' +
      '  <li>' +
      '    Gestion d\'équipe et de tâches avec le Framework Scrum' +
      '    <ul>' +
      '      <li>Gestion du tableau de tâche & des avancés de l\'équipe</li>' +
      '      <li>Participation aux rituels</li>' +
      '      <li>Formations techniques pour les autres équipes</li>' +
      '    </ul>' +
      '  </li>' +
      '  <li>Collaboration avec les QAs pour la mise en place de tests automatisés</li>' +
      '  <li>Documentation des features sur confluence pour les QAs</li>' +
      '  <li>Démonstration d\'avancement devant l\'entreprise complète</li>' +
      '  <li>' +
      '    Réunion hebdomadaire/quotidienne au réunion produit / ciblage du besoin.' +
      '  </li>' +
      '</ul>',
      '<h2>Ateme</h2>' +
      '<h3>Mission context</h3>' +
      '<p>' +
      '  In August 2021, I joined the company Ateme to reinforce the Vue & NodeJs team.' +
      '</p>' +
      '<p>' +
      '  By working together with the product team and the design team, I was able to' +
      '  design a set of features on the different applications of the company.' +
      '</p>' +
      '<p>' +
      '  ► The challenge was to develop a very large application while maintaining a' +
      '  very high level of quality since the product is used for live broadcasting' +
      '</p>' +
      '<h3>Roles, actions taken and objectives achieved</h3>' +
      '<ul>' +
      '  <li>Architecture & integration of features in a NodeJs (NestJs) REST API.</li>' +
      '  <li>' +
      '    Architecture & integration of functionalities in a NodeJs API (NestJs)' +
      '    GraphQl in microservice.' +
      '  </li>' +
      '  <li>Design and development of features on several VueJs apps.</li>' +
      '  <li>Management of application deployments on kubernetes.</li>' +
      '  <li>' +
      '    Team and task management with the Scrum Framework.' +
      '    <ul>' +
      '      <li>Management of the task board & the team\'s progress.</li>' +
      '      <li>Participation in rituals.</li>' +
      '      <li>Technical training for other teams.</li>' +
      '    </ul>' +
      '  </li>' +
      '  <li>Collaboration with QAs for the implementation of automated tests.</li>' +
      '  <li>Documentation of features on confluence for QAs.</li>' +
      '  <li>Progress demonstration in front of the entire company.</li>' +
      '  <li>Weekly/daily meeting at the product meeting / targeting the need.</li>' +
      '</ul>'),
  }
]

export const memberData: Member = {
  slug: 'apain',
  location: {
    city: translatedField('', ''),
    country: translatedField('', ''),
  },
  projects: [projects[0]._id, projects[1]._id],
  jobTitle: translatedField('', ''),
  skills: [{
    skill: skills[0]._id,
    startDate: new Date('2016-11-01'),
    level: 90
  }, {
    skill: skills[1]._id,
    startDate: new Date('2016-11-01'),
    level: 90
  }, {
    skill: skills[2]._id,
    startDate: new Date('2016-11-01'),
    level: 90
  }, {
    skill: skills[3]._id,
    startDate: new Date('2016-11-01'),
    level: 90
  }],
  services: services.map(s => s._id),
  firstName: 'Arthur',
  lastName: 'Pain',
  socials: [{
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/arthur-pain-5b1b3a1a3/',
    serviceName: 'LinkedIn'
  }, {
    icon: 'github',
    serviceName: 'GitHub',
    link: 'https://github.com/otwld'
  }],
  testimonials: [ testimonials[0]._id, testimonials[1]._id],
  updatedAt: new Date(),
  workModes: [{
    workMode: workModes[0]._id,
    description: translatedField('', '')
  }],
  ...defaultData(),
  _id: memberDataId
}
