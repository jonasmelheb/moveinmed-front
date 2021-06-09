import { Component, OnInit } from '@angular/core';
import { Professional } from "../../../common/interface/professional";
import { ProfessionalService } from "../../../common/services/professional.service";

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.css'],
  providers: [ProfessionalService]
})
export class ProfessionalListComponent implements OnInit {
  public professionals: Professional[] = [];

  constructor(
    private professionalService: ProfessionalService
  ) { }

  ngOnInit(): void {
    this.professionalService.list().subscribe((res: Professional[]) => {
      this.professionals = res;
    })
  }

}
