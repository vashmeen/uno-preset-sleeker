import type { Rule } from '@unocss/core';
import { globalKeywords } from '../_utils/mappings';

const verticalAlignEnumRules: Rule[] = [
  'middle',
  'baseline',
  'bottom',
  'top',
  'bottom',
  'text-top',
  'text-bottom',
  'sub',
  'super',
  ...globalKeywords,
].map((v) => [`vertical-align:${v}`, { 'vertical-align': v }]);

export const verticalAligns: Rule[] = [
  [
    /^vertical-align:(\d+)(\w+?)$/,
    ([, d, unit]) => ({ 'vertical-align': `${d}${unit}` }),
  ],
  ...verticalAlignEnumRules,
];
