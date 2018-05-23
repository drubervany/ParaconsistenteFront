import { Injectable  } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Medicao } from "./medicao.model";
import 'rxjs/add/operator/map';
import { CFPS } from '../login/cfps.model';
import { Projeto } from '../projeto/projeto.model';

@Injectable()
export class MedicaoService {

    errorMessage: String;

    //private api = `https://paraconsistente-back.herokuapp.com/paraconsistente/api/medicoes`;
    private api = `http://localhost:8080/paraconsistente/api/medicoes`;

    constructor(private _http: Http) { }


    consultarTodos() {
        
        let api = this.api;

        console.log(api);

        return this._http.get(api)
        .map(result => result.json());
                    
    }

    consultarProjeto(projeto: Projeto) {
        
        //let api = `https://paraconsistente-back.herokuapp.com/paraconsistente/api/projetos/` + projeto.id + "/medicoes";
        let api = `http://localhost:8080/paraconsistente/api/projetos/` + projeto.id + "/medicoes";


        console.log(api);

        return this._http.get(api)
        .map(result => result.json());
                    
    }

    consultarCFPS(cfps: CFPS) {
        
        let api = this.api + "projetos/cfps/" + cfps.id;

        console.log(api);

        return this._http.get(api)
        .map(result => result.json());
                    
    }

    consultarTotalPF(projeto: Projeto) {
        
        //let api = `https://paraconsistente-back.herokuapp.com/paraconsistente/api/projetos/` + projeto.id + "/cfps/" + projeto.cfps.id + "/medicoes/total";
        let api = `http://localhost:8080/paraconsistente/api/projetos/` + projeto.id + "/cfps/" + projeto.cfps.id + "/medicoes/total";
        console.log(api);

        return this._http.get(api)
        .map(result => result.json());
                    
    }

    consultarLocation(api: string) {
        
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

    salvar(medicao: Medicao) {
    
        console.log(this.api, medicao);

        return this._http.post(this.api, medicao);
                    
    }

    atualizar(medicao: Medicao) {
        let api = this.api + medicao.id;

        console.log(api);

        return this._http.put(api, medicao)
        .map(result => result.json());
                    
    }

    deletar(medicao: Medicao) {
        
        let api = this.api + "/" + medicao.id;
        console.log(api, medicao);

        return this._http.delete(api)
        .map(result => result.json());
                      
    }
}

