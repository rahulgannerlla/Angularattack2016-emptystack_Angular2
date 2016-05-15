import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService {
	public reply;
	constructor(private jsonp: Jsonp) { }

	getData() {
//?apiKey=kqumn8wgq6xp95kr6hy2q44q&query=ipod&numItems=5';

		let walmart = 'http://api.walmartlabs.com/v1/search';
		var params = new URLSearchParams();
		params.set('apiKey', 'kqumn8wgq6xp95kr6hy2q44q');
		params.set('query', 'laptop');
		params.set('numItems', '5');
		params.set('format', 'json');
		params.set('callback', 'JSONP_CALLBACK');
		// TODO: Add error handling
		return this.jsonp
			.get(walmart, { search: params })
			.map(request => request.json());
	}

	// public url: string = 'http://api.walmartlabs.com/v1/search?apiKey=kqumn8wgq6xp95kr6hy2q44q&query=ipod&numItems=5';
	// public url: string = 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=AlainLic-emptysta-PRD-02f839347-58647d3e&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=harry%20potter&paginationInput.entriesPerPage=5';

}