import { Injectable  } from '@angular/core';
import { Router } from '@angular/router';
import { Projeto } from './projeto';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjetoService {
    
    
    private usuarioAutenticado: boolean = false;
    
    constructor(private router: Router,
        private _http: Http) {}
        
    private api = `https://mighty-caverns-71018.herokuapp.com/paraconsistente/api/projetos/`;
    //private api = `http://localhost:8080/paraconsistente/api/projetos/`;

    consultarTodos() {
        
        let api = this.api;

        console.log(api);

        return this._http.get(api)
        .map(result => result.json());
                    
    }

    consultar(codigo: String) {
        
        let api = this.api + codigo;

        console.log(api);

        return this._http.get(api)
        .map(result => result.json());
                    
    }

    salvar(projeto: any) {
    
        console.log(this.api);

        return this._http.post(this.api, projeto);
                    
    }

    atualizar(projeto: any) {
      
        let api = this.api + projeto.codigo;

        console.log(api);

        return this._http.put(api, JSON.stringify(projeto))
        .map(result => result.json());
                    
    }

    deletar(projeto: any) {
        
        let api = this.api + projeto.codigo;

        console.log(api);

        return this._http.delete(api)
        .map(result => result.json());
                      
    }
    
}

