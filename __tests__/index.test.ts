import { expect, describe, test } from 'vitest';
import { addDirective } from '../src';

type Matcher = (props: { name: string }) => string;

describe('addDirective', () => {
  test('default parameters', () => {
    const { name, banner } = addDirective();
    expect(name).toBe('rollup-plugin-add-directive');
    expect(banner).toBe("'use client';");
  });

  test('pattern matching', () => {
    const { name, banner } = addDirective({
      directive: "'use server';",
      pattern: '**/api/*'
    });
    expect(name).toBe('rollup-plugin-add-directive');
    const matcher = banner as Matcher;
    expect(matcher({ name: 'src/api/test' })).toBe("'use server';");
    expect(matcher({ name: 'src/components/test' })).toBe('');
  });

  test('with options', () => {
    const { banner } = addDirective({
      pattern: 'a?b',
      options: { basename: true }
    });
    const matcher = banner as Matcher;
    expect(matcher({ name: '/xyz/123/acb' })).toBe("'use client';");
    expect(matcher({ name: '/xyz/acb/123' })).toBe('');
  });
});
