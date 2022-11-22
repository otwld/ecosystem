import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BaseComponent,
  CardActionsComponent,
  CardBodyComponent,
  CardComponent,
  CardImageComponent,
  CardImageDirective,
  CardTitleDirective,
  IsInViewportDirective,
} from '@otwld/ui';
import { TeamsService } from '../../../services/teams/teams.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'otwld-teams',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    IsInViewportDirective,
    CardImageDirective,
    CardTitleDirective,
    CardImageComponent,
    CardActionsComponent,
    CardBodyComponent,
    FontAwesomeModule,
  ],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent extends BaseComponent {
  teams = this.teamsService.teams;

  constructor(private readonly teamsService: TeamsService) {
    super();
  }
}
