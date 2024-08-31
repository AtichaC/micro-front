import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { CategoriesComponent } from '../../feature/categories/categories.component';

export const routes: Routes = [
    {
        path: 'categories',
        loadComponent: () => import('../../feature/categories/categories.component').then(m=>m.CategoriesComponent)
      },
];
