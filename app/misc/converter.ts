import { Injectable } from '@angular/core';
import { Item } from '../items/item';

@Injectable()
export class Converter {
	/**
	 * Converts an API JSon to the Json format needed by the directive.
	 * @param {shop} the type of shop
	 */
	convert(shop:string, jsonObject:Object) {
		switch (shop) {
			case "walmart":
				console.log("YAY Walmart");
				return this.convert_walmart(jsonObject);
			default:
				return [];
		}
	}

	convert_walmart(jsonObject){
		var result = [];
		
		for (var i = 0; i < jsonObject.items.length; i++) {

			console.log(jsonObject.items[i]);
			result.push(
				{
					price: jsonObject.items[i]['salePrice'],
					description: jsonObject.items[i]['shortDescription'],
					image: jsonObject.items[i]['mediumImage'],
					productUrl: jsonObject.items[i]['productUrl']
				}
			);
		}

		return result;

	}
}