import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCarouselComponent } from './clients-carousel.component';

describe('BrandCarouselComponent', () => {
  let component: ClientsCarouselComponent;
  let fixture: ComponentFixture<ClientsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
