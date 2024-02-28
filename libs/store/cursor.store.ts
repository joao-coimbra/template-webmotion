import type { ToggleFunction } from "@/types";

export namespace CursorStore {
  export interface Props {
    isCursorActive: boolean;
    cursorDisplay: string;
    isCursorWindow: boolean;
    forceHidden: boolean;
  }

  export interface Actions {
    cursor: {
      toggle: ToggleFunction;
      toggleWindow: ToggleFunction;
      toggleForce: ToggleFunction;
      setText: (value: string) => void;
    };
  }

  export const DEFAULT_PROPS: Props = {
    isCursorActive: false,
    isCursorWindow: false,
    forceHidden: false,
    cursorDisplay: "",
  };
}
