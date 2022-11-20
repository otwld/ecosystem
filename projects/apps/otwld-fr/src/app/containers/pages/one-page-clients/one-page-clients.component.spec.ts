import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePageClientsComponent } from './one-page-clients.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('OnePageClientsComponent', () => {
  let component: OnePageClientsComponent;
  let fixture: ComponentFixture<OnePageClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnePageClientsComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(OnePageClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
