
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'categories',
        loadComponent: () => import('../../feature/categories/categories.component').then(m=>m.CategoriesComponent)
    },
    {
        path: 'categories/add',
        loadComponent: () => import('../../feature/category-add/category-add.component').then(m=>m.CategoryAddComponent)
    },
];
