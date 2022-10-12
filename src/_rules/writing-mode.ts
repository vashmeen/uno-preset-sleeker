import type { Rule } from '@unocss/core';
import { globalKeywords } from '../_utils/mappings';

export const writingModeRules: Rule[] = [
  'horizontal-tb',
  'vertical-rl',
  'vertical-lr',
  ...globalKeywords,
].map((v) => [`writing-mode:${v}`, { 'writing-mode': v }]);
