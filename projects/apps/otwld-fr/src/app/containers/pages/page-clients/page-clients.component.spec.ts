import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClientsComponent } from './page-clients.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('OnePageClientsComponent', () => {
  let component: PageClientsComponent;
  let fixture: ComponentFixture<PageClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageClientsComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PageClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
