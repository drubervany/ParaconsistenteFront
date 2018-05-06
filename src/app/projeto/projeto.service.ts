import { Injectable  } from '@angular/core';
import { Router } from '@angular/router';
import { Projeto } from './projeto.model';
import { FIltroPesquisa } from './filtro-pesquisa.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjetoService {
    
    
    private usuarioAutenticado: boolean = false;
    
    constructor(private router: Router,
        private _http: Http) {}
        
    //private api = `https://paraconsistente-back.herokuapp.com/paraconsistente/api/projetos/`;
    private api = `http://localhost:8080/paraconsistente/api/projetos/`;

    consultarTodos(){
        
        let api = this.api;

        console.log(api);

        return this._http.get(api)
        .map(result => result.json());
                    
    }

    consultarPesquisa(pesquisa: FIltroPesquisa){
        console.log("pesquisa", pesquisa);

        let api = this.api;
        if(pesquisa.status !== null){
            console.log("pesquisa status", pesquisa.status);
            api += "status/" + pesquisa.status.descricao;
        }else{
            console.log("pesquisa projeto", pesquisa.projeto);
            api += pesquisa.projeto.id;            
        }

        return this._http.get(api)
            .map(result => result.json());
    }

    consultarStatus(){
        
        let api = this.api + "status";

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

    salvar(projeto: Projeto) {
    
        console.log(this.api);

        return this._http.post(this.api, projeto);
                    
    }

    atualizar(projeto: Projeto) {
        let api = this.api + projeto.id;

        console.log("atualizado", api, projeto);

        return this._http.put(api, projeto)
        .map(result => result.json());
                    
    }

    deletar(projeto: Projeto) {
        
        let api = this.api + projeto.id;

        console.log(api);

        return this._http.delete(api)
        .map(result => result.json());
                      
    }
    
}

