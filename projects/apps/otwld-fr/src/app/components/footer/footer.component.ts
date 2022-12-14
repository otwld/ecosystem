import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { BaseComponent } from '@otwld/ui';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'otwld-footer',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslocoModule,
    RouterLinkWithHref,
    RouterLink,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent extends BaseComponent {
  faPhone = faPhone;
  faPaperPlane = faPaperPlane;
  actualYear = new Date().getFullYear();
  faLinkedIn = faLinkedin;
}
