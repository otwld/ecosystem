import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonFillComponent,
  CardComponent,
  IsInViewportDirective,
} from '@otwld/ui';

@Component({
  selector: 'otwld-simulator',
  standalone: true,
  imports: [
    CommonModule,
    ButtonFillComponent,
    CardComponent,
    IsInViewportDirective,
  ],
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimulatorComponent {}
