import { v7 as uuid } from "uuid";
import { uuidv7 } from "uuidv7";
import { UUIDv7 as uuidv7js } from "uuidv7-js";
import { typeid as typeidjs } from "typeid-js";
import { test, vi } from "vitest";

test("performance", () => {
  vi.useFakeTimers();
  vi.setSystemTime(1);

  console.time("uuid");
  for (let i = 0; i < 10_000_000; i++) {
    uuid();
  }
  console.timeEnd("uuid");

  console.time("uuidv7");
  for (let i = 0; i < 10_000_000; i++) {
    uuidv7();
  }
	console.timeEnd("uuidv7");

	const uuidv7jsInstance = new uuidv7js();
	console.time("uuidv7-js");
	for (let i = 0; i < 10_000_000; i++) {
		uuidv7jsInstance.gen();
	}
	console.timeEnd("uuidv7-js");

  console.time("typeid w/ uuidv7");
  for (let i = 0; i < 10_000_000; i++) {
    typeidjs("test").toString();
  }
  console.timeEnd("typeid w/ uuidv7");
});
