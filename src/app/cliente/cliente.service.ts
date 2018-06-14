import { Injectable  } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClienteService {

    errorMessage: String;

    constructor(private _http: Http) { }

    consultar(cnpj: String) {

        
        //let api = `https://paraconsistente-back.herokuapp.com/paraconsistente/api/clientes/cnpj/${cnpj}`;
        let api = `http://localhost:8080/paraconsistente/api/clientes/cnpj/${cnpj}`;

        console.log(api);

        return this._http.get(api)
        .map(result => result.json());
                   
    }
}

