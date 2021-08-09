import { useState, useEffect } from 'react';

const useViewport = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	}, []);

	useEffect(() => {
		const handleWindowResize = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		};

		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return { width, height };
};

export { useViewport };
