import { expect, test } from "vitest";
import { render } from "./render";

test("it does render", () => {
  expect(render()).toBe("<div>Hello World</div>");
});
