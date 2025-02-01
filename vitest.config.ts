import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['__tests__/**/*.test.?(c|m)[jt]s?(x)']
  }
});
