import { resolveSync } from 'bun';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: resolveSync('lib/index.ts', process.cwd()),
			name: 'licon',
			fileName: 'licon',
		},
		rollupOptions: {
			external: ['react'],
			output: {
				globals: {
					react: 'React',
				},
			},
		},
	},
});
