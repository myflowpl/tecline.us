import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.page').then(m => m.HomePage),
    },
    {
        path: 'cart',
        loadComponent: () => import('./cart/cart.page').then(m => m.CartPage),
    },
    {
        path: 'catalog/product/:productUrl',
        loadComponent: () => import('./catalog/catalog.page').then(m => m.CatalogPage),
    },
    {
        path: 'catalog',
        loadComponent: () => import('./catalog/catalog.page').then(m => m.CatalogPage),
        children: [
            {
                path: '**',
                loadComponent: () => import('./catalog/category-list/category-list.page').then(m => m.CategoryListPage),
            }
        ]
    }
];
