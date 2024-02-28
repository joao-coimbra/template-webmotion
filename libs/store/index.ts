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
        isCursorActive: state === undefined ? !s.isCursorActive : state,
      }));
    },
    toggleWindow: (state?: boolean) => {
      set((s) => ({
        isCursorWindow: state === undefined ? !s.isCursorWindow : state,
      }));
    },
    toggleForce: (state?: boolean) => {
      set((s) => ({
        forceHidden: state === undefined ? !s.forceHidden : state,
      }));
    },
    setText: (value: string) => {
      set({ cursorDisplay: value });
    },
  },
}));
