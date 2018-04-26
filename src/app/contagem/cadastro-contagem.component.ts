import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contagem',
  templateUrl: './cadastro-contagem.component.html',
  styleUrls: ['./cadastro-contagem.component.css']
})
export class CadastroContagemComponent implements OnInit {

  funcao: any = {};
  funcaoSelecionada: any = {};
  funcoes: String[] = Array<String>();

  tiposFuncao: String[] = [
    {"codigo": 1, "nome":"ALI", "descricao":"" },
    {"codigo": 2, "nome":"AIE", "descricao":"" },
    {"codigo": 3, "nome":"EE", "descricao":"" },
    {"codigo": 4, "nome":"SE", "descricao":"" },
    {"codigo": 5, "nome":"CE", "descricao":"" }
  ];
    
  constructor() { }

  ngOnInit() {

  }

  adicionarFuncao(){
    console.log(this.funcoes);
    this.funcoes.push(this.funcao);
  }
}

