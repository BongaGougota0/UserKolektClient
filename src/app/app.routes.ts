import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { Register } from './components/auth/register/register';
import { ProductListComponent } from './components/product-list';

export const routes: Routes = [
    // { path: '', component: ProductListComponent},
    { path: 'register', component: Register},
    { path: 'login', component: Login}
];
