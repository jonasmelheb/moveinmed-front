import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private professionalService: ProfessionalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.professionalService.list().subscribe((res: Professional[]) => {
      this.professionals = res;
    })
  }
  delete(id: number): void {
    this.professionalService.delete(id)
      .subscribe(() => {
        this.router.navigate(["/"])
      })
  }


}
