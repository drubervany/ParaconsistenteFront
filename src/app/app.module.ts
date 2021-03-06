import { CfpsService } from './cfps/cfps.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileDropModule } from 'ngx-file-drop/lib/ngx-drop';
import { HttpModule } from '@angular/http';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { ProjetoComponent } from './projeto/projeto.component';
import { ProjetoService } from './projeto/projeto.service';
import { ClienteService } from './cliente/cliente.service';
import { TomadaDecisaoComponent } from './tomada-decisao/tomada-decisao.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { CadastroContagemComponent } from './contagem/cadastro/cadastro-contagem.component';
import { ContagemComponent } from './contagem/contagem.component';
import { ComplexidadeContagemComponent } from './contagem/complexidade/complexidade-contagem.component';
import { CFPSSelecionarComponent } from './projeto/cfps/selecionar/cfps-selecionar.component';
import { ClienteSelecionarComponent } from './projeto/cliente/selecionar/cliente-selecionar.component';
import { GerenteService } from './gerente/gerente.service';
import { GerenteSelecionarComponent } from './projeto/gerente/selecionar/gerente-selecionar.component';
import { MedicaoService } from './contagem/medicao.service';
import { FuncaoService } from './contagem/funcao.service';
import { FiltroPesquisaComponent } from './filtro-pesquisa/filtro-pesquisa.component';
import { ProjetoSelecionarComponent } from './projeto/selecionar/projeto-selecionar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetoComponent,
    CFPSSelecionarComponent,
    ClienteSelecionarComponent,
    GerenteSelecionarComponent,
    TomadaDecisaoComponent,
    LoginComponent,
    CadastroContagemComponent,
    ComplexidadeContagemComponent,
    FiltroPesquisaComponent,
    ProjetoSelecionarComponent,
    ContagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    FileDropModule,
    SweetAlert2Module.forRoot({
        buttonsStyling: false,
        customClass: 'modal-content',
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn'
    })
  ],
  providers: [AuthService, 
              AuthGuard, 
              ProjetoService, 
              ClienteService,
              CfpsService,
              GerenteService,
              MedicaoService,
              FuncaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
