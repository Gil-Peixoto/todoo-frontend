import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadAllComponent } from './component/read-all/read-all.component';
import { FinalizadosComponent } from './component/finalizados/finalizados.component';

const routes: Routes = [
  {
    path: '',
    component: ReadAllComponent
  },
  {
    path: 'finalizados',
    component: FinalizadosComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
