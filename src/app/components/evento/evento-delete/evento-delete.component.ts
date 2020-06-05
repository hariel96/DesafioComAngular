import { CasadeshowService } from './../../casadeshow/casadeshow.service';
import { CasaDeShow } from './../../casadeshow/casadeshow.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EventoService } from './../evento.service';
import { Evento } from './../evento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-delete',
  templateUrl: './evento-delete.component.html',
  styleUrls: ['./evento-delete.component.css']
})
export class EventoDeleteComponent implements OnInit {

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
    })
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

  buscarCasaSelecionada(): void {
    var casaDeShow: CasaDeShow;
    casaDeShow = this.casasDeShow.find(p => (p.id === this.idCasa));
    console.log(casaDeShow);
    this.evento.casaDeshow = casaDeShow;

  }

  deleteEvento(): void {
    this.eventoService.delete(this.evento.id).subscribe(() => {
      this.eventoService.showMessage('Evento excluido com sucesso!')
      this.router.navigate(['/todoseventos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/todoseventos'])
  }

}
