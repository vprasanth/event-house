const { hello } = require("./hello");

test("hello func! default value", () => {
  expect(hello()).toBe("hello, world!");
});

test("hello func input", () => {
  expect(hello("prasanth")).toBe("hello, prasanth!");
});

test("hello func handle null", () => {
  expect(hello()).toBe("hello, world!");
});
