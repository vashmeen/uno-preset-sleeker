import type { Rule } from '@unocss/core';
import { globalKeywords } from '../_utils/mappings';

export const cursorRules: Rule[] = [
  'grab',
  'grabbing ',
  'all-scroll',
  'col-resize',
  'row-resize',
  'n-resize',
  'e-resize',
  's-resize',
  'w-resize',
  'nw-resize',
  'se-resize',
  'sw-resize',
  'ew-resize',
  'ns-resize',
  'nwse-resize',
  'zoom-in',
  'zoom-out',
  ...globalKeywords,
].map((v) => [`cursor:${v}`, { 'cursor': v }]);
