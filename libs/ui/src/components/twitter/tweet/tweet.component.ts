import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { BaseComponent } from '../../base.component';
import { TwitterService } from '../twitter.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'ui-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TweetComponent extends BaseComponent implements OnInit {
  private _elementRef = inject(ElementRef);
  private _twitterService = inject(TwitterService);

  private _tweetID: string | undefined;

  get tweetID(): string | undefined {
    return this._tweetID;
  }

  @Input()
  set tweetID(value: string | undefined) {
    this._tweetID = value;
  }

  ngOnInit(): void {
    this._twitterService
      .scriptLoaded$()
      .pipe(
        untilDestroyed(this),
        filter((loaded) => loaded)
      )
      .subscribe(() => {
        this.loadTweet();
      });
  }

  private loadTweet() {
    if (!this.tweetID) {
      throw new Error('Tweet ID is required');
    }
    this._twitterService
      .widgets()
      .createTweetEmbed(this.tweetID, this._elementRef.nativeElement);
  }
}
