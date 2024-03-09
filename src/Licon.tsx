import { makeLicon } from '../lib/main';

// 5. Use the buildLicon function to create a lazy icon component
const Licon = makeLicon(import('./phosphor-icons'));

// 6. Export the lazy icon component for use in your app
export { Licon };
