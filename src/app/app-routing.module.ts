import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { CompetitionDetailComponent } from './component/competition-detail/competition-detail.component';
import { AddCompetitionComponent } from './component/add-competition/add-competition.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/competition', pathMatch: 'full' },
      {
        path: 'competition',
        loadChildren: () => import('./competition/competition.module').then(m => m.CompetitionModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: 'competition-detail',
        component: CompetitionDetailComponent
      },
      {
        path: 'add-competition',
        component: AddCompetitionComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
