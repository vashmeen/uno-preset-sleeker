import type { Rule } from '@unocss/core'

export const displays: Rule[] = [
  ['bg:red', { background: 'red' }],
  [/^m-(\d+)$:/, ([, d]) => ({ margin: `${d / 4}rem` })]
];