import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  questoes = [{  
    "titulo":"Hábitos",
    "perguntas":[  
       {  
          "questao":"Atualmente, você considera sua qualidade de vida",
          "tipo":"Alternativa",
          "respostas":[  
             {  
                "codigo":"1",
                "descricao":"Excelente"
             },
             {  
                "codigo":"1",
                "descricao":"Boa"
             },
             {  
                "codigo":"1",
                "descricao":"Regular"
             },
             {  
                "codigo":"1",
                "descricao":"Ruim"
             },
             {  
                "codigo":"1",
                "descricao":"Muito Ruim"
             },
             {  
                "codigo":"1",
                "descricao":"Outro (especifique)"
             }
          ]
       },
       {  
          "questao":"Quantos dias por semana você costuma consumir frutas (naturais ou desidratadas) ou sucos naturais (direto da fruta ou polpa congelada)?",
          "tipo":"Alternativa",
          "respostas":[  
             {  
                "codigo":"1",
                "descricao":"1 a 2 dias por semana"
             },
             {  
                "codigo":"1",
                "descricao":"3 a 4 dias por semana"
             },
             {  
                "codigo":"1",
                "descricao":"5 a 6 dias por semana"
             },
             {  
                "codigo":"1",
                "descricao":"Raramente ou nunca"
             },
             {  
                "codigo":"1",
                "descricao":"Todos os dias (inclusive sábado e domingo)"
             },
             {  
                "codigo":"1",
                "descricao":"Não informado"
             }
          ]
       }
    ]
 }]
  
  questionario: any = [];
  pergunta: any = [];
 
  exibirForm = false;

  constructor() { }

  ngOnInit() {

    this.questionario = this.questoes[0];
    console.log(this.questionario);
    this.pergunta = this.questionario.perguntas[0];
    console.log(this.pergunta);
    

  }

  proxima(){
    console.log("Proxima...");
    this.exibirForm = !this.exibirForm;

    this.questionario = this.questoes[0];
    console.log(this.questionario);
    this.pergunta = this.questionario.perguntas[1];
    console.log(this.pergunta);
  }

  anterior(){
    console.log("Anterior...");
    this.exibirForm = !this.exibirForm;

    this.questionario = this.questoes[0];
    console.log(this.questionario);
    this.pergunta = this.questionario.perguntas[0];
    console.log(this.pergunta);
  }



}
