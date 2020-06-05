import { Router, ActivatedRoute } from '@angular/router';
import { CasadeshowService } from './../casadeshow.service';
import { CasaDeShow } from './../casadeshow.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casadeshow-delete',
  templateUrl: './casadeshow-delete.component.html',
  styleUrls: ['./casadeshow-delete.component.css']
})
export class CasadeshowDeleteComponent implements OnInit {

  casadeshow: CasaDeShow = {
    nome: '',
    endereco: '',
    capacidade: null
  }

  constructor(private casadeshowService: CasadeshowService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.casadeshowService.readById(id).subscribe(casadeshow => {
      this.casadeshow = casadeshow
    })
  }

  deleteCasadeShow(): void {

    this.casadeshowService.delete(this.casadeshow.id).subscribe(() => {
      this.casadeshowService.showMessage('Casa de Show excluida com sucesso!')
      this.router.navigate(['/casadeshow'])
    })
  }

  cancel(): void {
    this.router.navigate(['/casadeshow'])
  }

}
