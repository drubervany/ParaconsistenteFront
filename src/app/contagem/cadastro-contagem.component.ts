import { TipoFuncao } from './tipoFuncao';
import { Funcao } from './funcao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contagem',
  templateUrl: './cadastro-contagem.component.html',
  styleUrls: ['./cadastro-contagem.component.css']
})
export class CadastroContagemComponent implements OnInit {

  funcao: Funcao;
  funcoes: Funcao[] = Array<Funcao>();
   
  constructor() { }

  ngOnInit() {
    this.funcao = new Funcao();
  }

  adicionar(){
    this.funcao.id = (this.funcoes.length+1)+"";
    console.log(this.funcao);
    this.funcoes.push(this.funcao);
    console.log("funcao", this.funcoes);
    this.funcao = new Funcao();
  }

  deletar(funcao){
    let index: number = this.funcoes.indexOf(funcao);
    if (index !== -1) {
        this.funcoes.splice(index, 1);
    }
  }
}

