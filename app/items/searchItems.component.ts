import { Component } from '@angular/core';
import { ItemsComponent } from './items.component';

@Component({
	selector:'search-items',
	templateUrl:'app/items/views/search_items.tmpl.html',
	directives: [ItemsComponent]
})

export class SearchItemsComponent {

}