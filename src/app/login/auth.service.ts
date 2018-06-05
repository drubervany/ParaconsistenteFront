import { Injectable, EventEmitter  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from './usuario.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    errorMessage: String;

    usuarioAutenticado: Usuario;

    mostrarMenuEmitter = new EventEmitter<Usuario>();

    constructor(private router: Router,
                private _http: Http) { }

    fazerLogin(usuario: Usuario) {

        //let api = `https://paraconsistente-back.herokuapp.com/paraconsistente/api/usuarios/${usuario.email}/${usuario.password}`;
        let api = `http://localhost:8080/paraconsistente/api/usuarios/${usuario.email}/${usuario.password}`;

        console.log(api);

        this._http.get(api)
        .map(result => result.json())
        .subscribe(
            usuarioLogin => {
                if (usuario.password === usuarioLogin.senha){
                    
                    this.usuarioAutenticado = usuarioLogin;
                    usuario = usuarioLogin;
                    
                    console.log("usuario", usuario, this.usuarioAutenticado);
                    this.mostrarMenuEmitter.emit(usuario);
                
                    this.router.navigate(['/projeto']);
                  
                }
            },
            error =>  this.errorMessage = <any>error);            
    }

    usuarioEstaAutenticado(){
        return this.usuarioAutenticado!=null;
    }
}

