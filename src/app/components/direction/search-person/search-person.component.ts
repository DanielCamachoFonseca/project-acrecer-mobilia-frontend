import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirectionService } from 'src/app/services/direction.service';
import { Direction } from 'src/app/models/direction'
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})
export class SearchPersonComponent implements OnInit {

  submitted = false;
  direction: Direction = new Direction();
  directions: Direction[] = [];
  pageSize = 8;
  desde:number = 0;
  hasta:number = 8;

  constructor(private directionService: DirectionService,
    private router: Router) { }

  ngOnInit(): void {
  }

  cambiarPagina(e:PageEvent) {
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

  search() {
    if (this.direction.id_person.name == undefined) {
      this.direction.id_person.name = 'null';
    }
    if (this.direction.id_person.surname == undefined) {
      this.direction.id_person.surname = 'null';
    }
    if(this.direction.id_person.email == undefined) {
      this.direction.id_person.email = 'null';
    }
    this.directionService.searchPerson(this.direction).subscribe(date => {


    },
    error => console.log(error));
  }

}
