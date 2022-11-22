import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroClientComponent } from './hero-client.component';

describe('HeroComponent', () => {
  let component: HeroClientComponent;
  let fixture: ComponentFixture<HeroClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroClientComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
