import { CFPS } from './../login/cfps';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileDropModule, UploadFile, UploadEvent } from 'ngx-file-drop/lib/ngx-drop';
import { ProjetoService } from './projeto.service';
import { ClienteService } from '../cliente/cliente.service';
import { CfpsService } from '../cfps/cfps.service';
import * as swal from 'sweetalert2';
import { Projeto } from './projeto';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  projeto: Projeto;

  cnpjPesquisa: String;
  projetoSelecionado: Projeto;
  cfpsSelecionado: CFPS;

  cfpsAtivos: CFPS[] = new Array<CFPS>();
  projetosAtivos: Projeto[] = new Array<Projeto>();

  constructor(private service: ProjetoService,
              private clienteService: ClienteService,
              private cfpsService: CfpsService,
              ) { 
    
  }

  ngOnInit() {
  
     this.novo();
     this.cfpsService.consultarTodos().subscribe(cfps => this.cfpsAtivos = cfps);
     this.service.consultarTodos().subscribe(projetos => this.projetosAtivos = projetos);
  }

  public files: UploadFile[] = [];
  
  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (var file of event.files) {
      file.fileEntry.file(info => {
        console.log(info);
      });
    }
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }

  novo(){
     this.projeto = new Projeto();     
  }

  pesquisar(){
    this.service.consultar(this.projetoSelecionado.id)
                .subscribe(projeto => {
                  console.log(projeto);
                  this.projeto = projeto;
                  this.cnpjPesquisa = this.projeto.cliente.cnpj;
                });
  }

  salvar(){
    console.log(JSON.stringify(this.projeto));
    

    /* this.service.salvar(this.projeto)
                .subscribe(projeto => {
                  //this.projeto = projeto;

                  

                }); */
  }

  deletar(){
    this.service.deletar(this.projeto);
  }

  pesquisarCliente(){
   
    this.clienteService.consultar(this.cnpjPesquisa)
                       .subscribe(cliente => this.projeto.cliente = cliente);
    
  }

  adicionarCFPS(){
    console.log(this.cfpsSelecionado);
    this.projeto.cfps.push(this.cfpsSelecionado);
  }

  deletarCFPS(cfps){
    let index: number = this.projeto.cfps.indexOf(cfps);
    if (index !== -1) {
        this.projeto.cfps.splice(index, 1);
    }
  }

  uploadFile(event) {
    let files = event.target.files;
    if (files.length > 0) {
      console.log("file"); // You will see the file
      // this.service.uploadFile(file);
    }
  }

}
