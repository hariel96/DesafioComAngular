import { CasaDeShow } from './../casadeshow/casadeshow.model';
export interface Evento {
    id?: number
    nome: String
    descricao: String
    data: Date
    qtd_ingressos: number
    preco: number
    casaDeshow: CasaDeShow
    
}