import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

const proxyTarget =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:5000"
    : "http://backend:5000";

console.log(process.env.NODE_ENV, proxyTarget);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: proxyTarget,
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
    host: "0.0.0.0",
    port: 3000,
  },
});
