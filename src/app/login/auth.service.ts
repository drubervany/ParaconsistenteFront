import { Injectable, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    errorMessage: String;

    private usuarioAutenticado: boolean = false;

    mostrarMenuEmitter = new EventEmitter<boolean>();

    constructor(private router: Router,
                private _http: Http) { }

    fazerLogin(usuario: Usuario) {

        let api = `https://paraconsistente-back.herokuapp.com/paraconsistente/api/usuarios/${usuario.email}/${usuario.password}`;
        //let api = `http://localhost:8080/paraconsistente/api/usuarios/${usuario.email}/${usuario.password}`;

        console.log(api);

        this._http.get(api)
        .map(result => result.json())
        .subscribe(
            usuarioLogin => {
                console.log(usuarioLogin);
                
                if (usuario.password === usuarioLogin.senha){
                    console.log(usuario);

                    this.usuarioAutenticado = true;
                    
                    this.mostrarMenuEmitter.emit(this.usuarioAutenticado);
                
                    this.router.navigate(['/projeto']);
                }
            },
            error =>  this.errorMessage = <any>error);            
    }

    usuarioEstaAutenticado(){
        return this.usuarioAutenticado;
    }
}

