import { Funcao } from "./funcao.model";

export class Medicao {
    id: String;
    funcao: Funcao = new Funcao();
    tipo: String;
    qtdeDados: number = 0;
    qtdeRegistros: number = 0;
    totalPonfoFuncao: number = 0;
}
