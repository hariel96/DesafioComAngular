import { CasadeshowService } from './../../casadeshow/casadeshow.service';
import { CasaDeShow } from './../../casadeshow/casadeshow.model';
import { Evento } from './../evento.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EventoService } from './../evento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-update',
  templateUrl: './evento-update.component.html',
  styleUrls: ['./evento-update.component.css']
})
export class EventoUpdateComponent implements OnInit {

  casasDeShow: CasaDeShow[];

  idCasa: number;

  evento: Evento = {
    nome: '',
    descricao: '',
    data: new Date(""),
    qtd_ingressos: null,
    preco: null,
    casaDeshow: { id: 0, nome: '', endereco: '', capacidade: null }

  }

  constructor(private casadeshowService: CasadeshowService, private eventoService: EventoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.chamarCasasDeShow();
    this.eventoService.readById(id).subscribe(evento => {
      this.evento = evento
    });
  }



  chamarCasasDeShow(): void {
    this.casadeshowService.findAll().subscribe(data => {
      this.casasDeShow = data;
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
    this.router.navigate(['/todoseventos'])
  }

  buscarCasaSelecionada(): void {
    var casaDeShow: CasaDeShow;
    casaDeShow = this.casasDeShow.find(p => (p.id === this.idCasa));
    console.log(casaDeShow);
    this.evento.casaDeshow = casaDeShow;

  }


  updateEvento(): void {
    this.eventoService.update(this.evento).subscribe(() => {
      this.eventoService.showMessage('Evento foi alterado!')
      this.router.navigate(['/todoseventos'])
    })

  }



}
