import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Professional } from 'src/app/common/interface/professional';
import { ProfessionalService } from 'src/app/common/services/professional.service';

@Component({
  selector: 'app-add-professional',
  templateUrl: './add-professional.component.html',
  styleUrls: ['./add-professional.component.css']
})
export class AddProfessionalComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private professionalService: ProfessionalService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      profession: ['', Validators.required],
    })
  }

  get f() {return this.form.controls}

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.createProfessional();
  }

  private createProfessional() {
    this.professionalService.create(this.form.value)
      .pipe(first())
      .subscribe(() => {
        this.router.navigate(["/"])
      })
      .add(() => this.loading = false);
  }
}
