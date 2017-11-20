import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileDropModule, UploadFile, UploadEvent } from 'ngx-file-drop/lib/ngx-drop';
import { ProjetoService } from './projeto.service';
import { ClienteService } from '../cliente/cliente.service';
import { CfpsService } from '../cfps/cfps.service';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  projeto: any = {};

  cfpsSelecionado: any = {};

  cfpsAtivos: any = [];

  constructor(private service: ProjetoService,
              private clienteService: ClienteService,
              private cfpsService: CfpsService) { 

  }

  ngOnInit() {
  
     this.novo();
     this.cfpsService.consultarTodos().subscribe(cfps => this.cfpsAtivos = cfps);
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
     this.projeto = {
      id: null,
      nome: "",
      descricao: "",
      status: "CRIADO",
      gpBackup: {codigo: "" , descricao: ""},
      cliente: { 
                cnpj: "",
                nome: ""
              },
      cfps: []
    } 
  }

  pesquisar(){
    this.service.consultar("1")
                .subscribe(projeto => {
                  console.log(projeto);
                  this.projeto = projeto;
                });
  }

  salvar(){
    console.log(JSON.stringify(this.projeto));
    this.service.salvar(this.projeto)
                .subscribe(projeto => {
                  console.log(projeto);
                  this.projeto = projeto;
                });
  }

  deletar(){
    this.service.deletar(this.projeto);
  }

  pesquisarCliente(){
   
    this.clienteService.consultar(this.projeto.cliente.cnpj)
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
