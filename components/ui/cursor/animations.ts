import { QuickPipeType } from "@/types";
import gsap from "gsap";
import { vw } from "hookings";

const gap = vw(0);

export const init = <T extends HTMLElement>(cursor: T) => {
  gsap.set(cursor, {
    top: gap,
    left: gap,
    yPercent: -50,
    xPercent: -50,
  });
}

export const setters = <T extends HTMLElement>(cursor: T) => {

  const xSetter = gsap.utils.pipe(
    // gsap.utils.wrapYoyo(0, window.innerWidth / 2),
    gsap.utils.snap(1),
    gsap.quickTo(cursor, "x", {
      duration: 0.6,
      ease: "power3",
    }) as QuickPipeType,
  );
  const ySetter = gsap.utils.pipe(
    // gsap.utils.wrapYoyo(0, window.innerHeight / 2),
    gsap.utils.snap(1),
    gsap.quickTo(cursor, "y", {
      duration: 0.6,
      ease: "power3",
    }) as QuickPipeType,
  );

  return [xSetter, ySetter];
};
