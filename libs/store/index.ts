import { create } from "zustand";
import { CursorStore } from "./cursor.store";

interface StoreProps
  extends CursorStore.Props {}

interface StoreActions
  extends CursorStore.Actions {}

interface StoreState extends StoreProps, StoreActions {}

export const DEFAULT_PROPS: StoreProps = Object.assign(
  {},
  CursorStore.DEFAULT_PROPS,
);

export const useStore = create<StoreState>()((set) => ({
  ...DEFAULT_PROPS,

  cursor: {
    toggle: (state?: boolean) => {
      set((s) => ({
        cursorIsShow: state === undefined ? !s.cursorIsShow : state,
      }));
    },
  },
}));
