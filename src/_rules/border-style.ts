import type { Rule } from '@unocss/core'
import { globalKeywords } from '../_utils/mappings'

export const borderStylesRules: Rule[] = [ "none" , "hidden " , "dotted" , "dashed" , "solid" , "double" , "groove" , "ridge" , "inset" , "outset" ,  ...globalKeywords].map(v => [`br-style:${v}`, { 'border-style': v }])


