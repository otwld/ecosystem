import { inject } from '@angular/core';
import { MatomoTracker } from './matomo-tracker.service';

export const injectTrackEvent = () => inject(MatomoTracker).trackEvent;
