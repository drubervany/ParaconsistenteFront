import { CFPS } from "./cfps.model";
import { Gerente } from "./gerente.model";

export class Usuario {
    
    email: String;
    password: String;
    cpf: String;
    cargo: String;
    cfps: CFPS;
    gerente: Gerente;

    get id(){
        console.log("CARGO: ", this.cargo);
        if(this.cargo==="CFPS")
            return this.cfps.id;
        else
            return this.gerente.id;
    }

}
