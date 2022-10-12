import type { Rule } from '@unocss/core'
import { globalKeywords } from '../_utils/mappings'

export const borderCollapseRules: Rule[] = ['collapse' , 'separate', ...globalKeywords].map(v => [`br-collapse:${v}`, { 'border-collapse': v }])
