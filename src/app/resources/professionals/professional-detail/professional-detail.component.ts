import { Component, OnInit } from '@angular/core';
import { Professional } from "../../../common/interface/professional";
import { ProfessionalService } from "../../../common/services/professional.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-professional-detail',
  templateUrl: './professional-detail.component.html',
  styleUrls: ['./professional-detail.component.css']
})
export class ProfessionalDetailComponent implements OnInit {
  professional!: Professional;

  constructor(
    private professionalService: ProfessionalService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;

    this.professionalService.show(id).subscribe((res: Professional) => {
      this.professional = res;
    })
  }

}
