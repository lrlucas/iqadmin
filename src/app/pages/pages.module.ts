import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages-routing.module';
import {SharedModule} from '../shared/shared.module';
import { CompaniesComponent } from './companies/companies.component';
import {ServiceModule} from '../services/service.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CompanieComponent } from './companie/companie.component';
import { UserOfCompaniesComponent } from './user-of-companies/user-of-companies.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserOfCompanieComponent } from './user-of-companie/user-of-companie.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CompaniesComponent,
    CompanieComponent,
    UserOfCompaniesComponent,
    EditUserComponent,
    UserOfCompanieComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ServiceModule,
    FormsModule,
    ReactiveFormsModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
