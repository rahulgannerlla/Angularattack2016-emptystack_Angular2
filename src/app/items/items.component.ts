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

	_searchRequest: string = '';

	@Input() shop:string;
	@Input() shopTitle:string;
	@Input() query:string;

	@Input() set searchRequest( searchRequest: string) {
		console.log('Changed!!');
		this._searchRequest = searchRequest;
		if(this.componentInitialised){
			this.getItems(searchRequest, 1);
		}else{
			
		}
		
	};


	private shopType = '';
	private title = 'ssss';
	private pageNumber = 1;
	private componentInitialised = false;
	public ebayGlobalArray;

	errorMessage: string;

	ngOnInit() {
		this.shopType = this.shop;
		this.title = this.shopTitle;
		this.componentInitialised = true;
		this.ebayGlobalArray = [];
		this.getItems('ipod', 1);
	}


	constructor(private _apiService: ApiService, private _converter: Converter ) {
		
	}

	items:Item[];

	getValue(){
		this.componentInitialised = true;
		console.log(this.searchRequest);
	}

	public getItems(query:string, page:number){
		console.log("shoptype");
		console.log(query);
		this._apiService.getData(this.shopType, query, page)
			.subscribe(
				data =>
				{	if(this.shopType == 'walmart')
					 	this.items = this._converter.convert(this.shopType, data);
					 else{
						this.ebayGlobalArray = this._converter.convert(this.shopType, data);
						this.pageNumber = 1;
						var temp = this.pageNumber;
						this.items = this.ebayGlobalArray.slice(this.pageNumber,  temp+5);		
					 }	
				},
				error => console.log("ERROR"),
				() => console.log("DONE")
			);
			
	}

	getNextItems() {
		this.pageNumber += 5;
		if (this.shopType == 'walmart') {
			console.log("NEXT");
			this.getItems(this._searchRequest, this.pageNumber);
		} else {

			if (this.pageNumber < (this.ebayGlobalArray.length - 1)) {
				var temp = this.pageNumber + 5;
				this.items = this.ebayGlobalArray.slice(this.pageNumber, temp);
			}
		}
		
	}


	getPreviousItems() {
		this.pageNumber -= 5;
		if (this.shopType == 'walmart') {
			console.log("PREV");
			this.getItems(this._searchRequest, this.pageNumber);
		}else{
			if (this.pageNumber > 0) {
				var temp = this.pageNumber + 5;
				this.items = this.ebayGlobalArray.slice(this.pageNumber, temp);
			}
		}
	}

}