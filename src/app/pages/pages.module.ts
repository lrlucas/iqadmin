import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages-routing.module';
import {SharedModule} from '../shared/shared.module';
import { CompaniesComponent } from './companies/companies.component';
import {ServiceModule} from '../services/service.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    CompaniesComponent
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
