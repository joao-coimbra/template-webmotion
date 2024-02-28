import gsap from "gsap";
import { useEffect, useRef } from "react";

type TimelineFunction = (timeline: gsap.core.Timeline) => void;

/**
 * Custom hook for controlling GSAP animations in React.
 *
 * @param {gsap.core.Timeline | null} timeline - GSAP timeline.
 * @param {boolean | "play" | "reverse"} action - Action to be performed on the timeline (function or boolean).
 * @param {boolean} shouldBlock - Indicates whether the timeline execution should be blocked.
 */
export function useTimeline(
  timeline: gsap.core.Timeline | null,
  action: boolean | "play" | "reverse" | "restart",
  shouldBlock: boolean = false,
) {
  // Check if the timeline exists before creating the reference.
  const timelineRef = useRef<gsap.core.Timeline | null>(timeline);

  useEffect(() => {
    // If the timeline changes, update the reference.
    timelineRef.current = timeline;
  }, [timeline]);

  useEffect(() => {
    const currentTimeline = timelineRef.current;

    if (!currentTimeline || shouldBlock) return;

    if (typeof action === "boolean") {
      action ? currentTimeline.play() : currentTimeline.reverse();
    } else {
      currentTimeline[action]();
    }
  }, [action, shouldBlock]);
}
