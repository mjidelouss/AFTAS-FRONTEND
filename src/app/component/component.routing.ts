import { Routes } from '@angular/router';
import { FishComponent } from './fish/fish.component';
import { MemberComponent } from './member/member.component';
import { HuntComponent } from './hunt/hunt.component';
import { PodiumComponent } from './podium/podium.component';


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
		]
	}
];
