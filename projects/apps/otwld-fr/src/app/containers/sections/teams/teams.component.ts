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
  ],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent extends BaseComponent {}
