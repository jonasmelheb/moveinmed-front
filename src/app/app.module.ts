import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfessionalListComponent } from './resources/professionals/professional-list/professional-list.component';
import { ProfessionalDetailComponent } from './resources/professionals/professional-detail/professional-detail.component';
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { HttpClientModule } from "@angular/common/http";
import { AddProfessionalComponent } from './resources/professionals/add-professional/add-professional.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './partials/header/navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ProfessionalListComponent,
    ProfessionalDetailComponent,
    AddProfessionalComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
