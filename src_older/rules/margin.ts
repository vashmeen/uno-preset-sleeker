import type { Rule } from '@unocss/core'


const directionMap = (dir:string) =>  {
  const mapper =  {
    "bl": 'block',
    "bl-start": 'block-start',
    "bl-end": 'block-end',
    "inl": 'inline',
    "inl-start": 'inline-start',
    "inl-end": 'inline-end',
    "top": 'top',
    "bottom": 'bottom',
    'left': 'left',
    'right': 'right'
  }

  return mapper[dir];
}

export const displays: Rule[] = [
  [/^m(-(inl|start))?:(\d+)(rem|em|px|%|ch|vw|vh|vmax|vmin)$/, ([, d,unit]) => ({ margin: `${d}${unit}` })],
  [/^m$/, ([]) => ({ margin: `var(--slk-sz)` })],
  [/^m-((top|right|left|bottom)|((bl|inl)(-start|-end)?)):(\d+)$/, ([, dir,d]) => ({ [`padding-${directionMap(dir)}`]: `${d}rem` })]
];
