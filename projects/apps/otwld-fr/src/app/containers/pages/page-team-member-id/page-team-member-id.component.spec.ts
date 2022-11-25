import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeamMemberIdComponent } from './page-team-member-id.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogModule } from '@angular/cdk/dialog';

describe('PageTeamMemberIdComponent', () => {
  let component: PageTeamMemberIdComponent;
  let fixture: ComponentFixture<PageTeamMemberIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTeamMemberIdComponent, RouterTestingModule, DialogModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PageTeamMemberIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
