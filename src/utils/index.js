
import {
  disableBodyScroll as disableBodyScrollLib,
  enableBodyScroll as enableBodyScrollLib,
  // clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import { breakpoints} from '../../styles/themes/mediaQuery';

export const getViewportInfo = () => {
    if (typeof window === 'undefined') return null;
    if (window.viewportInfo) return window.viewportInfo;
  
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const isMobile = width < parseInt(breakpoints.medium, 10);
    const isTablet = !isMobile && width < parseInt(breakpoints.large, 10);
    const isDesktop = !isMobile && !isTablet;
  
    window.viewportInfo = {
      width,
      height,
      isMobile,
      isTablet,
      isDesktop,
    };
  
    return window.viewportInfo;
  };


 

  export const isMobileApp = () => {
    return typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
  };

  /**
 * To Identify whether the device is ios for web.
 */

export const isiOSWeb = () => {
    const userAgent =
      typeof navigator !== 'undefined' && (navigator.userAgent || navigator.vendor || window.opera);
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return true;
    }
    return false;
  };
  
  export function isClient() {
    return typeof window !== 'undefined' && !isMobileApp();
  }
  /**
   * To Identify whether the device is Android for web.
   */
  
  export const isAndroidWeb = () => {
    const userAgent =
      typeof navigator !== 'undefined' && (navigator.userAgent || navigator.vendor || window.opera);
    if (/Android/.test(userAgent)) {
      return true;
    }
    return false;
  };
  
  /**
   * To Identify whether the device is Android for web.
   */
  export const isMobileWeb = () => {
    return (isClient() && isiOSWeb()) || (isClient() && isAndroidWeb());
  };
  
  /**
 * Enable Body Scroll, Moving it to common utils and putting a check of Mobile app at one place instead of containers.
 */
export const enableBodyScroll = targetElem => {
  if (isClient()) {
    if (isiOSWeb() && targetElem) {
      enableBodyScrollLib(targetElem);
      return;
    }
    const [body] = document.getElementsByTagName('body');
    body.classList.remove('disableBodyScroll');
  }
};

/**
 * Disable Body Scroll
 */
export const disableBodyScroll = targetElem => {
  if (isClient()) {
    if (isiOSWeb() && targetElem) {
      disableBodyScrollLib(targetElem);
      return;
    }
    const [body] = document.getElementsByTagName('body');
    body.classList.add('disableBodyScroll');
  }
};

export const getIconPath = iconName => {
  return `/icons/${iconName}`;
}