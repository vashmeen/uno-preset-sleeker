import type { Rule } from '@unocss/core';
import { globalKeywords } from '../_utils/mappings';

export const tableLayoutStyles: Rule[] = [
  'auto',
  'fixed',
  ...globalKeywords,
].map((v) => [`table-layout:${v}`, { 'table-layout': v }]);
