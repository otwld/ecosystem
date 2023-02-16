import { TConfigDaisyUI, TConfigTheme } from '../../../types/config';
import { defaultDaisyUIConfig } from './default-daisyui-config';
import { daisyUIColors } from './contants/daisyUIColors';

export class DaisyUIConfigParser {
  constructor(private _daisyUIConfig: TConfigDaisyUI) {
    this._daisyUIConfig = {
      ...defaultDaisyUIConfig,
      ...this._daisyUIConfig,
    };
  }

  addToTheme(themeConfig: TConfigTheme): TConfigTheme {
    return {
      ...themeConfig,
      colors: {
        ...themeConfig.colors,
        ...daisyUIColors,
      } as unknown as TConfigTheme['colors'],
    };
  }
}
