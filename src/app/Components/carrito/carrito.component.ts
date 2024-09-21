import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  cartItems: Product[] = [];

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  removeFromCart(productId: string) {
    this.cartItems = this.cartItems.filter(item => item.name !== productId);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
}
