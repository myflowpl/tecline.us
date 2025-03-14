import { RenderMode, ServerRoute } from '@angular/ssr';
import { ProductItem } from './models';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'catalog/product/:productUrl',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [];
        return fetch('/products.json').then(r => r.json()).then(products => products.map((p: ProductItem) => ({productUrl: p.url})));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
