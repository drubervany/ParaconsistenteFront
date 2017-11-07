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
       },
       {  
          "questao":"Você pratica alguma atividade física?",
          "tipo":"Binária",
          "respostas":[  
             {  
                "codigo":"S",
                "descricao":"Sim"
             },
             {  
                "codigo":"N",
                "descricao":"Não"
             }
          ]
       },
       {  
          "questao":"Atividade 1 - Qual Atividade física?",
          "tipo":"Seleção",
          "respostas":[  
             {  
                "codigo":"1",
                "descricao":"Alongamento"
             },
             {  
                "codigo":"2",
                "descricao":"Basquete"
             },
             {  
                "codigo":"3",
                "descricao":"Bicicleta ergométrica"
             },
             {  
                "codigo":"4",
                "descricao":"Bilhar"
             },
             {  
                "codigo":"5",
                "descricao":"Bodypump"
             },
             {  
                "codigo":"6",
                "descricao":"Boliche"
             },
             {  
                "codigo":"7",
                "descricao":"Boxe"
             },
             {  
                "codigo":"8",
                "descricao":"Caminhada intensa (com cargas em subidas -ritimo rápido)"
             },
             {  
                "codigo":"9",
                "descricao":"Caminhada leve (descarregando carros- andar em casa-plano)"
             },
             {  
                "codigo":"10",
                "descricao":"Caminhada moderada (trilhas -caminhada como exercicio)"
             },
             {  
                "codigo":"11",
                "descricao":"capoeira"
             },
             {  
                "codigo":"12",
                "descricao":"Cicilismo (como laser -lento-esforço leve)"
             },
             {  
                "codigo":"13",
                "descricao":"Ciclismo (como lazer ou esforço moderado)"
             },
             {  
                "codigo":"14",
                "descricao":"Ciclismo (corrida -rápido -esforço, vigoroso)"
             },
             {  
                "codigo":"15",
                "descricao":"Correr"
             },
             {  
                "codigo":"16",
                "descricao":"Dança de salão( rítimo musical agitado)"
             },
             {  
                "codigo":"17",
                "descricao":"Dança de salão( rítimo musical lento)"
             },
             {  
                "codigo":"18",
                "descricao":"Dançar"
             },
             {  
                "codigo":"19",
                "descricao":"Escalar(rocha/rapel)"
             },
             {  
                "codigo":"20",
                "descricao":"Esteira"
             },
             {  
                "codigo":"21",
                "descricao":"Fresbe"
             },
             {  
                "codigo":"22",
                "descricao":"Futebol"
             },
             {  
                "codigo":"23",
                "descricao":"Golfe"
             },
             {  
                "codigo":"24",
                "descricao":"Hidroginástica"
             },
             {  
                "codigo":"25",
                "descricao":"Jumpo"
             },
             {  
                "codigo":"26",
                "descricao":"Lutas"
             },
             {  
                "codigo":"27",
                "descricao":"Musculação"
             },
             {  
                "codigo":"28",
                "descricao":"Natação"
             },
             {  
                "codigo":"29",
                "descricao":"Patinação"
             },
             {  
                "codigo":"30",
                "descricao":"Pesca"
             },
             {  
                "codigo":"31",
                "descricao":"Pilates"
             },
             {  
                "codigo":"32",
                "descricao":"Rugby"
             },
             {  
                "codigo":"33",
                "descricao":"Skate"
             },
             {  
                "codigo":"34",
                "descricao":"Step"
             },
             {  
                "codigo":"35",
                "descricao":"Tai Chi Chuan"
             },
             {  
                "codigo":"36",
                "descricao":"Tênis"
             },
             {  
                "codigo":"37",
                "descricao":"Tênis em dupla"
             },
             {  
                "codigo":"38",
                "descricao":"Transport"
             },
             {  
                "codigo":"39",
                "descricao":"Volei"
             },
             {  
                "codigo":"40",
                "descricao":"Yoga/Hatha"
             }
          ]
       }
    ]
 }]
  
  questionario: any = [];
  pergunta: any = [];
 
  exibirForm = false;
  proximaPergunta = 0;

  constructor() { }

  ngOnInit() {

    this.questionario = this.questoes[0];
    console.log(this.questionario);
    this.pergunta = this.questionario.perguntas[this.proximaPergunta];
    console.log(this.pergunta);
    

  }

  proxima(){
    console.log("Proxima...");
    this.exibirForm = !this.exibirForm;

    this.questionario = this.questoes[0];
    console.log(this.questionario);
    this.pergunta = this.questionario.perguntas[++this.proximaPergunta];
    console.log(this.pergunta);
  }

  anterior(){
    console.log("Anterior...");
    this.exibirForm = !this.exibirForm;

    this.questionario = this.questoes[0];
    console.log(this.questionario);
    this.pergunta = this.questionario.perguntas[--this.proximaPergunta];
    console.log(this.pergunta);
  }



}
