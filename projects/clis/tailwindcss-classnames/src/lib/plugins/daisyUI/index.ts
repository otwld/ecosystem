import { TConfigTheme } from '../../../types/config';
import { Alert, Card, DaisyUI } from './classes';
import { DaisyUIConfigParser } from './daisyui-config-parser';
import { nonConfigurableClassNames } from './non-configurable';

export class PluginDaisyUI {
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
      Card: this.card(),
    };
  }

  public generate = (): DaisyUI => {
    return this._generatedRegularClassnames;
  };

  private card = (): Card => {
    return {
      ...nonConfigurableClassNames.Card,
    };
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
