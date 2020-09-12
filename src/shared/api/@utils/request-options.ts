import { CustomRequestInit } from './types';

export async function buildHeaders(
  options: CustomRequestInit | undefined | any,
  getToken: string | null | any
) {
  const token = getToken;

  let headers: any = { 'Content-Type': 'application/json' };
  let body;
  const currentOptions = options || {};
  if (currentOptions) {
    body = JSON.stringify(currentOptions.data);
  }
  if (token) {
    headers = {
      Authorization: token,
      ...headers,
    };
  }
  const newOptions: RequestInit = {
    ...currentOptions,
    headers,
    body: body,
  };
  return newOptions;
}
