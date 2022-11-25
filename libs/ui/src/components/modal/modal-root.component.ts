import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  Input, OnChanges, SimpleChanges,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../button/button.component';
import { ModalContentDirective } from '../../directives/modal-content/modal-content.directive';
import { BaseComponent } from '../base.component';
import { ModalPositionClass } from '../../types/tailwind.types';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/overlay';
import { NgIf } from '@angular/common';
import { ModalConfig } from '../../modals/modal-config';

@Component({
  standalone: true,
  selector: 'ui-modal-root',
  imports: [ButtonComponent, ModalContentDirective, NgIf],
  template: `
    <div #modalBoxRef class="modal-box relative z-10 cursor-pointer">
      <ui-button
        *ngIf="!disableClose"
        class="absolute right-2 top-2"
        shape="btn-circle"
        btnSize="btn-sm"
        [icon]="faClose"
        (click)="close()"
      ></ui-button>
      <ng-container uiModalContent></ng-container>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalRootComponent<T extends ComponentType<T>>
  extends BaseComponent
  implements AfterViewInit
{
  @Input() modalPosition: ModalPositionClass[] | undefined = undefined;
  @Input() portalContent: Type<T> | undefined = undefined;
  @Input() portalData: { [key in keyof T]: T[keyof T] } | undefined = undefined;
  @Input() disableClose = false;
  @ViewChild(ModalContentDirective, { static: false }) portalOutlet:
    | ModalContentDirective
    | undefined;
  @ViewChild('modalBoxRef', { static: true }) modalBoxRef:
    | ElementRef
    | undefined;

  private component: ComponentRef<unknown> | undefined;
  faClose = faClose;
  @HostBinding('class') override class = ''

  @HostListener('click', ['$event'])
  clickout(event: MouseEvent) {
    if (
      this.modalBoxRef &&
      this.component &&
      !this.modalBoxRef.nativeElement.contains(event.target)
    ) {
      this.close();
    }
  }

  constructor(
    @Inject(DIALOG_DATA)
    public readonly data: ModalConfig<T>,
    private readonly dialogRef: DialogRef,
    private readonly vcr: ViewContainerRef,
    private readonly cdr: ChangeDetectorRef
  ) {
    super();
    this.disableClose = data.disableClose;
    this.modalPosition = data.modalPosition;
    this.portalContent = data.portalContent;
    this.portalData = data.portalData;
    this.class = this.construct(
      () => ['modal', 'modal-open'],
      () => [this.modalPosition]
    );
  }

  ngAfterViewInit(): void {
    if (this.portalContent && this.portalOutlet && this.portalData) {
      const factory = this.vcr.createComponent(this.portalContent);
      for (const portalDataKey in this.portalData) {
        if (portalDataKey in this.portalData) {
          factory.setInput(portalDataKey, this.portalData[portalDataKey]);
        }
      }
      this.portalOutlet.vcr.insert(factory.hostView);
      this.component = factory;
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    }
  }

  close() {
    if (!this.disableClose) {
      this.dialogRef.close();
    }
  }
}
