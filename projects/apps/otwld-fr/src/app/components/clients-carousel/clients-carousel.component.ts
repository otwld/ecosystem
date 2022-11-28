import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client } from '../../types/client.type';
import { TeamMemberService } from '../../services/team-member/teams.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  from,
  interval,
  map,
  mapTo,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'otwld-clients-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients-carousel.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsCarouselComponent implements OnInit {
  @Input() items: Client[] = [];
  @ViewChild('carouselRef', { static: true }) carouselRef:
    | ElementRef<HTMLElement>
    | undefined = undefined;

  ngOnInit(): void {
    interval(5000)
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        if (this.carouselRef) {
          const carousel = this.carouselRef.nativeElement;
          if (
            carousel.scrollLeft +
              carousel.offsetWidth <=
            carousel.scrollWidth
          ) {
            carousel.scrollLeft +=
              (carousel.offsetWidth / 2);
          } else {
            carousel.scrollLeft = 0;
          }
        }
      });
  }
}
