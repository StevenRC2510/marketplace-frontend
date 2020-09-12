import { CategoriesService } from './categories-service';
import { ProductsService } from './products-service/';

export class MicroserviceApi {
  categoriesService: CategoriesService;
  productsService: ProductsService;
  constructor(baseUrl: string) {
    this.categoriesService = new CategoriesService(baseUrl);
    this.productsService = new ProductsService(baseUrl);
  }
}
