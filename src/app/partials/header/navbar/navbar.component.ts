import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professional } from 'src/app/common/interface/professional';
import { ProfessionalService } from 'src/app/common/services/professional.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchField: string = '';
  public professionals: Professional[] = [];

  constructor(
    private professionalService: ProfessionalService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  search(searchField: string): void {
    this.professionalService.search(searchField).subscribe((res: Professional[]) => {
      this.professionals = res;
      this.router.navigate(["/search"] , { state: { data: res} })
    })
  }

  onSubmit() {
    this.search(this.searchField)
  }
}
