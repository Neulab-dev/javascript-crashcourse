const controller = new AbortController();
const url = "https://example.com";

fetch(url, { signal: controller.signal })
  .then(() => console.log("successfull resolution"))
  .catch((error) => console.log("fetch error:", error.message))
  .finally(() => console.log("Fetch completed"));
// Later...
controller.abort();
