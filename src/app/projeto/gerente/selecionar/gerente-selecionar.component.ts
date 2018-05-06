import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Projeto } from '../../projeto.model';
import { GerenteService } from '../../../gerente/gerente.service';
import { Gerente } from '../../../login/gerente.model';

@Component({
  selector: 'gerente-selecionar',
  templateUrl: './gerente-selecionar.component.html',
  styleUrls: ['./gerente-selecionar.component.css']
})
export class GerenteSelecionarComponent implements OnInit {

  @Input() projeto: Projeto;

  gerentesAtivos: Gerente[] = new Array<Gerente>();

  constructor(private gerenteService: GerenteService) { 
  }

  ngOnInit() {
    console.log("this.projeto.gerente", this.projeto)
    this.gerenteService.consultarTodos()
                       .subscribe(gerentes => this.gerentesAtivos = gerentes);
  }
}
