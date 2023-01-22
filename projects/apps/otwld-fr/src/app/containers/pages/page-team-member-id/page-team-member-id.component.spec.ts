import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeamMemberIdComponent } from './page-team-member-id.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogModule } from '@angular/cdk/dialog';
import {MembersService} from '@ecosystem/shared-models';
import {of} from 'rxjs';

describe('PageTeamMemberIdComponent', () => {
  let component: PageTeamMemberIdComponent;
  let fixture: ComponentFixture<PageTeamMemberIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTeamMemberIdComponent, RouterTestingModule, DialogModule],
      providers: [{
        provide: MembersService,
        useValue: {
          getMemberBySlug$: of()
        }
      }],
    }).compileComponents();

    fixture = TestBed.createComponent(PageTeamMemberIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
