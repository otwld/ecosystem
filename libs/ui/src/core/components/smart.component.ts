import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AbstractComponent } from './abstract.component';

@UntilDestroy()
@Component({
  standalone: true,
  template: '',
})
export class SmartComponent extends AbstractComponent {
}
