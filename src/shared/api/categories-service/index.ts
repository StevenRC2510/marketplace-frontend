import { buildHeaders } from '../@utils/request-options';
import { CustomRequestInit } from '../@utils/types';

export class CategoriesService {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = `${baseUrl}/categories`;
  }

  public async categoriesList(options?: CustomRequestInit) {
    const url = `${this.baseUrl}`;
    const fetchOptions = await buildHeaders(options, null);
    const response: Response = await fetch(url, {
      ...fetchOptions,
      method: 'GET',
    });
    return response.json();
  }
}
