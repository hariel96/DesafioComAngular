import { CasaDeShow } from './../casadeshow.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CasadeshowService } from './../casadeshow.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casadeshow-update',
  templateUrl: './casadeshow-update.component.html',
  styleUrls: ['./casadeshow-update.component.css']
})
export class CasadeshowUpdateComponent implements OnInit {

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
    });
  }


  updateCasadeShow(): void {

    this.casadeshowService.update(this.casadeshow).subscribe(() => {
      this.casadeshowService.showMessage('Casa de Show alterada com sucesso!')
      this.router.navigate(['/casadeshow']);
    })

  }

  cancel(): void {
    this.router.navigate(['/casadeshow'])
  }

}
