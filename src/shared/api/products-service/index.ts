import { buildHeaders } from '../@utils/request-options';

export class ProductsService {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = `${baseUrl}/products`;
  }

  public async productList(categoryId: string) {
    const allCategoriesId = '5f5b2501fdcea57375b52ad7';
    const url =
      categoryId !== allCategoriesId
        ? `${this.baseUrl}?category=${categoryId}`
        : `${this.baseUrl}`;
    const fetchOptions = await buildHeaders(null, null);
    const response: Response = await fetch(url, {
      ...fetchOptions,
      method: 'GET',
    });
    return response.json();
  }

  public async productDetail(id: number | string) {
    const url = `${this.baseUrl}/${id}`;
    const fetchOptions = await buildHeaders(null, null);
    const response: Response = await fetch(url, {
      ...fetchOptions,
      method: 'GET',
    });
    return response.json();
  }
}
