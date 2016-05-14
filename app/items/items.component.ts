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

	@Input() shop:string;
	@Input() shopTitle:string;

	private shopType = '';
	private title = 'ssss';

	ngOnInit() {
		this.shopType = this.shop;
		this.title = this.shopTitle;
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