import { CasadeshowService } from './../../casadeshow/casadeshow.service';
import { CasaDeShow } from './../../casadeshow/casadeshow.model';
import { Evento } from './../evento.model';
import { Router } from '@angular/router';
import { EventoService } from './../evento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css']
})
export class EventoCreateComponent implements OnInit {

  casasDeShow: CasaDeShow[];

  idCasa: number;
  
  evento: Evento = {
    nome: '',
    descricao: '',
    data: new Date(""),
    qtd_ingressos: null,
    preco: null,
    casaDeshow: {id: 0, nome: '', endereco: '', capacidade: null}
  }


  constructor(private casadeshowService: CasadeshowService, private eventoService: EventoService, private router: Router) { }

  ngOnInit(): void {

    this.chamarCasasDeShow();
  }

  chamarCasasDeShow(): void{
    this.casadeshowService.findAll().subscribe(data => {
      this.casasDeShow=data;
    });
  }


  createEvento(): void {
    this.buscarCasaSelecionada();
    this.eventoService.create(this.evento).subscribe(() => {
    this.eventoService.showMessage('Evento cadastrado executada com sucesso!')
    this.router.navigate(['/evento'])
  })
}
  cancel(): void {
    this.router.navigate(['/evento'])
  }


  buscarCasaSelecionada(): void {
    var casaDeShow: CasaDeShow;
    casaDeShow= this.casasDeShow.find(p => (p.id === this.idCasa));
    console.log(casaDeShow);
    this.evento.casaDeshow=casaDeShow;

  }
}
