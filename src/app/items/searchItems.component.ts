import { Component } from '@angular/core';
import { ItemsComponent } from './items.component';

@Component({
	selector:'search-items',
	templateUrl:'app/items/views/search_items.tmpl.html',
	directives: [ItemsComponent],
	styleUrls:['app/items/styles/searchItems.style.css']
})

export class SearchItemsComponent {
	searchRequest: string = 'ipod';
	query: string = '';
	constructor() { }

	search(text:string) {
		this.query = text;
	}
}