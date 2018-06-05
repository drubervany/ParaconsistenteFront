import { CFPS } from "./cfps.model";
import { Gerente } from "./gerente.model";

export class Usuario {
    email: String;
    password: String;
    cpf: String;

    cfps: CFPS;
    gerente: Gerente;
}
