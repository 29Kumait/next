// next.config.mjs
import stylexPlugin from "@stylexjs/nextjs-plugin";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

export default stylexPlugin({
  rootDir: __dirname,
})(nextConfig);