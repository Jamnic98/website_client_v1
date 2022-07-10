import { useEffect, useState } from 'react';

type WindowDimensions = number | undefined;

const useWidth = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] =
    useState<WindowDimensions>(undefined);

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWidth;
