export interface GetTokenFn {
  (): Promise<string | null>;
}

export interface CustomRequestInit extends RequestInit {
  data?: object;
}
