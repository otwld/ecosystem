import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { PageClientsComponent } from './containers/pages/page-clients/page-clients.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarDefaultComponent } from './components/navbar/navbar-default.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        NavbarDefaultComponent,
        FontAwesomeModule,
        FooterComponent,
        PageClientsComponent,
        RouterTestingModule,
      ],
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
