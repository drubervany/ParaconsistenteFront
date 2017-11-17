import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard'
import { LoginComponent } from './login/login.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { tomadaDecisaoComponent } from './tomada-decisao/tomada-decisao.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'projeto', component: ProjetoComponent, canActivate: [AuthGuard] },
    { path: 'tomada-decisao', component: tomadaDecisaoComponent, canActivate: [AuthGuard] },
    { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
