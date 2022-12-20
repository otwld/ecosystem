import { InjectionToken } from '@angular/core';

export interface SanitizedTawkToConfiguration {
  entityID: string;
  widgetID: string;
  baseScriptUrl: string;
}

/**
 * Matomo module configuration interface.
 */
export type TawkToConfiguration = SanitizedTawkToConfiguration;

export function sanitizeConfiguration(
  configuration: Partial<TawkToConfiguration>
): Partial<SanitizedTawkToConfiguration> {
  return {
    ...defaultConfiguration,
    ...configuration,
  };
}

/**
 * Injection token for Matomo configuration.
 */
export const TAWK_TO_CONFIGURATION = new InjectionToken<TawkToConfiguration>(
  'TAWK_TO_CONFIGURATION'
);

/**
 * Default configuration for the Matomo module.
 */
const defaultConfiguration: Partial<SanitizedTawkToConfiguration> = {
  baseScriptUrl: 'https://embed.tawk.to',
};
