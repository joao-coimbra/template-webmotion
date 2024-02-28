"use client";

import SmoothScrolling from "@/components/smooth-scrolling";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PropsWithChildren, useEffect } from "react";
import { isMounted } from "hookings";
import { useLenis } from "@studio-freight/react-lenis";

if (isMounted()) {
  gsap.defaults({ ease: "none" });
  gsap.registerPlugin(ScrollTrigger); // GSAP Plugins
  ScrollTrigger.defaults({ markers: process.env.NODE_ENV === "development" }); //process.env.NODE_ENV === 'development' })

  gsap.ticker.lagSmoothing(0);
  // gsap.ticker.remove(gsap.updateRoot);
  requestAnimationFrame((time) => {
    gsap.updateRoot(time / 1000);
  });

  // reset scroll position
  window.scrollTo(0, 0);
  window.history.scrollRestoration = "manual";

  console.log("👋 They are a good day! 👋");
}

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const lenis = useLenis(ScrollTrigger.update);
  useEffect(() => ScrollTrigger.refresh(), [lenis]);

  return <SmoothScrolling root>{children}</SmoothScrolling>;
};

export default DefaultLayout;
