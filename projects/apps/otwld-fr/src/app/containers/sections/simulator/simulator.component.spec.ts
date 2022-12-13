import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorComponent } from './simulator.component';
import { MockProvider } from 'ng-mocks';
import { MatomoTracker } from '@otwld/features';

describe('SimulatorComponent', () => {
  let component: SimulatorComponent;
  let fixture: ComponentFixture<SimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulatorComponent],
      providers: [
        MockProvider(MatomoTracker)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
