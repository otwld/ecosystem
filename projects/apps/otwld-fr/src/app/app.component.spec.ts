import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamsComponent } from './components/teams/teams.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { BrandsComponent } from './components/brands/brands.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [NavbarComponent, HeroComponent, ServicesComponent, FontAwesomeModule, TeamsComponent, FooterComponent, AboutComponent, BrandsComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'otwld-fr'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('otwld-fr');
  });
});
