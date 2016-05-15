import { Injectable } from '@angular/core';
import { ApiService } from '../misc/api.service';
import { Converter } from '../misc/converter';
import { Item } from './item';

@Injectable()

export class SearchItem {

	constructor(private _apiService: ApiService, private _converter: Converter) {}

	getItems(shop:string, query:string, page:number) {
		return new Promise<Item[]>(resolve =>
			this._apiService.getData(shop, query, page)
				.subscribe(
					data => {
						resolve(this._converter.convert(shop, data));
					},
					error => console.log("ERROR"),
					() => console.log("DONE")
				)
		);
	}
}