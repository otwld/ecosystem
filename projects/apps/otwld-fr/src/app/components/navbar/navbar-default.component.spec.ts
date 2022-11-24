import { ComponentFixture, TestBed } from '@angular/core/testing';

// TODO: Doit être appliqué globalement et non localement comme ici.
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarDefaultComponent } from './navbar-default.component';

describe('NavbarComponent', () => {
  let component: NavbarDefaultComponent;
  let fixture: ComponentFixture<NavbarDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarDefaultComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
