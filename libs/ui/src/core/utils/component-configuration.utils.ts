import { COMPONENT_CONFIGURATION } from '../tokens/component-configuration.token';
import { ComponentConfiguration } from '../types/component-configuration.type';

export const provideComponentConfiguration = (
  configuration: ComponentConfiguration
) => {
  return {
    provide: COMPONENT_CONFIGURATION,
    useValue: configuration,
  };
};
