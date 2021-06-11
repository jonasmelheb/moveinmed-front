import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfessionalListComponent } from './resources/professionals/professional-list/professional-list.component';
import { ProfessionalDetailComponent } from './resources/professionals/professional-detail/professional-detail.component';
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { HttpClientModule } from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './partials/header/navbar/navbar.component';
import { AddProfessionalComponent } from './resources/professionals/add-professional/add-professional.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { SearchResultComponent } from './resources/professionals/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessionalListComponent,
    ProfessionalDetailComponent,
    AddProfessionalComponent,
    NavbarComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatListModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
