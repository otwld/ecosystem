import { InjectionToken } from '@angular/core';
import { ComponentConfiguration } from '../types/component-configuration.type';

export const COMPONENT_CONFIGURATION =
  new InjectionToken<ComponentConfiguration>('component-configuration');
