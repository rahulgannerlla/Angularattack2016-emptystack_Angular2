import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { SearchItemsComponent } from './items/searchItems.component';
import { SearchHistoryComponent } from './search_history/search_history.component';
import { AboutComponent } from './about/about.component';

@Component({
  moduleId: module.id,
  selector: 'empty-stack-app',
  templateUrl: './views/empty-stack.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers:[ROUTER_PROVIDERS]
})

@RouteConfig([
	{
		path: '/',
		name: 'Search_Items',
		component: SearchItemsComponent,
		useAsDefault: true
	},
	{
		path: '/search',
		name: 'Search',
		component: SearchHistoryComponent
	},
	{
		path: '/about',
		name: 'About',
		component: AboutComponent
	}
])
export class EmptyStackAppComponent { 
	title:'Hello';
}
