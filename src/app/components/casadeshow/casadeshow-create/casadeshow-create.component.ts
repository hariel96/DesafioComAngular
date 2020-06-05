import { CasaDeShow } from './../casadeshow.model';
import { CasadeshowService } from './../casadeshow.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-casadeshow-create',
  templateUrl: './casadeshow-create.component.html',
  styleUrls: ['./casadeshow-create.component.css']
})
export class CasadeshowCreateComponent implements OnInit {


  casadeshow: CasaDeShow = {
    nome: '',
    endereco: '',
    capacidade: null
  }


  constructor(private casadeshowService: CasadeshowService, private router: Router) { }

  ngOnInit(): void {

  }

  createCasadeShow(): void {
    this.casadeshowService.create(this.casadeshow).subscribe(() => {
      this.casadeshowService.showMessage('Casa de Show cadastrada com sucesso')
      this.router.navigate(['/casadeshow'])
    })

  }

  cancel(): void {
    this.router.navigate(['/casadeshow'])
  }
}
