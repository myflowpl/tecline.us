import { Component, computed, inject, signal } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NestedTreeControl } from '@angular/cdk/tree';

interface CategoryNode {
  url: string;
  label: string;
  parent: string | null;
  children: CategoryNode[],
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
  ],
})
export class CatalogPage {
  http = inject(HttpClient);
  categories = signal<CategoryNode[]>([]);
  rootCategories = computed(() => this.categories().filter(c => !c.parent));
  treeControl = new NestedTreeControl<CategoryNode>(node => node.children);
  childrenAccessor = (node: CategoryNode) => {
    console.log('get children', node.label, node.children)
    return node.children && [];
  };

  hasChild = (_: number, node: CategoryNode) => {
    console.log('HAS CHILDREN', node.label, node.children.length)
    return !!node.children && node.children.length > 0
  };

  constructor() {
    this.http.get<CategoryNode[]>('/categories.json').subscribe(categories => {
      this.categories.set(buildTree(categories));
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