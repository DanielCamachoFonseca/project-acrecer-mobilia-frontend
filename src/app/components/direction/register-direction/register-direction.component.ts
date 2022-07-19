import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Direction } from 'src/app/models/direction';
import { Person } from 'src/app/models/person';
import { DirectionService } from 'src/app/services/direction.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register-direction',
  templateUrl: './register-direction.component.html',
  styleUrls: ['./register-direction.component.css']
})
export class RegisterDirectionComponent implements OnInit {

  direction: Direction = new Direction();
  persons : Person[] = [];
  register:string='';


  constructor(private directionService: DirectionService,
              private router: Router) { }

  ngOnInit(): void {
    this.directionService.getPersons()
        .subscribe(response => this.persons = response)
  }

  saveDirection(){
    this.directionService.registerDirection(this.direction).subscribe(date => {
      this.goToListDirection();
      console.log(date);
    }, error => console.log(error));
  }

  goToListDirection(){
    this.router.navigate(['list-direction']);
    swal.fire('Agregado',
    'Dirección registrada con exito!',
    'success');
  }

  onSubmit(){
    this.saveDirection();
  }

}
