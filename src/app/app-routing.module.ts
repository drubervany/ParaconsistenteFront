import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard'
import { LoginComponent } from './login/login.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { TomadaDecisaoComponent } from './tomada-decisao/tomada-decisao.component';
import { CadastroContagemComponent } from './contagem/cadastro/cadastro-contagem.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'projeto', component: ProjetoComponent, canActivate: [AuthGuard] },
    { path: 'tomada-decisao', component: TomadaDecisaoComponent, canActivate: [AuthGuard] },
    { path: 'cadastro-contagem', component: CadastroContagemComponent, canActivate: [AuthGuard] },
    { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
