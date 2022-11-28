import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangSwitcherComponent } from './lang-switcher.component';
import { getTranslocoModule } from '../../testing/transloco-testing.module';

describe('LangSwitcherComponent', () => {
  let component: LangSwitcherComponent;
  let fixture: ComponentFixture<LangSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangSwitcherComponent, getTranslocoModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(LangSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
