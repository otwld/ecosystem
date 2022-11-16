import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { BaseComponent } from '@otwld/ui';

@Component({
  selector: 'otwld-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent extends BaseComponent {
  faPhone = faPhone;
  faPaperPlane = faPaperPlane;
}
