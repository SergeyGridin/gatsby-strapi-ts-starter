import React, { useEffect } from 'react';

// Got from https://usehooks.com/useLockBodyScroll/
export function useLockBodyScroll() {
  useEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []); // Empty array ensures effect is only run on mount and unmount
}

export function useOnClickOutside(ref: any, handler: (e: any) => void) {
  useEffect(() => {
    const listener = (event: React.MouseEvent<HTMLElement>) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener as any);
    document.addEventListener('touchstart', listener as any);

    return () => {
      document.removeEventListener('mousedown', listener as any);
      document.removeEventListener('touchstart', listener as any);
    };
  }, [ref, handler]);
}
