import { CartItems } from './../models/cartItems';
import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  //Cart ekle
  addToCart(product: Product) {
    let item = CartItems.find((c) => c.product.id === product.id);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  //Cart sil
  removeFromCart(product: Product) {
    let item: CartItem = CartItems.find((c) => c.product.id === product.id);
    CartItems.splice(CartItems.indexOf(item), 1);
  }

  //listelemek için
  list(): CartItem[] {
    return CartItems;
  }
}
