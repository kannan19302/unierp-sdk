import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { runSdkExample } from "./basic-usage.ts";

describe("SDK runnable examples suite", () => {
  it("executes basic usage example successfully in CI", async () => {
    const res = await runSdkExample();
    assert.equal(res.success, true);
    assert.equal(res.executedOperations.length, 4);
    assert.ok(res.executedOperations.includes("platform.provisionTenant"));
    assert.ok(res.executedOperations.includes("public.listPages"));
  });
});
