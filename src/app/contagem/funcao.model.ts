import { Projeto } from "../projeto/projeto.model";
import { CFPS } from "../login/cfps.model";

export class Funcao {
    id: String = "";
    nome: String = "";
    projeto: Projeto;
    cfps: CFPS;
}
