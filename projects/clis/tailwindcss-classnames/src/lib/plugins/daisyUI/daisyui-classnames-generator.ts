import { TConfigTheme } from '../../../types/config';
import { DaisyUIConfigParser } from './daisyui-config-parser';
import { Alert, DaisyUI } from './classes';
import { nonConfigurableClassNames } from './non-configurable';

export class DaisyuiClassnamesGenerator {
  private readonly _configParser: DaisyUIConfigParser;
  private readonly _theme: Omit<TConfigTheme, 'extend'>;
  private readonly _generatedRegularClassnames: DaisyUI;
  // private readonly _generatedPseudoClassnames: string[];

  constructor(
    parser: DaisyUIConfigParser,
    theme: Omit<TConfigTheme, 'extend'>
  ) {
    this._configParser = parser;
    this._theme = theme;
    this._generatedRegularClassnames = {
      Alert: this.alert(),
    } as unknown as DaisyUI;
  }

  public generate = (): DaisyUI => {
    return this._generatedRegularClassnames;
  };

  private alert = (): Alert => {
    return {
      ...nonConfigurableClassNames.Alert,
      alertStatus: [
        'alert-error',
        'alert-success',
        'alert-warning',
        'alert-info',
      ],
    };
  };
}
