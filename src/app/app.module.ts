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
import { tomadaDecisaoComponent } from './tomada-decisao/tomada-decisao.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetoComponent,
    tomadaDecisaoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    FileDropModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
