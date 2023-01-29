import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsComponent } from './brands.component';
import { MockProvider } from 'ng-mocks';
import { MatomoTracker } from '@otwld/features';
import {ClientsService} from '@ecosystem/shared-models';

describe('BrandsComponent', () => {
  let component: BrandsComponent;
  let fixture: ComponentFixture<BrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsComponent],
      providers: [
        MockProvider(MatomoTracker),
        MockProvider(ClientsService)
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
