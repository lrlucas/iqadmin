import { Component, OnInit  } from '@angular/core';
import {CompanieService} from '../../services/companie/companie.service';
import {ModalcompanieService} from '../../services/modal/modalcompanie.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies = [];
  formulario: FormGroup;
  public companieName: string;
  public ownerName: string;



  constructor( public companieService: CompanieService,
               public modalService: ModalcompanieService,
               public formBuilder: FormBuilder) {
    this.companieService.getAllCompanies('D4369C31-8245-46D0-968C-0F31532C7238')
      .subscribe( data => {
        this.companies = data;
        // console.log(this.companies)
      });

    this.companieName = this.modalService.companyName;
    this.ownerName = this.modalService.ownerName;

  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      companyName: [this.companieName, Validators.required],
      ownerName: [this.ownerName, Validators.required]
    });
  }

  openModal(companie: any) {
    this.modalService.modalSet(companie);
    // this.formulario.get('companyName').setValue(this.modalService.companyName);

  }



  prueba() {
    console.log('prueba de un boton dentro del modal');
  }

  updateCompanie() {
    console.log('formulario')
    console.log(this.formulario)
    console.log(this.formulario.value)
    console.log(this.formulario.controls)
  }


}
