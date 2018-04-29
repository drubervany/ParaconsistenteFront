import { Component, OnInit, Input } from '@angular/core';
import { Funcao } from '../funcao.model';
import { TipoFuncao } from '../tipo-funcao.model';

@Component({
  selector: 'complexidade-contagem',
  templateUrl: './complexidade-contagem.component.html',
  styleUrls: ['./complexidade-contagem.component.css']
})
export class ComplexidadeContagemComponent implements OnInit {

  @Input() funcoes: Funcao[];

  tipoFuncao: TipoFuncao;
  tiposFuncoes: TipoFuncao[] = new Array<TipoFuncao>();

  tiposFuncao: any = [
    {"codigo": 1, "nome":"ALI", "descricao":"" },
    {"codigo": 2, "nome":"AIE", "descricao":"" },
    {"codigo": 3, "nome":"EE", "descricao":"" },
    {"codigo": 4, "nome":"SE", "descricao":"" },
    {"codigo": 5, "nome":"CE", "descricao":"" }
  ];
    
  constructor() { }

  ngOnInit() {
    this.tipoFuncao = new TipoFuncao();
    this.tiposFuncoes.push(this.tipoFuncao);
  }

  adicionar(){
    this.tipoFuncao.incluido = true;
    this.tipoFuncao = new TipoFuncao();
    this.tiposFuncoes.push(this.tipoFuncao);
  }

  deletar(tipoFuncao){
    let index: number = this.tiposFuncoes.indexOf(tipoFuncao);
    if (index !== -1) {
      this.tiposFuncoes.splice(index, 1);
    }
    
    if (this.tiposFuncoes.length===0){
      this.adicionar();
    }
  }
}

