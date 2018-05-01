import { Component, OnInit } from '@angular/core';
import { Funcao } from '../funcao.model';
import { FuncaoService } from '../funcao.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contagem',
  templateUrl: './cadastro-contagem.component.html',
  styleUrls: ['./cadastro-contagem.component.css']
})
export class CadastroContagemComponent implements OnInit {

  funcao: Funcao;
  funcoes: Funcao[] = Array<Funcao>();
   
  constructor(public funcaoService: FuncaoService) { }

  ngOnInit() {
    this.funcao = new Funcao();
    this.funcaoService.consultarTodos().subscribe(funcoes => this.funcoes = funcoes);
  }

  adicionar(){
    console.log(this.funcao);
    this.funcaoService.salvar(this.funcao)
                      .subscribe(funcao => {
                        console.log("funcao", funcao)
                        let uri = funcao.headers.get('Location');
                        console.log("uri", uri);
                        this.funcaoService.consultarLocation(uri).subscribe(funcao => {
                          console.log("retornou objeto", funcao);
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
}

