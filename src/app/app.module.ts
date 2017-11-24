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
import { ContagemComponent } from './contagem/contagem.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetoComponent,
    TomadaDecisaoComponent,
    LoginComponent,
    ContagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    FileDropModule
  ],
  providers: [AuthService, 
              AuthGuard, 
              ProjetoService, 
              ClienteService,
              CfpsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
