import {
	Hoodie,
	Activity,
	Umbrella,
	Cactus,
	Database,
	Factory,
	CloudX,
	type IconProps,
} from '@phosphor-icons/react';
import { makeIconBase } from '../lib/main';

const icons = {
	Hoodie,
	Activity,
	Umbrella,
	Cactus,
	Database,
	Factory,
	CloudX,
};
const icon = makeIconBase(icons);

export default icon;

declare module '../lib/core' {
	interface Licon {
		iconProps: IconProps;
		// iconElement: SVGSVGElement;
		iconMap: typeof icons;
	}
}
