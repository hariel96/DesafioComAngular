import { Evento } from './../evento/evento.model';
export interface Ingresso {
    id?: number
    nome: String
    preco: number
    evento: Evento
}