import { Component, computed, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { MatIconModule } from '@angular/material/icon';
import { CartItem } from '../models';

@Component({
  selector: 'app-cart',
  imports: [MatIconModule],
  templateUrl: './cart.page.html',
  styleUrl: './cart.page.scss'
})
export class CartPage {

  baseUrl = `https://katalog.tecline.com.pl/en/`;
  cart = inject(CartService);

  order = computed(() => {
    const products = this.cart.products();
    return [
      truncateOrPad('Product Name', 54)  + truncateOrPad('Code', 10) + truncateOrPad('Quantity', 10) + truncateOrPad('Price', 10),
      '',
      ...products.map(p => truncateOrPad(p.title, 50) +'    ' + truncateOrPad(p.code, 10) + truncateOrPad(p.quantity, 10) + truncateOrPad(p.price*p.quantity, 10)),
      '',
      truncateOrPad('Total Order Price: ', 74) + products.reduce((total, p) => total + (p.quantity * p.price), 0) + ' EUR'
    ].join("\n")
  });
}

function truncateOrPad(label: string | number, charts: number) {
  label = ''+label;
  if (label.length > charts) {
      return label.slice(0, charts - 3) + '...';
  } else {
      return label.padEnd(charts, ' ');
  }
}