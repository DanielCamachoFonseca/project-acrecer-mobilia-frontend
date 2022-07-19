import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Direction } from 'src/app/models/direction';
import { DirectionService } from 'src/app/services/direction.service';

@Component({
  selector: 'app-list-direction',
  templateUrl: './list-direction.component.html',
  styleUrls: ['./list-direction.component.css']
})
export class ListDirectionComponent implements OnInit {

  directions: Direction[] = [];
  pageSize = 8;
  desde:number = 0;
  hasta:number = 8;

  constructor(private directionService: DirectionService,
    private router: Router) { }

  ngOnInit(): void {
    this.directionService.getDirections()
        .subscribe(response => this.directions = response);
  }

  cambiarPagina(e:PageEvent) {
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

  agregarBoton(){
    this.router.navigate(['register-direction']);
  }


}
