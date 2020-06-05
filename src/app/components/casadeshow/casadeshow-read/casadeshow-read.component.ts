import { CasadeshowService } from './../casadeshow.service';
import { CasaDeShow } from './../casadeshow.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casadeshow-read',
  templateUrl: './casadeshow-read.component.html',
  styleUrls: ['./casadeshow-read.component.css']
})
export class CasadeshowReadComponent implements OnInit {
  
  casasdeshow: CasaDeShow[];
  displayedColumns = ['id', 'nome','endereco', 'capacidade', 'action']

  constructor(private casadeshowService: CasadeshowService) { }

  ngOnInit(): void {
    this.casadeshowService.findAll().subscribe(casasDeShow =>{
      this.casasdeshow = casasDeShow;
      console.log(casasDeShow)
    })
  }

}
