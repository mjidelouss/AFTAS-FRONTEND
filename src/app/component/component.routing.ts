import { Routes } from '@angular/router';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'table',
				component: TableComponent
			},
			{
				path: 'card',
				component: CardsComponent
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent
			},
		]
	}
];
