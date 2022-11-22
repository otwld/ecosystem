import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePortfolioComponent } from './page-portfolio.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PagePortfolioComponent', () => {
  let component: PagePortfolioComponent;
  let fixture: ComponentFixture<PagePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePortfolioComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PagePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
