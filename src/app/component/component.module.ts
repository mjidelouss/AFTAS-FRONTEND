import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from "./table/table.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbdDropdownBasicComponent,
    CardsComponent,
    TableComponent
  ],
  declarations: [

  ],
})
export class ComponentsModule { }
