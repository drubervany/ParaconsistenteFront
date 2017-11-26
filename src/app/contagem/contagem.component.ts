import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contagem',
  templateUrl: './contagem.component.html',
  styleUrls: ['./contagem.component.css']
})
export class ContagemComponent implements OnInit {

  ali: any = {};
  aie: any = {};
  ee: any = {};
  se: any = {};
  ce: any = {};

  constructor() { }

  ngOnInit() {

    this.limpar();

  }

  get aliBaixaTotal(){
   
    this.ali.baixa.total = this.ali.baixa.ponto * this.ali.baixa.qtde;

    return this.ali.baixa.total;
  }

  get aliMediaTotal(){
    
    this.ali.media.total = this.ali.media.ponto * this.ali.media.qtde;

    return this.ali.media.total;
  }

  get aliAltaTotal(){
  
    this.ali.alta.total = this.ali.alta.ponto * this.ali.alta.qtde;

    return this.ali.alta.total;
  }

  get aieBaixaTotal(){
  
    this.aie.baixa.total = this.aie.baixa.ponto * this.aie.baixa.qtde;

    return this.aie.baixa.total;
  }
 
  get aieMediaTotal(){
    
    this.aie.media.total = this.aie.media.ponto * this.aie.media.qtde;

    return this.aie.media.total;
  }
 
  get aieAltaTotal(){
    
    this.aie.alta.total = this.aie.alta.ponto * this.aie.alta.qtde;

    return this.aie.alta.total;
  }

  get eeBaixaTotal(){
  
    this.ee.baixa.total = this.ee.baixa.ponto * this.ee.baixa.qtde;

    return this.ee.baixa.total;
  }
   
  get eeMediaTotal(){
    
    this.ee.media.total = this.ee.media.ponto * this.ee.media.qtde;

    return this.ee.media.total;
  }
   
  get eeAltaTotal(){
    
    this.ee.alta.total = this.ee.alta.ponto * this.ee.alta.qtde;

    return this.ee.alta.total;
  }

  get seBaixaTotal(){
  
    this.se.baixa.total = this.se.baixa.ponto * this.se.baixa.qtde;

    return this.se.baixa.total;
  }
     
  get seMediaTotal(){
    
    this.se.media.total = this.se.media.ponto * this.se.media.qtde;

    return this.se.media.total;
  }
     
  get seAltaTotal(){
    
    this.se.alta.total = this.se.alta.ponto * this.se.alta.qtde;

    return this.se.alta.total;
  }

  get ceBaixaTotal(){
    
    this.ce.baixa.total = this.ce.baixa.ponto * this.ce.baixa.qtde;

    return this.ce.baixa.total;
  }
       
  get ceMediaTotal(){
    
    this.ce.media.total = this.ce.media.ponto * this.ce.media.qtde;

    return this.ce.media.total;
  }
       
  get ceAltaTotal(){
    
    this.ce.alta.total = this.ce.alta.ponto * this.ce.alta.qtde;

    return this.ce.alta.total;
  }

  get total(): number{

    let ali: number = this.ali.baixa.total +
            this.ali.media.total +
            this.ali.alta.total;
            this.ali.total = ali;

    let aie: number = this.aie.baixa.total +
            this.aie.media.total +
            this.aie.alta.total;
            this.aie.total = aie;

    let ee: number = this.ee.baixa.total +
            this.ee.media.total +
            this.ee.alta.total;
            this.ee.total = ee;

    let se: number = this.se.baixa.total +
            this.se.media.total +
            this.se.alta.total;
            this.se.total = se;

    let ce: number = this.ce.baixa.total +
            this.ce.media.total +
            this.ce.alta.total;
            this.ce.total = ce;

    return ali+aie+ee+se+ce;

  }

  salvar(){
    console.log("Salvar");
  }

  deletar(){
    console.log("deletar");
  }

  limpar(){
    this.ali = { total: 0,
                baixa: { qtde: 0,
                        ponto: 7,
                        total: 0
                      },
                media: { qtde: 0,
                  ponto: 10,
                  total: 0
                },
                alta: { qtde: 0,
                  ponto: 15,
                  total: 0
                }
              };
    this.aie = { total: 0,
            baixa: { qtde: 0,
                    ponto: 5,
                    total: 0
                  },
            media: { qtde: 0,
              ponto: 7,
              total: 0
            },
            alta: { qtde: 0,
              ponto: 10,
              total: 0
            }
          };
    this.ee = { total: 0,
          baixa: { qtde: 0,
                  ponto: 3,
                  total: 0
                },
          media: { qtde: 0,
            ponto: 4,
            total: 0
          },
          alta: { qtde: 0,
            ponto: 6,
            total: 0
          }
        };
    this.se = { total: 0,
          baixa: { qtde: 0,
                  ponto: 4,
                  total: 0
                },
          media: { qtde: 0,
            ponto: 5,
            total: 0
          },
          alta: { qtde: 0,
            ponto: 7,
            total: 0
          }
        };
    this.ce= { total: 0,
          baixa: { qtde: 0,
                  ponto: 3,
                  total: 0
                },
          media: { qtde: 0,
            ponto: 4,
            total: 0
          },
          alta: { qtde: 0,
            ponto: 6,
            total: 0
          }
        };
  }
}

