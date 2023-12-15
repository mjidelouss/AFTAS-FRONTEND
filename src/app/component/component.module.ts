import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { FishComponent } from './fish/fish.component';
import { MemberComponent } from "./member/member.component";
import { HuntComponent } from './hunt/hunt.component';
import { LevelComponent } from './level/level.component';
import { RegisterCompetitionComponent } from './register-competition/register-competition.component';
import { CompetitionDetailComponent } from './competition-detail/competition-detail.component';
import { AddCompetitionComponent } from './add-competition/add-competition.component';
import { EditCompetitionComponent } from './edit-competition/edit-competition.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FishComponent,
    MemberComponent
  ],
  declarations: [
    HuntComponent,
    LevelComponent,
    RegisterCompetitionComponent,
    CompetitionDetailComponent,
    AddCompetitionComponent,
    EditCompetitionComponent,
  ],
})
export class ComponentsModule { }
