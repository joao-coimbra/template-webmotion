export type Props<T extends string> = {
  params: { [key in T]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type QuickPipeType = (c: number) => unknown;