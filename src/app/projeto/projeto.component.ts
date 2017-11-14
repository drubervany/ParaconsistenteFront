import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileDropModule, UploadFile, UploadEvent } from 'ngx-file-drop/lib/ngx-drop';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  projeto: any = {};

  codigo = 1;
  
  cfpsSelecionado: any = {codigo: 1, nome: "Luiz", telefone: "9999-3333"};

  cfpsAtivos: any = [
                {codigo: 1, nome: "Luiz", telefone: "9999-3333"},
                {codigo: 2, nome: "Maria", telefone: "3333-9999"},
                {codigo: 3, nome: "Pedro", telefone: "3333-9999"}
              ];

  constructor() { }

  ngOnInit() {
    
    this.projeto = {
      codigo: this.codigo,
      nome: "",
      descricao: "",
      status: "Em Cadastro",
      gpBackup: {codigo: 1, descricao: "GP BackUp"},
      cliente: { 
                cnpj: "45.578.205/0001-97",
                nome: "Empresa Teste"
              },
      cfps: [
              {codigo: 1, nome: "Luiz", telefone: "9999-3333"},
              {codigo: 2, nome: "Maria", telefone: "3333-9999"},
              {codigo: 3, nome: "Pedro", telefone: "3333-9999"}
            ]
    }

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
    this.projeto = {};
    this.projeto.codigo = ++this.codigo;
    this.projeto.cliente = {};
    this.projeto.cfps = [];
  }

  pesquisar(){
    this.projeto.cliente = { 
                              cnpj: "45.578.205/0001-97",
                              nome: "Empresa Teste"
                            };
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
