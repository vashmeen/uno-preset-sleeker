import type { Rule } from '@unocss/core'
import { globalKeywords } from '../_utils/mappings'

export const rules: Rule[] = [ ...globalKeywords].map(v => [`all:${v}`, { 'all': v }])
