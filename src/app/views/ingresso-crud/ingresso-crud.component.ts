import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ingresso-crud',
  templateUrl: './ingresso-crud.component.html',
  styleUrls: ['./ingresso-crud.component.css']
})
export class IngressoCrudComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  navigateToEventoCreat(): void {
    this.router.navigate(['/evento/create'])
  }

}
