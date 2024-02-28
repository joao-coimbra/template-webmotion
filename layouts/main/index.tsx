"use client";

import React, { type PropsWithChildren } from "react";
import DefaultLayout from "../default";
import s from "./layout.module.scss";
import Cursor from "@/components/ui/cursor";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <DefaultLayout>
      <main id="page" className={s.page}>
        <div className="scroll">{children}</div>
      </main>
      <Cursor />
    </DefaultLayout>
  );
};

export default MainLayout;
