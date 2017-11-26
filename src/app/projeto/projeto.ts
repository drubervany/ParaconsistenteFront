import { CFPS } from './../login/cfps';
import { Gerente } from './../login/gerente';
import { Cliente } from '../cliente/cliente';
export class Projeto {

    id: number;
    nome: string;
    descricao: string;
    status: string;
    gpBackup: Gerente = new Gerente();
    cliente: Cliente = new Cliente();
    cfps: CFPS[] = Array<CFPS>();

}
