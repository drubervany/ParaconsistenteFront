import { Injectable  } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CfpsService {

    constructor(private _http: Http) { }

    consultarTodos() {

        //let api = `https://paraconsistente-back.herokuapp.com/paraconsistente/api/cfps/`;
        let api = `http://localhost:8080/paraconsistente/api/cfps/`;

        console.log(api);

        return this._http.get(api)
        .map(result => result.json());
                   
    }
}


