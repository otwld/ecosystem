import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AbstractComponent } from './abstract.component';
import { classnames } from '@otwld/ui';

@UntilDestroy()
@Component({
  standalone: true,
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DumbComponent extends AbstractComponent implements OnChanges {
  private args: (() => Parameters<typeof classnames>) | undefined;

  getComponentClasses(getParams: () => Parameters<typeof classnames>) {
    this.args = getParams;
    return classnames(...getParams());
  }

  ngOnChanges(changes: SimpleChanges) {
    this.classes = this.getComponentClasses(this.args ? this.args : () => []);
  }
}
