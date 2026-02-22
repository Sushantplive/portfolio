import React, { useEffect, useRef, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [haloPosition, setHaloPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isTextZone, setIsTextZone] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorTargetRef = useRef({ x: 0, y: 0 });
  const haloRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) {
      return;
    }

    const updateCursor = (event: MouseEvent) => {
      const nextPosition = { x: event.clientX, y: event.clientY };
      cursorTargetRef.current = nextPosition;
      setPosition(nextPosition);
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

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseout", hideCursor);

    let animationFrameId = 0;
    const animateHalo = () => {
      const nextHalo = {
        x: haloRef.current.x + (cursorTargetRef.current.x - haloRef.current.x) * 0.16,
        y: haloRef.current.y + (cursorTargetRef.current.y - haloRef.current.y) * 0.16,
      };
      haloRef.current = nextHalo;
      setHaloPosition(nextHalo);
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
        className={`custom-cursor-diamond ${isPointer ? "custom-cursor-diamond--active" : ""} ${
          isVisible && !isTextZone ? "custom-cursor-diamond--visible" : ""
        }`}
        style={{ left: position.x, top: position.y }}
      />
      <div
        className={`custom-cursor-cross ${isPointer ? "custom-cursor-cross--active" : ""} ${
          isVisible && !isTextZone ? "custom-cursor-cross--visible" : ""
        }`}
        style={{ left: position.x, top: position.y }}
      />
      <div
        className={`custom-cursor-ripple ${isPointer ? "custom-cursor-ripple--active" : ""} ${
          isVisible && !isTextZone ? "custom-cursor-ripple--visible" : ""
        }`}
        style={{ left: haloPosition.x, top: haloPosition.y }}
      />
    </>
  );
};

export default CustomCursor;
