# rollup-plugin-add-directive

> Automatically add directives based on glob matching.

[![NPM](https://img.shields.io/npm/v/rollup-plugin-add-directive.svg)](https://www.npmjs.com/package/rollup-plugin-add-directive)

## What does this do?

When you need to include certain directives in your Rollup bundle (e.g., building a React package that contains "use client" or "use server" to support React Server Components), Rollup will warn you and remove these directives from the bundle output. This plugin solves the issue by automatically adding the directives, based on glob matching, to the output code during the bundling process.

## Why can't we add directives manually to the source files?

- Rollup will discard them from the output and produce warnings. [#4699](https://github.com/rollup/rollup/issues/4699)
- The process becomes tedious and error-prone with a large codebase.

## Install

```bash
npm install -D rollup-plugin-add-directive
```

## Usage

```js
import { addDirective } from 'rollup-plugin-add-directive';

export default {
  plugins: [
    // Adds 'use client' to every file if no option is provided
    addDirective()

    // other rollup plugins ...
  ]
};
```

### Use different glob patterns for different directives

```js
import { addDirective } from 'rollup-plugin-add-directive';

export default {
  plugins: [
    // Adds 'use client' to files in the components folder
    addDirective({ pattern: '**/components/*', directive: "'use client';" }),

    // Adds 'use server' to files in the api folder
    addDirective({ pattern: '**/api/*', directive: "'use server';" })

    // other rollup plugins ...
  ]
};
```

### Use options for advanced use cases

This plugin uses `micromatch` for glob matching under the hood and exposes its [options parameter](https://github.com/micromatch/micromatch?tab=readme-ov-file#options) as-is, allowing you to use all the options provided by `micromatch`.

```js
import { addDirective } from 'rollup-plugin-add-directive';

export default {
  plugins: [
    // Adds 'use client' to every file whose name starts with 'use' (e.g., React hooks)
    addDirective({
      pattern: 'use*',
      options: { basename: true },
      directive: "'use client';"
    })

    // other rollup plugins ...
  ]
};
```

## License

[MIT](https://github.com/szhsin/rollup-plugin-add-directive/blob/master/LICENSE)
