import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

let lenis = null;

export const scrollTo = (target) => {
  if (lenis) {
    lenis.scrollTo(target, {
      offset: 0,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
  } else {
    // Fallback to native smooth scroll
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export const useSmoothScroll = () => {
  useEffect(() => {
    if (!lenis) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2
      });
    }

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
    };
  }, []);
};

const SmoothScroll = () => {
  useSmoothScroll();
  return null;
};

export default SmoothScroll;
