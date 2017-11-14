import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetoComponent } from './projeto/projeto.component';

import { HttpModule } from '@angular/http';
import { FileDropModule } from 'ngx-file-drop/lib/ngx-drop';

@NgModule({
  declarations: [
    AppComponent,
    ProjetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    FileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
