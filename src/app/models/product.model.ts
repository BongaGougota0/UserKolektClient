export interface Product {
  productId: string;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  viewCount: number;
  favouriteCount: number;
}

export interface UserAction {
  id?: number;
  productId: string;
  userId: string;
  actionType: 'VIEW' | 'FAVOURITE';
  createdAt?: string;
}
