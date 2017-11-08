import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetoComponent } from './projeto/projeto.component';

const routes: Routes = [
    { path: 'projeto', component: ProjetoComponent },
    { path: '', pathMatch: 'full', redirectTo: 'projeto' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
