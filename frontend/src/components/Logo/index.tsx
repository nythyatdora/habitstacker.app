import { HTMLAttributes } from 'react';
import { useViewport } from '@hooks/useViewport';

import LogoDesktop from '@assets/icons/Logo-Desktop.svg';
import LogoLaptop from '@assets/icons/Logo-Laptop.svg';
import LogoTablet from '@assets/icons/Logo-Tablet.svg';
import LogoPhone from '@assets/icons/Logo-Phone.svg';

type LogoProps = HTMLAttributes<HTMLDivElement>;

export default function Logo({ className }: LogoProps) {
	const { width } = useViewport();
	const isDesktop = width >= 1152;
	const isLaptop = width < 1152 && width >= 768;
	const isTablet = width < 768 && width >= 375;
	if (isDesktop) return <LogoDesktop className={className} />;
	if (isLaptop) return <LogoLaptop className={className} />;
	if (isTablet) return <LogoTablet className={className} />;
	return <LogoPhone className={className} />;
}
