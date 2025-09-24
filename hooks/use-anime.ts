"use client";

import { useEffect, useRef } from "react";
// @ts-ignore
import anime from "animejs/lib/anime.es.js";

interface UseScrollAnimationOptions {
  targets: string | HTMLElement | NodeListOf<Element>;
  animation: any;
  triggerOffset?: number;
  once?: boolean;
}

export function useScrollAnimation({
  targets,
  animation,
  triggerOffset = 0.1,
  once = true,
}: UseScrollAnimationOptions) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: targets,
              ...animation,
            });

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
  }, [targets, animation, triggerOffset, once]);

  return elementRef;
}

export function useAnimeHover(targets: string | HTMLElement) {
  const hoverRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = hoverRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      anime({
        targets: targets,
        scale: 1.05,
        duration: 300,
        easing: "easeOutQuad",
      });
    };

    const handleMouseLeave = () => {
      anime({
        targets: targets,
        scale: 1,
        duration: 300,
        easing: "easeOutQuad",
      });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [targets]);

  return hoverRef;
}