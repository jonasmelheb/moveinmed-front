import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professional } from 'src/app/common/interface/professional';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public professionals: Professional[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.professionals = history.state.data;
  }


}
