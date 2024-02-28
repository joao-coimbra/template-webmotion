import { QuickPipeType } from "@/types";
import gsap from "gsap";
import { vw } from "hookings";

export const initAnimation = <T extends HTMLElement>(cursor: T) => {

  const gap = vw(0);

  gsap.set(cursor, {
    top: gap,
    left: gap,
    yPercent: -50,
    xPercent: -50,
  });

  const xSetter = gsap.utils.pipe(
    // gsap.utils.clamp(0, window.innerWidth - gap - cursor.clientWidth),
    // gsap.utils.snap(1),
    gsap.quickTo(cursor, "x", {
      duration: 0.6,
      ease: "power3",
    }) as QuickPipeType,
  );
  const ySetter = gsap.utils.pipe(
    // gsap.utils.clamp(0, window.innerHeight - gap - cursor.clientHeight),
    // gsap.utils.snap(1),
    gsap.quickTo(cursor, "y", {
      duration: 0.6,
      ease: "power3",
    }) as QuickPipeType,
  );

  return {x: xSetter, y: ySetter};
};
