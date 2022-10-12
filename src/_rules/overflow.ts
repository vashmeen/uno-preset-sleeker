import type { Rule } from '@unocss/core';
import { globalKeywords } from '../_utils/mappings';

const keywords = [
  'hidden',
  'scroll',
  'auto',
  'visible',
  'clip',
]
export const overflowRules: Rule[] = [
  ...keywords,
  ...globalKeywords,
].map((v) =>  [`overflow:${v}`, { "overflow": v }]);

export const overflowXRules: Rule[] = [
  ...keywords,
  ...globalKeywords,
].map((v) =>  [`overflow-x:${v}`, { "overflow-x": v }]);

export const overflowYRules: Rule[] = [
  ...keywords,
  ...globalKeywords,
].map((v) =>  [`overflow-y:${v}`, { "overflow-y": v }]);

export const overflowBlockRules: Rule[] = [
  ...keywords,
  ...globalKeywords,
].map((v) =>  [`overflow-bl:${v}`, { "overflow-block": v }]);

export const overflowInlineRules: Rule[] = [
  ...keywords,
  ...globalKeywords,
].map((v) =>  [`overflow-inl:${v}`, { "overflow-inline": v }]);
