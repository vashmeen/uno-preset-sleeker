import type { Postprocessor, Preset, PresetOptions } from '@unocss/core'
import { preflights } from './preflights'
import { rules } from './rules'
import type { Theme, ThemeAnimation } from './theme'
import { theme } from './theme'
import { variants } from './variants'

export { preflights } from './preflights'
export { theme, colors } from './theme'
export { parseColor } from './utils'

export type { ThemeAnimation, Theme }

export interface DarkModeSelectors {
  /**
   * Selector for light variant.
   *
   * @default '.light'
   */
  light?: string

  /**
   * Selector for dark variant.
   *
   * @default '.dark'
   */
  dark?: string
}

export interface PresetMiniOptions extends PresetOptions {
  /**
   * Dark mode options
   *
   * @default 'class'
   */
  dark?: 'class' | 'media' | DarkModeSelectors
  /**
   * Generate pesudo selector as `[group=""]` instead of `.group`
   *
   * @default false
   */
  attributifyPseudo?: Boolean
  /**
   * Prefix for CSS variables.
   *
   * @default 'un-'
   */
  variablePrefix?: string
  /**
   * Utils prefix
   *
   * @default undefined
   */
  prefix?: string
}

export const presetMini = (options: PresetMiniOptions = {}): Preset<Theme> => {
  options.dark = options.dark ?? 'class'
  options.attributifyPseudo = options.attributifyPseudo ?? false

  return {
    name: '@unocss/preset-mini',
    theme,
    rules,
    variants: variants(options),
    options,
    postprocess: options.variablePrefix && options.variablePrefix !== 'un-'
      ? VarPrefixPostprocessor(options.variablePrefix)
      : undefined,
    preflights,
    prefix: options.prefix,
  }
}

export default presetMini

function VarPrefixPostprocessor(prefix: string): Postprocessor {
  return (obj) => {
    obj.entries.forEach((i) => {
      i[0] = i[0].replace(/^--un-/, `--${prefix}`)
      if (typeof i[1] === 'string')
        i[1] = i[1].replace(/var\(--un-/g, `var(--${prefix}`)
    })
  }
}
