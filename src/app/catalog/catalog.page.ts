import { Component, computed, inject, signal } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NestedTreeControl } from '@angular/cdk/tree';
import { injectUrl } from '../utils';
import { JsonPipe } from '@angular/common';

interface CategoryNode {
  url: string;
  label: string;
  parent: string | null;
  children: CategoryNode[],
}
interface ProductItem {
  url: string;
  title: string;
  category: string;
  children: CategoryNode[],
  photoSrc: string,
  photoAlt: string,
  code: string,
  price: number,
  currency: "EUR" | "USD",
}

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
  ],
})
export class CatalogPage {
  baseUrl = `https://katalog.tecline.com.pl/en/`;
  http = inject(HttpClient);
  url = injectUrl(url => url.replace('/catalog/', ''));
  categories = signal<CategoryNode[]>([]);
  products = signal<ProductItem[]>([]);
  category = signal<ProductItem[]>([]);
  list = computed(() => this.products().filter(p => p.category === this.url()));
  rootCategories = computed(() => this.categories().filter(c => !c.parent));


  treeControl = new NestedTreeControl<CategoryNode>(node => node.children);
  childrenAccessor = (node: CategoryNode) => node.children && [];
  hasChild = (_: number, node: CategoryNode) =>  !!node.children && node.children.length > 0;

  constructor() {
    this.http.get<CategoryNode[]>('/categories.json').subscribe(categories => {
      this.categories.set(buildTree(categories));
    })
    this.http.get<ProductItem[]>('/products.json').subscribe(products => {
      this.products.set(products);
    })
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