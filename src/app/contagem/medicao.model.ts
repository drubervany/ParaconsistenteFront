import { Funcao } from "./funcao.model";
import { CFPS } from "../login/cfps.model";
import { Projeto } from "../projeto/projeto.model";

export class Medicao {
    id: String;
    funcao: Funcao = new Funcao();
    tipo: String;
    qtdeDados: number = 0;
    qtdeRegistros: number = 0;
    totalPonfoFuncao: number = 0;
    cfps: CFPS;
    projeto: Projeto;
}
