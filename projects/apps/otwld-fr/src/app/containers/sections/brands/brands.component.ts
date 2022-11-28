import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '@otwld/ui';
import { ClientsCarouselComponent } from '../../../components/clients-carousel/clients-carousel.component';
import { ClientsService } from '../../../services/client/clients.service';

@Component({
  selector: 'otwld-brands',
  standalone: true,
  imports: [CommonModule, ClientsCarouselComponent],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsComponent extends BaseComponent {
  clients = this.clientsService.clients;

  constructor(
    private readonly clientsService: ClientsService,
  ) {
    super();
  }
}
