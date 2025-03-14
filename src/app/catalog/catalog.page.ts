import { Component, computed, inject, input, signal } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NestedTreeControl } from '@angular/cdk/tree';
import { injectUrl } from '../utils';
import { JsonPipe } from '@angular/common';
import { CategoryNode, ProductItem } from '../models';
import { CartService } from '../cart.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductPage } from "./product/product.page";
import { injectParams } from "ngxtension/inject-params";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrl: './catalog.page.scss',
  imports: [
    MatTreeModule,
    MatIconModule,
    RouterLink,
    MatButtonModule,
    RouterOutlet,
    JsonPipe,
    MatSidenavModule,
    ProductPage
],
})
export class CatalogPage {
  productUrl = injectParams('productUrl');
  product = computed(() => {
    const url = this.productUrl();
    return (!url) ? null : this.products().find(p => p.url === url)
  });
  baseUrl = `https://katalog.tecline.com.pl/en/`;
  http = inject(HttpClient);
  url = injectUrl(url => url.replace('/catalog/', ''));
  categories = signal<CategoryNode[]>([]);
  products = signal<ProductItem[]>([]);
  list = computed(() => this.products().filter(p => p.category === this.url()));
  category = computed(() => {
    const url = this.product()?.category || this.url();
    return (url) ? this.categories().find(c => c.url === url) : null;
  });
  parent = computed(() => this.category() ? this.categories().find(c => c.url === this.category()?.parent) : null);
  granparent = computed(() => this.parent() ? this.categories().find(c => c.url === this.parent()?.parent) : null);
  tree = computed(() => buildTree(this.categories()));

  cart = inject(CartService);

  treeControl = new NestedTreeControl<CategoryNode>(node => node.children);
  childrenAccessor = (node: CategoryNode) => node.children && [];
  hasChild = (_: number, node: CategoryNode) =>  !!node.children && node.children.length > 0;

  constructor() {
    this.http.get<CategoryNode[]>('/categories.json').subscribe(categories => {
      this.categories.set(categories);
    })
    this.http.get<ProductItem[]>('/products.json').subscribe(products => {
      this.products.set(products);
    })
  }

  createCategoryUrl(url: string) {
    return ['/catalog/', ...url.split('/')]
  }
}
function buildTree(flatArray: CategoryNode[]) {
  const map = new Map();
  const tree: CategoryNode[] = [];

  // Tworzymy mapę obiektów
  flatArray.forEach(item => {
      map.set(item.url, { ...item, children: [] });
  });

  flatArray.forEach(item => {
      if (item.parent === null) {
          tree.push(map.get(item.url));
      } else {
          const parent = map.get(item.parent);
          if (parent) {
              parent.children.push(map.get(item.url));
          }
      }
  });

  return tree;
}