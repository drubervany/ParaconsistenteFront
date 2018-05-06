import { Injectable  } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GerenteService {

    errorMessage: String;

    constructor(private _http: Http) { }

    consultarTodos() {

        let api = `https://paraconsistente-back.herokuapp.com/paraconsistente/api/gerentes/`;
        //let api = `http://localhost:8080/paraconsistente/api/gerentes/`;

        console.log("GerenteService", api);

        return this._http.get(api)
        .map(result => result.json());
                   
    }
}

