import stylexPlugin from "@stylexjs/nextjs-plugin";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {};

export default stylexPlugin({
  rootDir: __dirname,
})(nextConfig);
