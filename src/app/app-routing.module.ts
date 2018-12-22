import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesComponent } from './pages/pages.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: PagesComponent, loadChildren: './pages/pages.module#PagesModule' },
  { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( routes );
