import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  BaseComponent,
  ButtonComponent,
  IsInViewportDirective,
} from '@otwld/ui';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'otwld-about',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    IsInViewportDirective,
    ButtonComponent,
    TranslocoModule,
    RouterLink,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent extends BaseComponent {
  faCheck = faCheck;
}
