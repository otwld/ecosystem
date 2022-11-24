import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeamMemberIdComponent } from './page-team-member-id.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageTeamMemberIdComponent', () => {
  let component: PageTeamMemberIdComponent;
  let fixture: ComponentFixture<PageTeamMemberIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTeamMemberIdComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PageTeamMemberIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
