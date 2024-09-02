import { UUIDv7 } from "uuidv7-js";
import { test, vi } from 'vitest'

test('performance', () => {
  vi.useFakeTimers();
  vi.setSystemTime(0);

  const uuidv7 = new UUIDv7();

  console.time('uuidv7-js');
  for(let i = 0; i < 10_000_000; i++) {
    uuidv7.gen();
  }
  console.timeEnd('uuidv7-js');
})
