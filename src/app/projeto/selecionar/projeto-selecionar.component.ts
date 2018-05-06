import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Projeto } from '../projeto.model';

@Component({
  selector: 'projeto-selecionar',
  templateUrl: './projeto-selecionar.component.html',
  styleUrls: ['./projeto-selecionar.component.css']
})
export class ProjetoSelecionarComponent implements OnInit {

  @Input() projetos: Projeto[];
  @Output() projetoSelecionado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selecionar(projeto){
    console.log("selecionou o projeto", projeto);
    this.projetoSelecionado.emit(projeto);
  }

}
