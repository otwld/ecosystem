import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'otwld-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent {
}
