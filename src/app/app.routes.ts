import {Routes} from "@angular/router";
import {ProfessionalListComponent} from "./resources/professionals/professional-list/professional-list.component";
import {ProfessionalDetailComponent} from "./resources/professionals/professional-detail/professional-detail.component";
import {AddProfessionalComponent} from "./resources/professionals/add-professional/add-professional.component";
import { SearchResultComponent } from "./resources/professionals/search-result/search-result.component";

export const appRoutes: Routes = [
  {
    path: '',
    component: ProfessionalListComponent
  },
  {
    path: 'professionals/:id',
    component: ProfessionalDetailComponent
  },
  {
    path: 'add',
    component: AddProfessionalComponent
  },
  {
    path: 'edit/:id',
    component: AddProfessionalComponent
  }
  ,
  {
    path: 'delete/:id',
    component: AddProfessionalComponent
  }
  ,
  {
    path: 'search',
    component: SearchResultComponent
  }
]
