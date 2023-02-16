import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  NgModule,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import {
  faCheckCircle,
  faClose,
  faInfoCircle,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  alert,
  alertBase,
  alertStatus,
  classnames,
  TAlertStatus,
} from '../../types/tailwind.types';

@Component({
  selector: 'ui-alert',
  templateUrl: './alert.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent extends BaseComponent {
  @Input() color: TAlertStatus | undefined = undefined;
  @HostBinding('class') override class = classnames(
    alert(
      alertBase('alert'),
      alertStatus(this.color)
    )
  )
  @Input() title: string | undefined = undefined;
  @Input() message: string | undefined = undefined;
  @Input() slotEndTpl: TemplateRef<unknown> | undefined = undefined;
  @Input() icon: IconDefinition | undefined = undefined;

  config: Record<TAlertStatus | 'default', { icon: IconDefinition }> = {
    'alert-info': { icon: faInfoCircle },
    'alert-success': { icon: faCheckCircle },
    'alert-warning': { icon: faWarning },
    'alert-error': { icon: faClose },
    default: { icon: faInfoCircle },
  };
}

@Component({
  selector: 'ui-alert-actions',
  template: `<ng-content></ng-content>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertActionsComponent extends BaseComponent {
  @HostBinding('class') override class = this.construct(
    () => ['flex-none']
  );
}

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [AlertComponent, AlertActionsComponent],
  exports: [AlertComponent, AlertActionsComponent],
})
export class AlertModule {}
