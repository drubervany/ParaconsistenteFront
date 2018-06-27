import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FIltroPesquisa } from './filtro-pesquisa.model';
import { Projeto } from '../projeto/projeto.model';
import { ProjetoService } from '../projeto/projeto.service';
import { CFPS } from '../login/cfps.model';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'filtro-pesquisa',
  templateUrl: './filtro-pesquisa.component.html',
  styleUrls: ['./filtro-pesquisa.component.css']
})
export class FiltroPesquisaComponent implements OnInit {

  filtro: FIltroPesquisa = new FIltroPesquisa();

  todosProjetos: Projeto[];
  status: any;
  projetos: Projeto[];
  cfps: CFPS;

  @Output() pesquisaProjetos = new EventEmitter();
  
 
  constructor(private projetoService: ProjetoService,
              private authService: AuthService) {

      this.cfps = authService.usuarioAutenticado.cfps;
      console.log(">>>CFPS: ", this.cfps);
  }

  ngOnInit() {
    this.filtro = new FIltroPesquisa();
    this.projetos = new Array<Projeto>();
    this.projetoService.consultarStatus().subscribe(status => {
      this.status = status;
    });     
    this.projetoService.consultarTodos(this.cfps).subscribe(projetos => {
      this.todosProjetos = projetos;
    }); 
  }

  pesquisar(){
    this.projetoService.consultarPesquisa(this.filtro).subscribe(projetos => {
      if(this.filtro.status != null){
        this.projetos = projetos;
      }else{
        this.projetos = Array<Projeto>();
        this.projetos.push(projetos);
      }
      this.pesquisaProjetos.emit(this.projetos);
    });     
  }

  limpar(){
    this.ngOnInit();
  }
}
