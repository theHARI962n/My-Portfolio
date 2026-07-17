import { useEffect, useRef } from "react";

/**
 * A custom React hook that automatically scrolls an element to its bottom
 * whenever the provided dependency (typically a messages array) changes.
 * 
 * @param {any} dependency - The dependency to trigger scroll behavior.
 * @returns {React.RefObject} Ref to be attached to the scrollable container.
 */
export const useAutoScroll = (dependency) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [dependency]);

  return scrollRef;
};
