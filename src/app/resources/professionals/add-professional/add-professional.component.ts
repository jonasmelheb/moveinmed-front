import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Profession } from 'src/app/common/interface/profession';
import { Professional } from 'src/app/common/interface/professional';
import { ProfessionalService } from 'src/app/common/services/professional.service';

@Component({
  selector: 'app-add-professional',
  templateUrl: './add-professional.component.html',
  styleUrls: ['./add-professional.component.css']
})
export class AddProfessionalComponent implements OnInit {
  form!: FormGroup;
  id!: number;
  isAddProfessional!: boolean;
  loading = false;
  submitted = false;
  professions = Profession;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private professionalService: ProfessionalService
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.isAddProfessional = !this.id;

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      profession: ['', Validators.required],
    })

    if (!this.isAddProfessional) {
      this.professionalService.getById(this.id)
        .subscribe(x => this.form.patchValue(x));
    }
  }

  get f() {return this.form.controls}

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.isAddProfessional ? this.createProfessional() : this.updateProfessional();
  }

  private createProfessional() {
    this.professionalService.create(this.form.value)
      .subscribe(() => {
        this.router.navigate(["/"])
      })
      .add(() => this.loading = false);
  }

  private updateProfessional() {
    this.professionalService.update(this.form.value, this.id)
      .subscribe(() => {
        this.router.navigate(['professionals/' + this.id])
      })
      .add(() => this.loading = false);
  }
}
