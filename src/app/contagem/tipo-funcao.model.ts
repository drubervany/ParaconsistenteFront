import { Funcao } from "./funcao.model";

export class TipoFuncao {
    funcao: Funcao;
    tipo: String;
    qtdeDados: number = 0;
    qtdeRegistros: number = 0;
    incluido: boolean = false;


    get totalPonfoFuncao(): number{

        return this.qtdeDados+this.qtdeRegistros;
    }
}
