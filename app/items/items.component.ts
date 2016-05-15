import { Component, Input ,OnInit} from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { NgStyle } from '@angular/common';
import { Item } from './item';
import { ItemComponent } from './item.component';
import { ApiService } from '../misc/api.service';
import { Converter } from '../misc/converter';

@Component({
	selector:'items-list',
	templateUrl:'app/items/views/items.tmpl.html',
	directives: [ItemComponent],
	providers:[JSONP_PROVIDERS,ApiService, Converter],
	styleUrls:['app/items/styles/items.style.css']
})

export class ItemsComponent implements OnInit{

	@Input() shop:string;
	@Input() shopTitle:string;

	private shopType = '';
	private title = 'ssss';
	errorMessage: string;
	ngOnInit() {
		this.shopType = this.shop;
		this.title = this.shopTitle;

		this.getItems();
	}



	constructor(private _apiService: ApiService, private _converter: Converter ) {
		
	}

	items:Item[];

	// getItems() {
	// 	this._apiService.getResults('')
	// 					.subscribe(
	// 						items =>	{	
	// 										console.log();
	// 										this.items = this._converter.convert('walmart', items);
	// 									},
	// 						error => 	this.errorMessage = <any>error
	// 					);
	// }

	getItems(){
		this._apiService.getData()
			.subscribe(
				data =>
				{	
					// console.log("ITEMS");
					 console.log(data);
					 this.items = this._converter.convert('walmart', data);
				
				},
				error => console.log("ERROR"),
				() => console.log("DONE")
			);
			
	}

}