import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServicesComponent } from './page-services.component';
import { RouterTestingModule } from '@angular/router/testing';
import {MockProvider} from 'ng-mocks';
import {ServicesService} from '@ecosystem/shared-models';
import {of} from 'rxjs';

describe('PageServicesComponent', () => {
  let component: PageServicesComponent;
  let fixture: ComponentFixture<PageServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageServicesComponent, RouterTestingModule],
      providers: [
        MockProvider(ServicesService, {
          getAllServices$: () => of([])
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PageServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
