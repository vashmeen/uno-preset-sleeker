import type { Rule } from '@unocss/core';
import { globalKeywords } from '../_utils/mappings';

const posMap = (val: string): string => {
  if (val === 'rel') return 'relative';
  if (val === 'abs') return 'absolute';
  return val;
};

export const positionRules: Rule[] = [
  'rel',
  'abs',
  'sticky',
  'fixed',
  'static',
  ...globalKeywords,
].map((v) =>  [`pos:${v}`, { "position": posMap(v) }]);
