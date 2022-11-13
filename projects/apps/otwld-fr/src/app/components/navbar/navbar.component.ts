import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@otwld/ui';

@Component({
  selector: 'otwld-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ButtonComponent, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
}
