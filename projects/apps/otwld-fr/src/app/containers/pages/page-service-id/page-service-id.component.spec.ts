import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServiceIdComponent } from './page-service-id.component';
import { RouterTestingModule } from '@angular/router/testing';
import { getTranslocoModule } from '../../../testing/transloco-testing.module';
import {ServicesService} from '@ecosystem/shared-models';
import {MockProvider} from 'ng-mocks';

describe('PageServiceIdComponent', () => {
  let component: PageServiceIdComponent;
  let fixture: ComponentFixture<PageServiceIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageServiceIdComponent, RouterTestingModule, getTranslocoModule()],
      providers: [
        MockProvider(ServicesService)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PageServiceIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
