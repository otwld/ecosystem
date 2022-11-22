import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroClientImageComponent } from './hero-client-image.component';

describe('HeroImageComponent', () => {
  let component: HeroClientImageComponent;
  let fixture: ComponentFixture<HeroClientImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroClientImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroClientImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
