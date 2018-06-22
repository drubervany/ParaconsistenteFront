import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';
import { Usuario } from './login/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  mostraMenu: boolean = false;
  usuario: Usuario = new Usuario();
  constructor(private authService: AuthService){
   
  }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => {
        this.mostraMenu = mostrar!=null;
        console.log("mostrarMenu", this.mostraMenu);
        this.usuario = this.authService.usuarioAutenticado;
      }
    );
  }
}
