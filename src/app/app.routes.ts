import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.page').then(m => m.HomePage),
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
