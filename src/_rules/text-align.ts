import type { Rule } from '@unocss/core';
import { globalKeywords } from '../_utils/mappings';

export const textAlignRules: Rule[] = [
  'center',
  'left',
  'right',
  'justify',
  'justify-all',
  'match-parent',
  'start',
  'end',
  ...globalKeywords,
].map((v) => [`tx-align:${v}`, { 'text-align': v }]);
