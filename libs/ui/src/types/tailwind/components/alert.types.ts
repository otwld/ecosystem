import { ColorState } from '../utils/color.types';

type AlertBaseClass = 'alert';
export type AlertColorClass = `alert-${ColorState}`;
export type AlertClass = AlertBaseClass | AlertColorClass;
