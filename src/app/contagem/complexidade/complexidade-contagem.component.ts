import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Funcao } from '../funcao.model';
import { Medicao } from '../medicao.model';
import { MedicaoService } from '../medicao.service';
import { NgTemplateOutlet } from '@angular/common';
import { CFPS } from '../../login/cfps.model';
import { Projeto } from '../../projeto/projeto.model';
import { CfpsService } from '../../cfps/cfps.service';
import { ProjetoService } from '../../projeto/projeto.service';

@Component({
  selector: 'complexidade-contagem',
  templateUrl: './complexidade-contagem.component.html',
  styleUrls: ['./complexidade-contagem.component.css']
})
export class ComplexidadeContagemComponent implements OnInit {

  @Input() funcoes: Funcao[];
  @Input() projeto: Projeto;
  @Input() cfps: CFPS;
  @Input() tiposFuncoes: Medicao[];
  @Input() tipoFuncao: Medicao;

  @Output() medicao = new EventEmitter();

  tiposFuncao: any = [
    {"codigo": 1, "nome":"ALI", "descricao":"" },
    {"codigo": 2, "nome":"AIE", "descricao":"" },
    {"codigo": 3, "nome":"EE", "descricao":"" },
    {"codigo": 4, "nome":"SE", "descricao":"" },
    {"codigo": 5, "nome":"CE", "descricao":"" }
  ];
    
  constructor(public medicaoService: MedicaoService) {}

  ngOnInit() {
    //this.projeto.status = "CONTAGEM";
  }

  adicionar(){
    this.tipoFuncao.totalPonfoFuncao = this.totalPonfoFuncao;
    this.tipoFuncao.cfps = this.cfps;
    this.tipoFuncao.projeto = this.projeto;
    this.medicaoService.salvar(this.tipoFuncao)
                      .subscribe(tipoFuncao => {
                        console.log("tipoFuncao", tipoFuncao)
                        let uri = tipoFuncao.headers.get('Location');
                        console.log("uri", uri);
                        this.medicaoService.consultarLocation(uri).subscribe(tipoFuncao => {
                          console.log("retornou objeto", tipoFuncao);
                          this.medicao.emit(this.tipoFuncao);
                        });
                      });
  }

  deletar(tipoFuncao: Medicao){
    let index: number = this.tiposFuncoes.indexOf(tipoFuncao);
    if (index !== -1) {
      this.medicaoService.deletar(tipoFuncao)
                         .subscribe(projeto => {
                                                this.tiposFuncoes.splice(index, 1);
      });
    }else{
      this.ngOnInit();
    }
  }

  get totalPonfoFuncao() : number{
    let ali : any = {
        "1": 7,
        "2": 10,
        "3": 15
    }

    let aie : any = {
        "1": 5,
        "2": 7,
        "3": 10
    }

    let se : any = {
        "1": 4,
        "2": 5,
        "3": 7
    }

    let ee : any = {
        "1": 3,
        "2": 4,
        "3": 6
    }

    let ce : any = {
        "1": 3,
        "2": 4,
        "3": 6
    }

    let complexidade: any = [{
        inicio: 1,
        fim: 1,
        tipoDados: [{
            inicio: 1,
            fim: 19,
            resultado: "1"
        },{
            inicio: 20,
            fim: 50,
            resultado: "1"
        },{
            inicio: 51,
            fim: 999,
            resultado: "2"
        }]
    },{
        inicio: 2,
        fim: 5,
        tipoDados: [{
            inicio: 1,
            fim: 19,
            resultado: "1"
        },{
            inicio: 20,
            fim: 50,
            resultado: "2"
        },{
            inicio: 51,
            fim: 999,
            resultado: "3"
        }]
    },{
        inicio: 6,
        fim: 999,
        tipoDados: [{
            inicio: 1,
            fim: 19,
            resultado: "2"
        },{
            inicio: 20,
            fim: 50,
            resultado: "3"
        },{
            inicio: 51,
            fim: 999,
            resultado: "3"
        }]
    }];

    console.log("total funcao", this.tipoFuncao);
    let valor = 0;
    complexidade.forEach(tipoRegistro => {
        if (this.tipoFuncao.qtdeRegistros >= tipoRegistro.inicio  && 
            this.tipoFuncao.qtdeRegistros <= tipoRegistro.fim){
            
            tipoRegistro.tipoDados.forEach(tipoDados => {
                if (this.tipoFuncao.qtdeDados >= tipoDados.inicio  && 
                    this.tipoFuncao.qtdeDados <= tipoDados.fim){
                    
                    if (this.tipoFuncao.tipo==="ALI"){
                        valor = ali[tipoDados.resultado];
                    } else
                    if (this.tipoFuncao.tipo==="AIE"){
                        valor = aie[tipoDados.resultado];
                    } else
                    if (this.tipoFuncao.tipo==="EE"){
                        valor = ee[tipoDados.resultado];
                    } else
                    if (this.tipoFuncao.tipo==="SE"){
                        valor = se[tipoDados.resultado];
                    } else
                    if (this.tipoFuncao.tipo==="CE"){
                        valor = ce[tipoDados.resultado];
                    }
                }
            });
        }
    });
    return valor;  
  }
}

