import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CompaniesComponent} from './companies/companies.component';

const PagesRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const PAGES_ROUTES = RouterModule.forChild(PagesRoutes);

