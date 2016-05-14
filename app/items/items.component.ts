import { Component, Input ,OnInit} from '@angular/core';
import { NgStyle } from '@angular/common';
import { Item } from './item';
import { ItemComponent } from './item.component';
import { ApiService } from '../misc/api.service';
import { Converter } from '../misc/converter';

@Component({
	selector:'items-list',
	templateUrl:'app/items/views/items.tmpl.html',
	directives: [ItemComponent],
	providers:[ApiService, Converter],
	styleUrls:['app/items/styles/items.style.css']
})

export class ItemsComponent implements OnInit{

	@Input()
	shop:string;

	private shopType = '';
	

	ngOnInit() {
		this.shopType = this.shop;
		this.getItems();
	}



	constructor(private _apiService: ApiService, private _converter: Converter ) {
		
	}

	items:Item[];

	getItems() {
		this._apiService.getResults('').then(
			items =>  {console.log();
					this.items = this._converter.convert('walmart', items);}
		);
	}

}