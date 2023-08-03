import type {Config} from "jest"
import * as path from "path"

const config: Config = {
	testEnvironment: "jsdom",
	clearMocks: true,
	testMatch: [
		"<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"
	],
	rootDir: "../../",
	modulePaths: [
	"<rootDir>src"
	],
	moduleNameMapper: {
		"\\.(s?css)$": "identity-obj-proxy",
		"\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
		"\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": path.resolve(__dirname, "jestPictureMock.ts"),
	  },
	setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.ts"],
	globals: {
		__IS_DEV__: true,
	},
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
}

export default config
