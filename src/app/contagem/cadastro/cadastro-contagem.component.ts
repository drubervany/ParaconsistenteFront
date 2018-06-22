import { Component, OnInit } from '@angular/core';
import { Funcao } from '../funcao.model';
import { FuncaoService } from '../funcao.service';
import { CfpsService } from '../../cfps/cfps.service';
import { Location } from '@angular/common';
import { CFPS } from '../../login/cfps.model';
import { Projeto } from '../../projeto/projeto.model';
import { ProjetoService } from '../../projeto/projeto.service';
import { MedicaoService } from '../medicao.service';
import { Medicao } from '../medicao.model';
import { AuthService } from '../../login/auth.service';

@Component({
  selector: 'app-contagem',
  templateUrl: './cadastro-contagem.component.html',
  styleUrls: ['./cadastro-contagem.component.css']
})
export class CadastroContagemComponent implements OnInit {
  
  projetos: Projeto[];
  projeto: Projeto;
  funcao: Funcao;
  cfps: CFPS;
  funcoes: Funcao[] = Array<Funcao>();
  tiposFuncoes: Medicao[];
  tipoFuncao: Medicao;

  constructor(public funcaoService: FuncaoService,
              public projetoService: ProjetoService,
              public medicaoService: MedicaoService,
              public cfpsService: CfpsService,
              private authService: AuthService) {
                
        this.cfps = authService.usuarioAutenticado.cfps;
        console.log(">>>CFPS: ", this.cfps);
  }

  ngOnInit() {
    this.funcao = new Funcao();
  }

  adicionar(){
    this.funcao.projeto = this.projeto;
    this.funcao.cfps= this.cfps;
    console.log(this.funcao);
    this.funcaoService.salvar(this.funcao)
                      .subscribe(funcao => {
                        console.log("funcao", funcao)
                        let uri = funcao.headers.get('Location');
                        console.log("uri", uri);
                        this.funcaoService.consultarLocation(uri).subscribe(funcao => {
                          console.log("retornou objeto", funcao);
                          this.funcao = funcao;
                          this.funcoes.push(this.funcao);
                          this.ngOnInit();
                        });
                      });
    console.log("funcao", this.funcoes);
    this.funcao = new Funcao();
  }

  deletar(funcao){
    let index: number = this.funcoes.indexOf(funcao);
    let uri;
    if (index !== -1) {
        this.funcoes.splice(index, 1);
        this.funcaoService.deletar(funcao)
                      .subscribe(projeto => projeto);
       
    }
  }

  carregaProjetos(projetos) {
    this.projetos = projetos;
  }

  projetoSelecionado(projeto){
    console.log("projetoSelecionado", projeto);
    this.projeto = projeto;

    this.medicaoService.consultarProjeto(this.projeto, this.cfps).subscribe(medicao => {
      console.log("medicao", medicao);
      if (medicao!==null){
          this.tiposFuncoes = medicao
      }
      this.tipoFuncao = new Medicao();
      this.tiposFuncoes.push(this.tipoFuncao);
      
    });    

    this.funcaoService.consultarTodos(projeto, this.cfps).subscribe(funcoes => this.funcoes = funcoes);    
  }

  medicao(medicoes){
    this.tiposFuncoes = medicoes;
    this.projetoSelecionado(this.projeto);
  }

  finalizar(){
    console.log("finalizar");
  }

}


