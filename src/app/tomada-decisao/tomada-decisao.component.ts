import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../projeto/projeto.service';

@Component({
  selector: 'app-tomada-decisao',
  templateUrl: './tomada-decisao.component.html',
  styleUrls: ['./tomada-decisao.component.css']
})
export class TomadaDecisaoComponent implements OnInit {

  projetos: any = []

  constructor(private projetoService: ProjetoService) { }

  ngOnInit() {

    this.projetoService.consultarTodos().subscribe(projetos => this.projetos = projetos);

  }

}
