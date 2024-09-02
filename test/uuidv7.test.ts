import { uuidv7 } from "uuidv7";
import { test, vi } from 'vitest'

test('performance', () => {
  vi.useFakeTimers();
  vi.setSystemTime(0);

  console.time('uuidv7');
  for(let i = 0; i < 10_000_000; i++) {
    uuidv7();
  }
  console.timeEnd('uuidv7');
})
