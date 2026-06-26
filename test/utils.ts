import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import postcss from 'postcss';
import postcssNesting from 'postcss-nesting';
import { expect } from 'vitest';

export const ROOT_FONT_SIZE_PX = 16;
export const TOLERANCE_PX = 1;

export function remToPx(rem: number): number {
  return rem * ROOT_FONT_SIZE_PX;
}

export function expectDimensionNear(actual: number, expectedPx: number, tolerancePx = TOLERANCE_PX): void {
  expect(Math.abs(actual - expectedPx)).toBeLessThanOrEqual(tolerancePx);
}

export function setRootFontSize(fontSizePx = ROOT_FONT_SIZE_PX): void {
  document.documentElement.style.fontSize = `${fontSizePx}px`;
}

export async function injectComponentStyles(relativePath: string): Promise<void> {
  const source = readFileSync(resolve(relativePath), 'utf8');
  const styleBlocks = [...source.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)];

  if (styleBlocks.length === 0) {
    throw new Error(`No <style> block found in ${relativePath}`);
  }

  for (const [, styleContent] of styleBlocks) {
    const css = await postcss([postcssNesting]).process(styleContent, { from: undefined });
    const style = document.createElement('style');
    style.textContent = css.css;
    document.head.appendChild(style);
  }
}
