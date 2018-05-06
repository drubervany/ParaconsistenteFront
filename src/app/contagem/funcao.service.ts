import { Injectable  } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Medicao } from "./medicao.model";
import 'rxjs/add/operator/map';
import { Funcao } from './funcao.model';
import { Projeto } from '../projeto/projeto.model';
import { CFPS } from '../login/cfps.model';

@Injectable()
export class FuncaoService {

    errorMessage: String;

    private api = "https://paraconsistente-back.herokuapp.com/paraconsistente/api/";
    //private api = `http://localhost:8080/paraconsistente/api/`;

    constructor(private _http: Http) { }


    consultarTodos(projeto: Projeto, cfps: CFPS) {
        
        let api = this.api + "/projetos/" + projeto.id + "/cfps/" + cfps.id + "/funcoes";

        console.log(api);

        return this._http.get(api)
        .map(result => result.json());
                    
    }

    consultar(codigo: number) {
        
        let api = this.api + "funcoes/" + codigo;

        console.log(api);

        return this._http.get(api)
        .map(result => result.json());
                    
    }

    consultarLocation(location: string) {
        
        console.log(location);

        return this._http.get(location)
        .map(result => result.json());
                    
    }

    salvar(medicao: Funcao) {
    
        console.log(this.api, medicao);

        return this._http.post(this.api+ "funcoes/", medicao);
                    
    }

    atualizar(medicao: Funcao) {
        let api = this.api + "funcoes/" + medicao.id;

        console.log(api);

        return this._http.put(api, medicao)
        .map(result => result.json());
                    
    }

    deletar(medicao: Funcao) {
        
        let api = this.api + "funcoes/" + medicao.id;

        console.log(api, medicao);

        return this._http.delete(api)
        .map(result => result.json());
                      
    }
}

