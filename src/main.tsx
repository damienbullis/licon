import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './app';

const el = document.getElementById('app');
if (!el) throw new Error('app element not found');
createRoot(el).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
