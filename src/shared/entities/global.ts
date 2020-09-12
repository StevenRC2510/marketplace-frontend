export type ItemsFactory = Readonly<{
  type: string;
}>;

export type Toast = Readonly<{
  message: string;
  active: boolean;
  type: string;
}>;
