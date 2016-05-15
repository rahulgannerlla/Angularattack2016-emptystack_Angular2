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
				return this.convert_walmart(jsonObject);
			case "ebay":
				return this.convert_ebay(jsonObject);
			default:
				return [];
		}
	}



	convert_walmart(jsonObject){
		var result = [];
		
		for (var i = 0; i < jsonObject.items.length; i++) {

			result.push(
				{
					price: jsonObject.items[i]['salePrice'],
					description: jsonObject.items[i]['name'],
					image: jsonObject.items[i]['mediumImage'],
					productUrl: jsonObject.items[i]['productUrl']
				}
			);
		}

		return result;
	}


	convert_ebay(jsonObject){

		jsonObject = jsonObject['findItemsByKeywordsResponse'][0]['searchResult'][0];

		var result = [];

		for (var i = 0; i < jsonObject.item.length; i++) {

			result.push(
				{
					price: jsonObject.item[i]['sellingStatus'][0]['currentPrice'][0]["@currencyId"] + ' ' + jsonObject.item[0]['sellingStatus'][0]['currentPrice'][0]["__value__"],
					description: jsonObject.item[i]['title'][0],
					image: jsonObject.item[i]['galleryURL'][0],
					productUrl: jsonObject.item[i]['viewItemURL'][0]
				}
			);
		}

		return result;
	}
}