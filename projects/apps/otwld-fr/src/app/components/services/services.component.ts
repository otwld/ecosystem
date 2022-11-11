import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'otwld-services',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  faCoffee = faAppleAlt;
}
