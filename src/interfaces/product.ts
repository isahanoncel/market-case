export interface IProduct {
  tags: string[];
  price: number;
  name: string;
  description?: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: string;
}
