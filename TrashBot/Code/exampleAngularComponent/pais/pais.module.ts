import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PaisRoutingModule} from './pais-routing.module';
import {PaisListComponent} from './pais-list/pais-list.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaisCreateComponent } from './pais-create/pais-create.component';

@NgModule({
      imports: [
          CommonModule,
          PaisRoutingModule,
          FormsModule,
          ReactiveFormsModule
      ],
      declarations: [PaisListComponent, PaisCreateComponent]
})
export class PaisModule {}
