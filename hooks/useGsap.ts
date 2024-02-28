import gsap from "gsap";
import { useLayoutEffect } from "react";

export function useGSAP(
  callback: gsap.ContextFunc,
  deps: React.DependencyList = [],
) {
  useLayoutEffect(() => {
    const ctx = gsap.context(callback);

    return () => ctx.revert();
  }, [...deps]);
}
