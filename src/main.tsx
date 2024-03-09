import React from 'react';
import { createRoot } from 'react-dom/client';
// import { testing } from 'licon-react';
import { Testing } from '../lib/main';

import './index.css';

function App() {
	Testing();
	return <div>tset</div>;
}
const el = document.getElementById('app');
if (!el) throw new Error('app element not found');
createRoot(el).render(
	<React.StrictMode>
		<main>
			<App />
		</main>
	</React.StrictMode>
);
