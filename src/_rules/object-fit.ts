import type { Rule } from '@unocss/core';
import { globalKeywords } from '../_utils/mappings';

export const objectFitRules: Rule[] = [
  'contain',
  'cover',
  'fill',
  'scale-down',
  'none',
  ...globalKeywords,
].map((v) => [`object-fit:${v}`, { "object-fit": v }]);
