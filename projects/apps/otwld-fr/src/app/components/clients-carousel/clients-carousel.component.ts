import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client } from '../../types/client.type';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { interval } from 'rxjs';
import { isBrowser } from '@otwld/ui';
import { injectTrackEvent } from '@otwld/features';

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
  private isBrowser = isBrowser();
  @Input() items: Client[] = [];
  @ViewChild('carouselRef', { static: true }) carouselRef:
    | ElementRef<HTMLElement>
    | undefined = undefined;
  trackEvent = injectTrackEvent();

  ngOnInit(): void {
    if (this.isBrowser) {
      interval(5000)
        .pipe(untilDestroyed(this))
        .subscribe(() => {
          if (this.carouselRef) {
            const carousel = this.carouselRef.nativeElement;
            if (
              carousel.scrollLeft + carousel.offsetWidth <=
              carousel.scrollWidth
            ) {
              carousel.scrollLeft += carousel.offsetWidth / 2;
            } else {
              carousel.scrollLeft = 0;
            }
          }
        });
    }
  }
}
