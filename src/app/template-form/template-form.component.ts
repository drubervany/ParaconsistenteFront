import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {


  minutos = [
    {descricao : "10 Minutos"},
    {descricao : "15 Minutos"},
    {descricao : "20 Minutos"},
    {descricao : "25 Minutos"},
    {descricao : "30 Minutos"},
    {descricao : "35 Minutos"},
    {descricao : "40 Minutos"},
    {descricao : "45 Minutos"},
    {descricao : "50 Minutos"},
    {descricao : "55 Minutos"},
    {descricao : "60 Minutos"},
    {descricao : "65 Minutos"},
    {descricao : "70 Minutos"},
    {descricao : "75 Minutos"},
    {descricao : "80 Minutos"},
    {descricao : "85 Minutos"},
    {descricao : "90 Minutos"},
    {descricao : "95 Minutos"},
    {descricao : "100 Minutos"},
    {descricao : "105 Minutos"},
    {descricao : "110 Minutos"},
    {descricao : "115 Minutos"},
    {descricao : "120 Minutos"},
    {descricao : "125 Minutos"},
    {descricao : "130 Minutos"},
    {descricao : "135 Minutos"},
    {descricao : "140 Minutos"}    
  ] 

  imcAvaliacao: String[] = [
    "Baixo Peso",	"Eutrófico",	"Sobrepeso	Obesidade Grau I",	"Obesidade Grau II",	"Obesidade Grau III	(Caso seja gestante não se aplica esta pergunta)"
  ]

  problemasTrabalho : String[] = [
    "Dificuldades na relação com a chefia",
    "Excesso ou acúmulo de atividades sob minha responsabilidade",
    "Conflito de papéis/funções",
    "Problemas com equipamentos/falta de materiais",
    "Tarefas muito complicadas/falta de treinamento",
    "Prazos curtos para cumprimento das tarefas",
    "Longas jornadas de trabalho",
    "Falta de infraestrutura adequada",
    "Dificuldades na relação com os colegas (pares e subordinados)",
    "Falta de perspectiva de crescimento profissional",
    "Problemas com o turno / horários de trabalho",
    "Trabalhar aos finais de semana",
    "Sistema informatizado não funciona direito / não atende minha necessidade",
    "Meu trabalho é muito perigoso / equipamentos de segurança ineficazes ou insuficientes",
    "Outro (especifique)"
    
  ]

  

  constructor() { }

  ngOnInit() {
  }

}
