import { Routes } from '@angular/router';
import { HomeComponent } from './pages/cliente/home/home.component';
import { CustomizeComponent } from './pages/cliente/customize/customize.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'customize', component: CustomizeComponent }

];
