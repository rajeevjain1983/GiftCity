

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

  /**
 * Show Dark Overlay in background
 */
export const showOverlay = () => {
    const className = 'dark-overlay';
    if (typeof window !== 'undefined' && document.getElementsByClassName(className)[0]) {
      document.getElementsByClassName(className)[0].style.display = 'block';
    }
  };
  
  /**
   * Remove Dark Overlay from background
   */
  export const closeOverlay = () => {
    const className = 'dark-overlay';
    if (typeof window !== 'undefined' && document.getElementsByClassName(className)[0]) {
      document.getElementsByClassName(className)[0].style.display = 'none';
    }
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
  

  
 
  

  

  export const createUrlSearchParams = (query = {}) => {
    const queryParams = [];
    const keys = Object.keys(query);
    for (let i = 0, l = keys.length; i < l; i += 1) {
      queryParams.push(`${keys[i]}=${query[keys[i]]}`);
    }
    return queryParams.join('&');
  };
  
  export function getHostName() {
    return window.location.hostname;
  }
  
  