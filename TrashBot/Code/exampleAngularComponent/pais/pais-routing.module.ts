import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaisCreateComponent} from './pais-create/pais-create.component';
import {PaisListComponent } from './pais-list/pais-list.component';

const routes: Routes = [
  {path: 'festivo', component: PaisListComponent},
  {path: 'pais/create', component: PaisCreateComponent},
  {path: 'pais/festivo-list', component: PaisListComponent}, //dd
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule {}
