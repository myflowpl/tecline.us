import { effect, inject, Injectable, signal } from '@angular/core';
import { CartItem, ProductItem } from './models';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products = signal<CartItem[]>([]);
  storage = inject(StorageService);
  constructor() {
    const key = 'tecline_cart'

    const products = this.storage.get<CartItem[]>(key);
    if(products) {
      this.products.set(products);
    }
    effect(() => {
      const products = this.products();
      this.storage.set(key, products);
    })
   }

  length() {
    return this.products().length || 0;
  }

  add(product: ProductItem) {
    this.products.set([
      ...this.products(),
      {
        ...product,
        quantity: 1,
      },
    ])
  }
  remove(product: CartItem) {
    this.products.set([
      ...this.products().filter(p => p !== product),
    ])
  }

  addQuantity(item: CartItem) {
    item.quantity = (item.quantity || 1) + 1;
    this.products.set([...this.products()]);
  }
  
  removeQuantity(item: CartItem) {
    const quantity = (item.quantity || 1) - 1;
    if(quantity > 0) {
      item.quantity = quantity;

      this.products.set([...this.products()]);
    }
  }
}
