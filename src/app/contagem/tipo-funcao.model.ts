import { Funcao } from "./funcao.model";

export class TipoFuncao {
    funcao: Funcao;
    tipo: any = {} ;
    qtdeDados: number = 0;
    qtdeRegistros: number = 0;
    incluido: boolean = false;

    private ali : any = {
        "1": 7,
        "2": 10,
        "3": 15
    }

    private aie : any = {
        "1": 5,
        "2": 7,
        "3": 10
    }

    private se : any = {
        "1": 4,
        "2": 5,
        "3": 7
    }

    private ee : any = {
        "1": 3,
        "2": 4,
        "3": 6
    }

    private ce : any = {
        "1": 3,
        "2": 4,
        "3": 6
    }

    private complexidade: any = [{
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
    }]

    get totalPonfoFuncao(): number{
        let valor = 0;
        this.complexidade.forEach(tipoRegistro => {
            if (this.qtdeRegistros >= tipoRegistro.inicio  && 
                this.qtdeRegistros <= tipoRegistro.fim){
                
                tipoRegistro.tipoDados.forEach(tipoDados => {
                    if (this.qtdeDados >= tipoDados.inicio  && 
                        this.qtdeDados <= tipoDados.fim){
                        
                        if (this.tipo.nome==="ALI"){
                            valor = this.ali[tipoDados.resultado];
                        }
                        if (this.tipo.nome==="AIE"){
                            valor = this.aie[tipoDados.resultado];
                        }
                        if (this.tipo.nome==="EE"){
                            valor = this.ee[tipoDados.resultado];
                        }
                        if (this.tipo.nome==="SE"){
                            valor = this.se[tipoDados.resultado];
                        }
                        if (this.tipo.nome==="CE"){
                            valor = this.ce[tipoDados.resultado];
                        }
                    }
                });
            }
        });
        return valor;  
    }
}
