import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BaseComponent,
  ButtonComponent,
  CardBodyComponent,
  CardComponent,
  IsInViewportDirective,
} from '@otwld/ui';

@Component({
  selector: 'otwld-simulator',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    IsInViewportDirective,
    ButtonComponent,
    CardBodyComponent,
  ],
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimulatorComponent extends BaseComponent {}
