import { useEffect, useState } from "react";
interface WindowSize {
  width?: number;
  height?: number;
}

/**
 * It returns the window width and height as an object, and updates the object when the window is
 * resized.
 * @returns The window size.
 */

export function useWindowSize () {
const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}