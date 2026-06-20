import React, { useEffect, useRef, useState } from "react";

const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isTextZone, setIsTextZone] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorTargetRef = useRef({ x: 0, y: 0 });
  const haloRef = useRef({ x: 0, y: 0 });
  const diamondRef = useRef<HTMLDivElement>(null);
  const crossRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouchDevice || reducedMotion) {
      return;
    }

    const setElementPosition = (element: HTMLDivElement | null, x: number, y: number) => {
      if (!element) return;
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
    };

    const updateCursor = (event: MouseEvent) => {
      const nextPosition = { x: event.clientX, y: event.clientY };
      cursorTargetRef.current = nextPosition;
      setElementPosition(diamondRef.current, nextPosition.x, nextPosition.y);
      setElementPosition(crossRef.current, nextPosition.x, nextPosition.y);

      const target = event.target as HTMLElement | null;
      if (!target) {
        setIsPointer(false);
        setIsTextZone(false);
        return;
      }
      const clickable = target.closest("a, button, [role='button'], input, textarea, select, label");
      const textZone = target.closest(
        "p, span, li, h1, h2, h3, h4, h5, h6, code, pre, blockquote, td, th, .selectable-text",
      );
      setIsPointer(Boolean(clickable));
      setIsTextZone(!clickable && Boolean(textZone));
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener("mousemove", updateCursor, { passive: true });
    window.addEventListener("mouseout", hideCursor);

    let animationFrameId = 0;
    const animateHalo = () => {
      const nextHalo = {
        x: haloRef.current.x + (cursorTargetRef.current.x - haloRef.current.x) * 0.16,
        y: haloRef.current.y + (cursorTargetRef.current.y - haloRef.current.y) * 0.16,
      };
      haloRef.current = nextHalo;
      setElementPosition(rippleRef.current, nextHalo.x, nextHalo.y);
      animationFrameId = requestAnimationFrame(animateHalo);
    };
    animationFrameId = requestAnimationFrame(animateHalo);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseout", hideCursor);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={diamondRef}
        className={`custom-cursor-diamond ${isPointer ? "custom-cursor-diamond--active" : ""} ${
          isVisible && !isTextZone ? "custom-cursor-diamond--visible" : ""
        }`}
      />
      <div
        ref={crossRef}
        className={`custom-cursor-cross ${isPointer ? "custom-cursor-cross--active" : ""} ${
          isVisible && !isTextZone ? "custom-cursor-cross--visible" : ""
        }`}
      />
      <div
        ref={rippleRef}
        className={`custom-cursor-ripple ${isPointer ? "custom-cursor-ripple--active" : ""} ${
          isVisible && !isTextZone ? "custom-cursor-ripple--visible" : ""
        }`}
      />
    </>
  );
};

export default CustomCursor;
