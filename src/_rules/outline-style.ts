import type { Rule } from '@unocss/core'
import { globalKeywords } from '../_utils/mappings'

export const outlineStylesRules: Rule[] = [ "none" , "hidden " , "dotted" , "dashed" , "solid" , "double" , "groove" , "ridge" , "inset" , "outset" ,  ...globalKeywords].map(v => [`outl-style:${v}`, { 'outline-style': v }])


