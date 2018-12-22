import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ModalcompanieService} from './modal/modalcompanie.service';
import {CompanieService} from './companie/companie.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ModalcompanieService,
    CompanieService
  ]
})
export class ServiceModule { }
