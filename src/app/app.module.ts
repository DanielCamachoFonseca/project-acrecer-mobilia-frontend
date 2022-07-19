import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ListPersonComponent } from './components/person/list-person/list-person.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RegisterPersonComponent } from './components/person/register-person/register-person.component';
import { FormsModule } from '@angular/forms';
import { ListDirectionComponent } from './components/direction/list-direction/list-direction.component';
import { RegisterDirectionComponent } from './components/direction/register-direction/register-direction.component';
import { SearchPersonComponent } from './components/direction/search-person/search-person.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListPersonComponent,
    RegisterPersonComponent,
    ListDirectionComponent,
    RegisterDirectionComponent,
    SearchPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
