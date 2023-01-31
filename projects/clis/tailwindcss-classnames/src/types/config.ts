import { baseVariants } from '../core/constants/baseVariants';
import { defaultTailwindConfig } from '../lib/defaultTailwindConfig';
import { defaultDaisyUIConfig } from '../lib/plugins/daisyUI/default-daisyui-config';

export type TTailwindCSSConfig = Partial<
  typeof defaultTailwindConfig &
    Record<'separator' | 'prefix' | 'mode', string> & {
      daisyui: typeof defaultDaisyUIConfig;
    }
>;

export type TConfigDarkMode = false | 'media' | 'class';

export type TConfigTheme = TThemeItems & { extend?: TThemeItems };

export type TConfigVariants = TVariantsItems & {
  extend?: Partial<TVariantsItems>;
};

export type TConfigPlugins = Partial<
  Record<'pluginTypography' | 'pluginCustomForms' | 'pluginDaisyUI', boolean>
>;
export type TConfigDaisyUI = typeof defaultDaisyUIConfig;

export type TThemeItems = typeof defaultTailwindConfig.theme;

type TVariantsItems = typeof baseVariants;
