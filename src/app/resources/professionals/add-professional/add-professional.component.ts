import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professional } from 'src/app/common/interface/professional';
import { ProfessionalService } from 'src/app/common/services/professional.service';

@Component({
  selector: 'app-add-professional',
  templateUrl: './add-professional.component.html',
  styleUrls: ['./add-professional.component.css']
})
export class AddProfessionalComponent implements OnInit {
  professional = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    profession: '',
  }
  submitted = false;

  constructor(
    private professionalService: ProfessionalService
  ) { }

  ngOnInit(): void {
  }

  createProfessional(): void {
    // @ts-ignore
    const data = new Professional (
      this.professional.firstName,
      this.professional.lastName,
      this.professional.email,
      this.professional.phoneNumber,
      this.professional.address,
      this.professional.profession
    );

    this.professionalService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true
      },
      error => {
        console.log(error)
      }
    )
  }

  newProfessional(): void {
    this.submitted = false;
    this.professional = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      profession: ''
    }
  }


}
