import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesMenuRouteComponent } from './services-menu-route.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ServicesMenuRouteComponent', () => {
  let component: ServicesMenuRouteComponent;
  let fixture: ComponentFixture<ServicesMenuRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesMenuRouteComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesMenuRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
