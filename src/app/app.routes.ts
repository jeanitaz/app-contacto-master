import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LoginComponent } from './components/login/login.component';
import { autenticaGuard } from './guards/autentica.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent, canActivate:[autenticaGuard]},
  { path: 'productos', component: ProductosComponent, },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];
