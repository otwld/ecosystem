import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBreadcrumbsComponent } from './hero-breadcrumbs.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeroRouteNameComponent', () => {
  let component: HeroBreadcrumbsComponent;
  let fixture: ComponentFixture<HeroBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroBreadcrumbsComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
