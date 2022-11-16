import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent, CardComponent, IsInViewportDirective } from '@otwld/ui';

@Component({
  selector: 'otwld-teams',
  standalone: true,
  imports: [CommonModule, CardComponent, IsInViewportDirective],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent extends BaseComponent {}
