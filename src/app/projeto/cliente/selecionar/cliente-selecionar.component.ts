import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjetoService } from '../../projeto.service';
import { ClienteService } from '../../../cliente/cliente.service';
import { Projeto } from '../../projeto.model';

@Component({
  selector: 'cliente-selecionar',
  templateUrl: './cliente-selecionar.component.html',
  styleUrls: ['./cliente-selecionar.component.css']
})
export class ClienteSelecionarComponent implements OnInit {

  @Input() projeto: Projeto;

  cnpjPesquisa: String;
  
  constructor(private clienteService: ClienteService) { 
  }

  ngOnInit() {
    console.log("ClienteSelecionar", this.projeto);
    this.cnpjPesquisa = this.projeto.cliente.cnpj;
  }

  pesquisar(){
   
    this.clienteService.consultar(this.cnpjPesquisa)
                       .subscribe(cliente => this.projeto.cliente = cliente);
    
  }
}
