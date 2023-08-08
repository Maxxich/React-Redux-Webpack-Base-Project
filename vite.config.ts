import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        svgr({ exportAsDefault: true }), 
        react()
    ],
    define: {
        __IS_DEV__: JSON.stringify(true),
    }
})
