import type { Rule } from '@unocss/core';
import { globalKeywords } from '../_utils/mappings';

export const directionRules: Rule[] = [
  'rtl',
  'ltr',
  ...globalKeywords,
].map((v) => [`dir:${v}`, { 'direction': v }]);
