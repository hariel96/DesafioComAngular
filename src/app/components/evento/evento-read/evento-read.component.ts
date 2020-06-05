import { EventoService } from './../evento.service';
import { Evento } from './../evento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-read',
  templateUrl: './evento-read.component.html',
  styleUrls: ['./evento-read.component.css']
})
export class EventoReadComponent implements OnInit {

  eventos: Evento[];
  displayedColumns = ['id', 'data', 'descricao', 'nome', 'preco', 'qtd_ingressos', 'action']

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.eventoService.findAll().subscribe(eventos =>{
      this.eventos = eventos;
      console.log(eventos);
      
    })
  }

}
