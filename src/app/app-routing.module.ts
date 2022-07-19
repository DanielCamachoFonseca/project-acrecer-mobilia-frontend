import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDirectionComponent } from './components/direction/list-direction/list-direction.component';
import { RegisterDirectionComponent } from './components/direction/register-direction/register-direction.component';
import { SearchPersonComponent } from './components/direction/search-person/search-person.component';
import { ListPersonComponent } from './components/person/list-person/list-person.component';
import { RegisterPersonComponent } from './components/person/register-person/register-person.component';


const routes: Routes = [
    { path: '', component: ListPersonComponent },
    { path: 'list-direction', component: ListDirectionComponent },
    { path: 'register-person', component: RegisterPersonComponent },
    { path: 'register-direction', component: RegisterDirectionComponent },
    { path: 'search-person', component: SearchPersonComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
