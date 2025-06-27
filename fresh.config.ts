import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

export default defineConfig({
  plugins: [tailwind()],
  router: {
    // basePath: Deno.env.get("BASE_URL"),
    trailingSlash: true
  },
  server: {
    hostname: "0.0.0.0"
  }
});
