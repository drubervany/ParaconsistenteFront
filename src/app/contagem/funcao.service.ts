import { Injectable  } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Medicao } from "./medicao.model";
import 'rxjs/add/operator/map';
import { Funcao } from './funcao.model';

@Injectable()
export class FuncaoService {

    errorMessage: String;

    private api = `https://paraconsistente-back.herokuapp.com/paraconsistente/api/funcoes/`;
    //private api = `http://localhost:8080/paraconsistente/api/funcoes/`;

    constructor(private _http: Http) { }


    consultarTodos() {
        
        let api = this.api;

        console.log(api);

        return this._http.get(api)
        .map(result => result.json());
                    
    }

    consultar(codigo: number) {
        
        let api = this.api + codigo;

        console.log(api);

        return this._http.get(api)
        .map(result => result.json());
                    
    }

    consultarLocation(api: string) {
        
        console.log(api);

        return this._http.get(api)
        .map(result => result.json());
                    
    }

    salvar(medicao: Funcao) {
    
        console.log(this.api, medicao);

        return this._http.post(this.api, medicao);
                    
    }

    atualizar(medicao: Funcao) {
        let api = this.api + medicao.id;

        console.log(api);

        return this._http.put(api, medicao)
        .map(result => result.json());
                    
    }

    deletar(medicao: Funcao) {
        
        let api = this.api + medicao.id;

        console.log(api, medicao);

        return this._http.delete(api)
        .map(result => result.json());
                      
    }
}

