import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import { BorderColorClass } from '../../types/tailwind/utils/border.types';
import { TextColorClass } from '../../types/tailwind/utils/general.types';
import { BackgroundColorClass } from '../../types/tailwind/utils/background.types';


@Component({
  selector: 'ui-radial-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radial-progress.component.html',
  styleUrls: ['./radial-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadialProgressComponent extends BaseComponent {
  @Input() value: number | string = 0;
  @Input() size: number | undefined;
  @Input() thickness: number | undefined;
  @Input() textColor: TextColorClass | undefined;
  @Input() backgroundColor: BackgroundColorClass | undefined;
  @Input() borderColor: BorderColorClass | undefined;
}
