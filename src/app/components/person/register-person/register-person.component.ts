import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-register-person',
  templateUrl: './register-person.component.html',
  styleUrls: ['./register-person.component.css']
})
export class RegisterPersonComponent implements OnInit {

  person: Person = new Person();
  register:string='';

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {

  }

  savePerson(){
    this.personService.registerPerson(this.person).subscribe(date => {
      this.goToListPerson();
    }, error => console.log(error));
  }

  goToListPerson(){
    this.router.navigate(['']);
    swal.fire('Agregado',
    '¡Cliente registrado con exito!',
    'success');
  }

  onSubmit(){
    this.savePerson();
  }


}
