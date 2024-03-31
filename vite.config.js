import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import * as child from "child_process";

const commitHash = child.execSync("git rev-parse HEAD").toString().replaceAll("\n", "")
const commitMessage = child.execSync("git show-branch --no-name HEAD").toString().replaceAll("\n", "")

export default defineConfig({
	define: {
		__COMMIT_HASH__: `"${commitHash}"`,
		__COMMIT_MESSAGE__: `"${commitMessage}"`,
	},
	plugins: [sveltekit()]
});
