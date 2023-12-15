import { Routes } from '@angular/router';
import { FishComponent } from './fish/fish.component';
import { MemberComponent } from './member/member.component';
import { HuntComponent } from './hunt/hunt.component';
import { PodiumComponent } from './podium/podium.component';
import { LevelComponent } from './level/level.component';
import { RegisterCompetitionComponent } from './register-competition/register-competition.component';
import { CompetitionDetailComponent } from './competition-detail/competition-detail.component';
import { AddCompetitionComponent } from './add-competition/add-competition.component';
import { EditCompetitionComponent } from './edit-competition/edit-competition.component';

export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'podium',
				component: PodiumComponent
			},
			{
				path: 'member',
				component: MemberComponent
			},
			{
				path: 'hunt',
				component: HuntComponent
			},
			{
				path: 'fish',
				component: FishComponent
			},
			{
				path: 'level',
				component: LevelComponent
			},
			{
				path: 'register-competition',
				component: RegisterCompetitionComponent
			},
			{
				path: 'competition-detail',
				component: CompetitionDetailComponent
			},
			{
				path: 'add-competition',
				component: AddCompetitionComponent
			},
			{
				path: 'edit-competition',
				component: EditCompetitionComponent
			}
		]
	}
];
