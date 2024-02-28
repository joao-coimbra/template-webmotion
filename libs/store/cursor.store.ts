export namespace CursorStore {
  export interface Props {
    cursorIsShow: boolean;
  }

  export interface Actions {
    cursor: {
      toggle: (state?: boolean) => void;
    };
  }

  export const DEFAULT_PROPS: Props = {
    cursorIsShow: false,
  };
}
