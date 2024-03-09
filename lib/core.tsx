import { Suspense, createElement, forwardRef, lazy } from 'react';

/**
 * ### LiconProps
 */
type LiconProps = (Licon extends { iconProps: infer T } ? T : Record<string, unknown>) & {
	type: keyof (Licon extends { iconMap: infer T } ? T : Record<string, unknown>);
};

/**
 * ### makeIconBase
 *
 * This function will take your custom Icon map and return a base Icon component
 *
 * @param obj - The object that contains all of your icon components
 * @returns
 */
export function makeIconBase(obj: Record<keyof RegisterMap, React.ElementType>) {
	const Icon = forwardRef<RegisterElement, LiconProps>((props, ref) => {
		const { type, ...rest } = props;
		const I = obj[type];
		if (!I) throw new Error(`Icon not found: ${type}`);

		return createElement(I, Object.assign(rest, { ref }));
	});

	return Icon;
}

/**
 * ### makeLicon
 *
 * @param i - The promise that contains the object that contains all of your icon components
 * @returns A Suspense wrapped lazy icon component
 */
export function makeLicon(
	i: Promise<{ default: ReturnType<typeof makeIconBase> }>,
	fallback?: React.ReactElement
) {
	const C = lazy(() => i),
		F = fallback || <span />;

	return forwardRef<RegisterElement, LiconProps>((props, ref) => {
		return (
			<Suspense fallback={F}>
				<C {...props} ref={ref} />
			</Suspense>
		);
	});
}

type RegisterMap = Licon extends {
	iconMap: infer T;
}
	? T
	: never;
type RegisterElement = Licon extends {
	iconMap: infer T;
}
	? Licon extends {
			iconElement: infer U;
		}
		? U
		: T[keyof T]
	: SVGElement | HTMLElement | React.ElementType;

export interface Licon {
	// iconElement,
	// iconProps,
	// iconMap,
}
