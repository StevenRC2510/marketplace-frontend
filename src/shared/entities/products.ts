export type Product = Readonly<{
  _id: string;
  product_name: string;
  category: string;
  image: string[];
  price: number;
  best_seller: boolean;
  qualification: number;
  description: string;
  quantity: number;
  stock: number;
  color: string;
}>;
