import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServiceIdComponent } from './page-service-id.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageServiceIdComponent', () => {
  let component: PageServiceIdComponent;
  let fixture: ComponentFixture<PageServiceIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageServiceIdComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PageServiceIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
