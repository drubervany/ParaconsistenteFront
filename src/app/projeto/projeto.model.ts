import { CFPS } from './../login/cfps.model';
import { Gerente } from './../login/gerente.model';
import { Cliente } from '../cliente/cliente.model';
import { Medicao } from '../contagem/medicao.model';
export class Projeto {

    id: number;
    nome: string;
    descricao: string;
    status: string;
    gpBackup: Gerente = new Gerente();
    cliente: Cliente = new Cliente();
    cfps: CFPS[] = Array<CFPS>();
    cfpsSelecionado: CFPS;
    pontosFuncao: number = 0;

}
