import { Injectable, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    this.usuarioAutenticado = true;

    this.mostrarMenuEmitter.emit(this.usuarioAutenticado);

    this.router.navigate(['/projeto']);
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}

