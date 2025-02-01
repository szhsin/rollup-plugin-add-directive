import { Plugin } from 'rollup';
import mm, { Options } from 'micromatch';

export interface PluginOptions {
  directive?: string;
  pattern?: string | readonly string[];
  options?: Options;
}

const addDirective = ({
  directive = "'use client';",
  pattern,
  options
}: PluginOptions = {}): Plugin => {
  return {
    name: 'rollup-plugin-add-directive',
    banner: pattern
      ? ({ name }) => (mm.isMatch(name, pattern, options) ? directive : '')
      : directive
  };
};

export { addDirective };
