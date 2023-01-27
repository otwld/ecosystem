import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PagePortfolioComponent} from './page-portfolio.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ProjectsService} from '@ecosystem/shared-models';

describe('PagePortfolioComponent', () => {
  let component: PagePortfolioComponent;
  let fixture: ComponentFixture<PagePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePortfolioComponent, RouterTestingModule],
      providers: [{
        provide: ProjectsService,
        useValue: {},
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(PagePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
