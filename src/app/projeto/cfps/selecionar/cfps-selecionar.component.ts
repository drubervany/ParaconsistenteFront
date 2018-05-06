import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CfpsService } from '../../../cfps/cfps.service';
import { CFPS } from '../../../login/cfps.model';
import { Projeto } from '../../projeto.model';

@Component({
  selector: 'cfps-selecionar',
  templateUrl: './cfps-selecionar.component.html',
  styleUrls: ['./cfps-selecionar.component.css']
})
export class CFPSSelecionarComponent implements OnInit {

  @Input() projeto: Projeto;

  cfpsSelecionado: CFPS;
  cfpsAtivos: CFPS[] = new Array<CFPS>();
  
  constructor(private cfpsService: CfpsService) { 
    
  }

  ngOnInit() {
    console.log("ClienteSelecionar", this.projeto);
    this.cfpsService.consultarTodos().subscribe(cfps => this.cfpsAtivos = cfps);
  }
  
  selecionar(){
    this.projeto.cfpss.push(this.cfpsSelecionado);
  }

  deletar(cfps){
    let index: number = this.projeto.cfpss.indexOf(cfps);
    if (index !== -1) {
        this.projeto.cfpss.splice(index, 1);
    }
  }
}
