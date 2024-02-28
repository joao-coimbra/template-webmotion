"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ComponentPropsWithRef } from "react";

interface SmoothScrollProps extends ComponentPropsWithRef<"div"> {
  root?: boolean;
  ref?: any;
}

const SmoothScrolling: React.FC<SmoothScrollProps> = (props) => {
  return (
    <ReactLenis {...props}>
      {props.children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
