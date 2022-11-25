import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTitleDescriptionComponent } from './modal-title-description.component';

describe('ModalTitleDescriptionComponent', () => {
  let component: ModalTitleDescriptionComponent;
  let fixture: ComponentFixture<ModalTitleDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalTitleDescriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalTitleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
