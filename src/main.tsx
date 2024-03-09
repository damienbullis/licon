import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

createRoot(document.getElementById('app')!).render(
	<React.StrictMode>
		<main>
			<p>Test</p>
		</main>
	</React.StrictMode>
);
