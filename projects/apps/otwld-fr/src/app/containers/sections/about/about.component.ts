import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  BaseComponent,
  ButtonComponent,
  IsInViewportDirective,
} from '@otwld/ui';

@Component({
  selector: 'otwld-about',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    IsInViewportDirective,
    ButtonComponent,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent extends BaseComponent {
  faCheck = faCheck;
}
