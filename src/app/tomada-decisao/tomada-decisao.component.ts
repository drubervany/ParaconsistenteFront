import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../projeto/projeto.service';
import { CfpsService } from '../cfps/cfps.service';

@Component({
  selector: 'app-tomada-decisao',
  templateUrl: './tomada-decisao.component.html',
  styleUrls: ['./tomada-decisao.component.css']
})
export class TomadaDecisaoComponent implements OnInit {

  projetos: any = []

  cfpsSelecionado: any = {};

  cfpsAtivos: any = [];

  constructor(private projetoService: ProjetoService,
              private cfpsService: CfpsService) { }

  ngOnInit() {

    this.projetoService.consultarTodos().subscribe(projetos => this.projetos = projetos);
    this.cfpsService.consultarTodos().subscribe(cfps => this.cfpsAtivos = cfps);

  }

}
