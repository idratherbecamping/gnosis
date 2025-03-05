import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(async () => {
  // Dynamically import plugins only when needed
  const plugins = [react()];
  
  // Only load these plugins in development mode
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    try {
      // Try to import optional plugins
      const cartographerModule = await import("@replit/vite-plugin-cartographer").catch(() => null);
      const themePluginModule = await import("@replit/vite-plugin-shadcn-theme-json").catch(() => null);
      const runtimeErrorOverlayModule = await import("@replit/vite-plugin-runtime-error-modal").catch(() => null);
      
      if (themePluginModule) plugins.push(themePluginModule.default());
      if (runtimeErrorOverlayModule) plugins.push(runtimeErrorOverlayModule.default());
      if (cartographerModule) plugins.push(cartographerModule.cartographer());
    } catch (error) {
      console.warn("Some Replit plugins couldn't be loaded, but the app will still work:", error);
    }
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
      },
    },
    root: path.resolve(__dirname, "client"),
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'wouter'],
    },
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..'],
      },
    },
  };
});
