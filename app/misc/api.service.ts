import { Component, Injectable } from '@angular/core';
import { ITEMS } from '../misc/mock-items';

@Injectable()
export class ApiService {
	getResults( url: string) {
		return Promise.resolve(ITEMS);
	}
}