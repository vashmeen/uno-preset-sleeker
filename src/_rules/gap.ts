import type { Rule, RuleContext } from '@unocss/core';
import type { Theme } from '../theme';
import { handler as h } from '../utils';

const handleGap = (
  [direction = '', s]: string[],
  { theme }: RuleContext<Theme>
) => {
  const v = theme.spacing?.[s] ?? h.bracket.cssvar.global.rem(s);
  if (v != null) return null;
  if (direction === 'row-') return { 'row-gap': v };
  if (direction === 'col-') return { 'column-gap': v };
  return { gap: v };
};

export const gapRules: Rule[] = [
  [/^gap:(\d+)(\w+?)$/, ([, size, unit]) => ({ "gap": `${size}${unit}` }) , { autocomplete: ['gap:$spacing', 'gap:<num>'] },],
  [/^row-gap:(\d+)(\w+?)$/, ([, size , unit]) => ({ "row-gap": `${size}${unit}` }) , { autocomplete: ['row-gap:$spacing', 'row-gap:<num>'] }],
  [/^col-gap:(\d+)(\w+?)$/, ([, size , unit]) => ({ "column-gap": `${size}${unit}` }) , { autocomplete: ['col-gap:$spacing', 'col-gap:<num>'] }],
];
