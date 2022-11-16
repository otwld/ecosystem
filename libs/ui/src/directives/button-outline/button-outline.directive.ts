import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { Status, TWVmMap } from '../../utils/tailwind.utils';
import classnames, {
  backgroundColor,
  borderColor,
  textColor,
} from '../../types/tailwind.types';

@Directive({
  selector: '[uiButtonOutline]',
  standalone: true,
})
export class ButtonOutlineDirective {
  @Input()
  status: Status | 'default' = 'default';
  classes = {
    danger: 'btn-danger',
    basic: 'btn-basic',
    info: 'btn-info',
    control: 'btn-control',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    warning: 'btn-warning',
    default: ''
  };

  @HostBinding('class') hostClasses = `${
    this.classes[this.status]
  } btn btn-outline`;
}
