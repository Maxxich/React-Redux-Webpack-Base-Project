import type { BuildOptions } from "./types/config"

export function buildResolvers (config: BuildOptions) {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}