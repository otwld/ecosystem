import { Injectable } from '@angular/core';
import { Client } from '../../types/client.type';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  clients: Client[] = [
    {
      name: 'Adventiel',
      logo: 'https://www.sgpi.eu/IMG/arton20.png',
      description: '',
      website: 'https://adventiel.com'
    },
    {
      name: 'Mes Docteurs',
      logo: 'https://theme.zdassets.com/theme_assets/2456814/8b54e15f88bdfe1abfb47e3db9831843f55910fa.png',
      description: '',
      website: 'https://mesdocteurs.com'
    },
    {
      name: 'Ateme',
      logo: 'https://www.ateme.com/wp-content/uploads/2022/11/logo-ateme-regular.png',
      description: '',
      website: 'https://ateme.com'
    },
    {
      name: 'Louis Vuitton',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Louis_Vuitton_logo_and_wordmark.svg/1679px-Louis_Vuitton_logo_and_wordmark.svg.png',
      description: '',
      website: 'https://louisvuitton.com'
    }
  ];
}
