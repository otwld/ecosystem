import { ComponentFixture, TestBed } from '@angular/core/testing';

// TODO: Doit être appliqué globalement et non localement comme ici.
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarDefaultComponent } from './navbar-default.component';
import { getTranslocoModule } from '../../testing/transloco-testing.module';

describe('NavbarComponent', () => {
  let component: NavbarDefaultComponent;
  let fixture: ComponentFixture<NavbarDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarDefaultComponent, RouterTestingModule, getTranslocoModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
