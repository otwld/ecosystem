import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseComponent} from '@otwld/ui';
import {ClientsCarouselComponent} from '../../../components/clients-carousel/clients-carousel.component';
import {ClientsService} from '@ecosystem/shared-models';

@Component({
  selector: 'otwld-brands',
  standalone: true,
  imports: [CommonModule, ClientsCarouselComponent],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsComponent extends BaseComponent {
  clients$ = inject(ClientsService).getAllClients$();
}
