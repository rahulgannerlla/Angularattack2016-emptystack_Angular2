import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
// import { Header } from './material_design_lite/header';
import { SearchItemsComponent } from './items/searchItems.component';
import { SearchHistoryComponent } from './search_history/search_history.component';

@Component({
	selector: 'emptystack-app',
	templateUrl:'app/views/app.view.html',
	directives: [ROUTER_DIRECTIVES],
	providers:[
		ROUTER_PROVIDERS
	]
})

@RouteConfig([
	{
		path:'/search_items',
		name:'Search_Items',
		component: SearchItemsComponent,
		useAsDefault:true
	},
	{
		path:'/search',
		name:'Search',
		component: SearchHistoryComponent
	}
])
export class AppComponent { }