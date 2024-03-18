import { useWindowSize } from 'usehooks-ts';

import { BreakpointX } from '@/config/screen';

export const useScreenSize = () => {
  const { width } = useWindowSize();

  const isMobile = width < BreakpointX.S;
  const isTablet = width < BreakpointX.M;
  const isDesktop = width >= BreakpointX.L;
  const isDesktopXL = width >= BreakpointX.XL;

  return { isMobile, isTablet, isDesktop, isDesktopXL };
};
