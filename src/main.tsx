import React from 'react';
import { createRoot } from 'react-dom/client';
// import { testing } from 'licon-react';
import { helloAnything } from '../';
import './index.css';
function App() {
	const res = helloAnything('world');
	return <div>{res}</div>;
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
