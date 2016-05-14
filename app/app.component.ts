import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Header } from './material_design_lite/header';
import { ItemsComponent } from './items/items.component';
import { SearchHistoryComponent } from './search_history/search_history.component';

@Component({
	selector: 'emptystack-app',
	templateUrl:'app/views/app.view.html',
	directives: [Header,ROUTER_DIRECTIVES ],
	providers:[
		ROUTER_PROVIDERS
	]
})

@RouteConfig([
		{
			path: '/items',
			name: 'Items',
			component: ItemsComponent,
			useAsDefault: true
		},
	// },
	{
		path:'/search',
		name:'Search',
		component: SearchHistoryComponent
	}
])
export class AppComponent { }