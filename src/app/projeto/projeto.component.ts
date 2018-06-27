import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileDropModule, UploadFile, UploadEvent } from 'ngx-file-drop/lib/ngx-drop';
import { ProjetoService } from './projeto.service';
import { Projeto } from './projeto.model';
import { AuthService } from '../login/auth.service';
import { CFPS } from '../login/cfps.model';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  projeto: Projeto;
  cfps: CFPS;
  cnpjPesquisa: String;
  projetoSelecionado: Projeto;
  projetosAtivos: Projeto[] = new Array<Projeto>();

  constructor(private service: ProjetoService,
              private authService: AuthService) {
      
        this.cfps = authService.usuarioAutenticado.cfps;
        console.log(">>>CFPS: ", this.cfps);
    
  }

  ngOnInit() {
     this.novo();
     this.service.consultarTodos(this.cfps).subscribe(projetos => this.projetosAtivos = projetos);
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
     this.projeto.status = 'PENDENTE';
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
    this.service.salvar(this.projeto)
                .subscribe(projeto => {
                  this.ngOnInit();
                });
    
  }

  deletar(){
    this.service.deletar(this.projeto)
                .subscribe(projeto => {
                  this.ngOnInit();
                });
  }

  uploadFile(event) {
    let files = event.target.files;
    if (files.length > 0) {
      console.log("file"); // You will see the file
      // this.service.uploadFile(file);
    }
  }

}
