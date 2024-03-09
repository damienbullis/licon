import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: resolve(__dirname, 'lib/main.ts'),
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
