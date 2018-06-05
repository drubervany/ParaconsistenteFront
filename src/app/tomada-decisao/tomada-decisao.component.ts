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

  cfpsSelecionado: CFPS;

  projetos: Projeto[];
  cfpss: CFPS[];
  cfps: CFPS;
  status: any;

  todosProjetos: Projeto[] = Array<Projeto>();
  
  constructor(private projetoService: ProjetoService,
              private medicaoService: MedicaoService) { }

  ngOnInit() {
    this.projetos = new Array<Projeto>();
  }

  atualizar(projeto: Projeto) {
    this.medicaoService.consultarTotalPF(projeto).subscribe(medicaoCFPS => {
      this.cfps = medicaoCFPS;
      console.log("cfps", this.cfps);
      projeto.pontosFuncao = this.cfps.numeroPontos;
      projeto.cfps = this.cfps;
      projeto.status = "APROVADO";
      this.projetoService.atualizar(projeto).subscribe(projetos => projetos);
    });
  }

  deletar(projeto: Projeto){
      projeto.pontosFuncao = 0;
      projeto.cfps = null;
      projeto.status = "REPROVADO";
      this.projetoService.atualizar(projeto).subscribe(projetos => projetos);
  }

  calcularIA(projeto: Projeto) {
    projeto.calculaIA = true;
    console.log("calcularIA", projeto);
    this.projetoService.calcularIA(projeto).subscribe(projetos => projetos);
  }

  carregaProjetos(projetos) {
    this.projetos = projetos;
  }
}
