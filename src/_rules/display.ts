import type { Rule } from '@unocss/core';
import { globalKeywords } from '../_utils/mappings';

export const displayRules: Rule[] = [
  'block',
  'inline',
  'inline-block',
  'flex',
  'inline-flex',
  'grid',
  'inline-grid',
  'flow-root',
  'none',
  'contents',
  'table',
  'table-row',
  'list-item',
  ...globalKeywords,
].map((v) => [`d:${v}`, { display: v }]);
