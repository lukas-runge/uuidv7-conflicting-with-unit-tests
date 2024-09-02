import { v7 } from "uuid";
import { test, vi } from 'vitest'

test('performance', () => {
  vi.useFakeTimers();
  vi.setSystemTime(0);

  console.time('uuid');
  for(let i = 0; i < 10_000_000; i++) {
    v7();
  }
  console.timeEnd('uuid');
})
