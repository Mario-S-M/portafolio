"use client";

import { useEffect, useRef, useState } from "react";

// Dynamic import for animejs to avoid SSR issues
let anime: any = null;

const loadAnime = async () => {
  if (typeof window !== 'undefined' && !anime) {
    try {
      anime = (await import('animejs')).default;
    } catch (error) {
      console.warn('Failed to load animejs:', error);
    }
  }
  return anime;
};

interface ScrollRevealOptions {
  targets: string | HTMLElement | NodeListOf<Element>;
  animation: any;
  triggerOffset?: number;
  once?: boolean;
  delay?: number;
}

export function useScrollReveal({
  targets,
  animation,
  triggerOffset = 0.2,
  once = true,
  delay = 0,
}: ScrollRevealOptions) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadAnime().then(() => setIsLoaded(true));
  }, []);

  useEffect(() => {
    if (!isLoaded || !anime) return;

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay before starting animation
            setTimeout(() => {
              anime({
                targets: targets,
                ...animation,
              });
            }, delay);

            if (once) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: triggerOffset,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [targets, animation, triggerOffset, once, delay, isLoaded]);

  return elementRef;
}

// Spectacular animations inspired by animejs.com documentation
export const scrollAnimations = {
  // Basic animations
  fadeInUp: {
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 800,
    easing: 'easeOutCubic',
  },

  fadeInLeft: {
    opacity: [0, 1],
    translateX: [-50, 0],
    duration: 800,
    easing: 'easeOutCubic',
  },

  fadeInRight: {
    opacity: [0, 1],
    translateX: [50, 0],
    duration: 800,
    easing: 'easeOutCubic',
  },

  fadeInDown: {
    opacity: [0, 1],
    translateY: [-50, 0],
    duration: 800,
    easing: 'easeOutCubic',
  },

  // Scale animations
  scaleIn: {
    opacity: [0, 1],
    scale: [0.8, 1],
    duration: 600,
    easing: 'easeOutBack',
  },

  zoomIn: {
    opacity: [0, 1],
    scale: [0.1, 1],
    duration: 600,
    easing: 'easeOutCubic',
  },

  // Rotation animations
  rotateIn: {
    opacity: [0, 1],
    rotate: [-180, 0],
    scale: [0.5, 1],
    duration: 800,
    easing: 'easeOutBack',
  },

  flipIn: {
    opacity: [0, 1],
    rotateY: [-90, 0],
    duration: 800,
    easing: 'easeOutCubic',
  },

  // Bounce animations (like animejs.com)
  slideInBounce: {
    opacity: [0, 1],
    translateY: [100, 0],
    duration: 1000,
    easing: 'easeOutBounce',
  },

  bounceIn: {
    opacity: [0, 1],
    scale: [0.3, 1.05, 0.95, 1],
    duration: 1000,
    easing: 'easeOutBounce',
  },

  // Elastic animations (signature animejs effect)
  elasticScale: {
    scale: [0, 1.2, 1],
    opacity: [0, 1, 1],
    duration: 1000,
    easing: 'easeOutElastic(1, .6)',
  },

  elasticSlide: {
    translateX: [-100, 10, 0],
    opacity: [0, 1, 1],
    duration: 1200,
    easing: 'easeOutElastic(1, .6)',
  },

  // Stagger animations (animejs specialty)
  staggerFadeIn: {
    opacity: [0, 1],
    translateY: [30, 0],
    delay: anime?.stagger(100) || 0,
    duration: 600,
    easing: 'easeOutCubic',
  },

  staggerScale: {
    scale: [0.8, 1],
    opacity: [0, 1],
    delay: anime?.stagger(150) || 0,
    duration: 800,
    easing: 'easeOutBack',
  },

  // Complex animations (animejs.com style)
  morphingShape: {
    scale: [0, 1.2, 1],
    rotate: [0, 180, 360],
    borderRadius: ['0%', '50%', '25%'],
    opacity: [0, 1, 1],
    duration: 1500,
    easing: 'easeOutElastic(1, .8)',
  },

  typewriter: {
    opacity: [0, 1],
    duration: 50,
    delay: anime?.stagger(50) || 0,
    easing: 'easeInOutQuad',
  },

  // Advanced timeline animations
  complexEntrance: {
    opacity: [0, 1],
    scale: [0.5, 1.1, 1],
    rotate: [-10, 5, 0],
    translateY: [50, -10, 0],
    duration: 1200,
    easing: 'easeOutCubic',
  },

  // Color transitions
  colorShift: {
    backgroundColor: ['#ff0000', '#00ff00', '#0000ff'],
    scale: [1, 1.1, 1],
    duration: 2000,
    easing: 'easeInOutSine',
  },

  // Path animations (SVG)
  pathDrawing: {
    strokeDashoffset: [anime?.setDashoffset, 0],
    duration: 2000,
    easing: 'easeInOutSine',
  },

  // 3D transforms
  cubeRotate: {
    rotateX: [-90, 0],
    rotateY: [-90, 0],
    scale: [0.5, 1],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutCubic',
  },

  // Physics-based animations
  gravityDrop: {
    translateY: [-100, 0],
    scale: [0.8, 1.1, 1],
    duration: 800,
    easing: 'easeOutBounce',
  },

  springRebound: {
    scale: [0, 1.5, 0.8, 1.1, 1],
    rotate: [0, -5, 5, -2, 0],
    duration: 1500,
    easing: 'easeOutElastic(1, .3)',
  },

  // Wave animations
  waveIn: {
    opacity: [0, 1],
    translateY: [20, 0],
    delay: anime?.stagger(100, {from: 'center'}) || 0,
    duration: 800,
    easing: 'easeOutCubic',
  },

  // Pulse and glow effects
  pulseGlow: {
    scale: [1, 1.05, 1],
    boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 0 20px rgba(0,123,255,0.4)', '0 0 0 rgba(0,0,0,0)'],
    duration: 2000,
    easing: 'easeInOutSine',
    loop: true,
  },

  // Morphing text
  textMorph: {
    scale: [0.8, 1],
    opacity: [0, 1],
    rotateX: [-90, 0],
    duration: 1000,
    easing: 'easeOutCubic',
  },
};