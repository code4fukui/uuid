import * as t from "https://deno.land/std/testing/asserts.ts";
import { uuid } from "./uuid.js";

Deno.test("simple", () => {
  const chk = uuid();
  const sample = "b9d3b3b4-7547-402a-ad57-0337e0e6ff36";
  t.assertEquals(chk.length, sample.length);
  t.assertEquals(chk.indexOf("="), sample.indexOf("="));
});
