import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tomada-desicao',
  templateUrl: './tomada-desicao.component.html',
  styleUrls: ['./tomada-desicao.component.css']
})
export class TomadaDesicaoComponent implements OnInit {

  projetos: any = [
                    {codigo: 1, nome:"Projeto 1", gerente: "Gerente 1", pf: 10, cfps: 10, status: "Em Cadastro"},
                    {codigo: 2, nome:"Projeto 2", gerente: "Gerente 2", pf: 20, cfps: 20, status: "Em Cadastro"},
                    {codigo: 3, nome:"Projeto 3", gerente: "Gerente 3", pf: 30, cfps: 30, status: "Em Cadastro"},
                    {codigo: 4, nome:"Projeto 4", gerente: "Gerente 4", pf: 40, cfps: 40, status: "Em Cadastro"}
                  ]

  constructor() { }

  ngOnInit() {
  }

}
