import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CompaniesComponent} from './companies/companies.component';
import {CompanieComponent} from './companie/companie.component';
import {UserOfCompaniesComponent} from './user-of-companies/user-of-companies.component';
import {UserOfCompanieComponent} from './user-of-companie/user-of-companie.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {EditMyProfileComponent} from './edit-my-profile/edit-my-profile.component';
import {CompanieGuard} from '../services/companie/companie.guard';

const PagesRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'companie/:id', component: CompanieComponent },
  { path: 'companyUsers', component: UserOfCompanieComponent},
  { path: 'usersOfCompanies', component: UserOfCompaniesComponent},
  { path: 'editUser/:id', component: EditUserComponent},
  { path: 'profile', component: EditMyProfileComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const PAGES_ROUTES = RouterModule.forChild(PagesRoutes);

