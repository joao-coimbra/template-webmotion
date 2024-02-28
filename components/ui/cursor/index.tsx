"use client";

import { useRef, useState } from "react";
import s from "./cursor.module.scss";
import cn from "clsx";
import { useGSAP } from "@/hooks";
import { init, setters } from "./animations";
import { useWindowSizes, processVariable } from "hookings";

const Cursor = () => {
  const { width } = useWindowSizes();
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    init(cursorRef.current!);
  });

  useGSAP(() => {

    const [xSetter, ySetter] = setters(cursorRef.current!);

    const handler = (e: MouseEvent) => {
      const { x, y } = e;
      
      xSetter(x);
      ySetter(y);
    };

    window.addEventListener("mousemove", handler);

    return () => {
      window.removeEventListener("mousemove", handler);
    };
  }, [width]);

  return (
    <div id="cursor" ref={cursorRef} className={cn(s.root, "desktop-only")}>
      Cursor
    </div>
  );
};

export default Cursor;
