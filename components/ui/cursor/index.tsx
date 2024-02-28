"use client";

import { useRef, useState } from "react";
import s from "./cursor.module.scss";
import cn from "clsx";
import { useGSAP } from "@/hooks";
import { initAnimation } from "./animations";
import { useWindowSizes, processVariable } from "hookings";

type Setters = {
  x: (value: number) => void;
  y: (value: number) => void;
} | null;

const Cursor = () => {
  const [setters, setSetters] = useState<Setters>(null);

  const { width } = useWindowSizes();
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    setSetters(initAnimation(cursorRef.current!));
  });

  useGSAP(() => {
    const handler = (e: MouseEvent) =>
      processVariable(setters, (setters) => {
        const { x, y } = e;

        setters.x(x);
        setters.y(y);
      });

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
