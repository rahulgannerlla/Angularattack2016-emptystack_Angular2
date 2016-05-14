import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {MDL} from './materialDesignLite';


@Component({
	selector: 'header',
	directives: [MDL, ROUTER_DIRECTIVES],
	templateUrl: 'app/material_design_lite/views/header.tmpl.html',
	
	providers: [
		ROUTER_PROVIDERS
	],
	styleUrls: ['app/material_design_lite/styles/header_style.css']
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
		path: '/search',
		name: 'Search',
		component: SearchHistoryComponent
	}
])

export class Header {

}
