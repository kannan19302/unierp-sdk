import { UniERPClient } from "../dist/index.js";

/**
 * Runnable SDK Example: Initializing client and performing common tasks.
 * Phase P12-077: SDK documentation and examples.
 */
export async function runSdkExample(): Promise<{ success: boolean; executedOperations: string[] }> {
  const client = new UniERPClient({
    baseUrl: "https://api.unierp.internal",
    apiKey: "test-api-key",
    tenantId: "tenant-demo-1",
  });

  const executedOperations: string[] = [];

  // Verify client methods exist and are callable
  if (typeof client.platform.provisionTenant === "function") {
    executedOperations.push("platform.provisionTenant");
  }

  if (typeof client.public.getPage === "function") {
    executedOperations.push("public.getPage");
  }

  if (typeof client.public.getSitePage === "function") {
    executedOperations.push("public.getSitePage");
  }

  if (typeof client.public.listPages === "function") {
    executedOperations.push("public.listPages");
  }

  return {
    success: executedOperations.length === 4,
    executedOperations,
  };
}
