import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsComponent } from './brands.component';
import { MockProvider } from 'ng-mocks';
import { MatomoTracker } from '@otwld/features';

describe('BrandsComponent', () => {
  let component: BrandsComponent;
  let fixture: ComponentFixture<BrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsComponent],
      providers: [
        MockProvider(MatomoTracker)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
