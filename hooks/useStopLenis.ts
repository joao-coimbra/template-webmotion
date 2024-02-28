import { useLenis } from "@studio-freight/react-lenis";

/**
 * Custom hook for controlling Lenis animations based on a condition.
 *
 * @param {boolean} condition - Condition to determine whether to stop or start Lenis.
 */
export function useStopLenis(condition: boolean) {
  useLenis((lenis) => (condition ? lenis.stop() : lenis.start()), [condition]);
}
