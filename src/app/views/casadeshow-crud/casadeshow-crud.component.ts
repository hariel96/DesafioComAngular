import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-casadeshow-crud',
  templateUrl: './casadeshow-crud.component.html',
  styleUrls: ['./casadeshow-crud.component.css']
})
export class CasadeshowCrudComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  navigateToCasaDeShowCreat(): void {
    this.router.navigate(['/casadeshow/create'])
  }

}
