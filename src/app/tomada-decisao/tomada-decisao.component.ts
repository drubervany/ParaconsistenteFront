import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../projeto/projeto.service';
import { MedicaoService } from '../contagem/medicao.service';
import { Medicao } from '../contagem/medicao.model';
import { CFPS } from '../login/cfps.model';
import { Projeto } from '../projeto/projeto.model';

@Component({
  selector: 'app-tomada-decisao',
  templateUrl: './tomada-decisao.component.html',
  styleUrls: ['./tomada-decisao.component.css']
})
export class TomadaDecisaoComponent implements OnInit {

  projetos: Projeto[];
  cfpsSelecionado: CFPS;
 
  
  constructor(private projetoService: ProjetoService,
              private medicaoService: MedicaoService) { }

  ngOnInit() {

    this.projetoService.consultarTodos().subscribe(projetos => {
      console.log("projetos", projetos);
      this.projetos = projetos});     
  }

  onChange(cfps: CFPS, projeto: Projeto) {
    console.log("onChange", cfps, projeto);
    this.medicaoService.consultarTotalPF(cfps).subscribe(medicaoCFPS => {
      console.log("medicaoCFPS", medicaoCFPS);
      this.cfpsSelecionado = medicaoCFPS;
      projeto.pontosFuncao = this.cfpsSelecionado.numeroPontos;
      projeto.cfpsSelecionado = this.cfpsSelecionado;
      projeto.status = "APROVADO";
    });
  }
}
