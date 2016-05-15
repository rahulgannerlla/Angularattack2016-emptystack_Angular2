import { Component, Input } from '@angular/core';
import {NgStyle} from '@angular/common';
import { Item } from './item';

@Component({
	selector:'item',
	templateUrl: 'app/items/views/item.tmpl.html',
	directives: [NgStyle],
	styleUrls:['app/items/styles/item.style.css']
})

export class ItemComponent {
	// imageUrl = 'http://lorempixel.com/400/200/sports/1';
	@Input() item: Item;
	

}