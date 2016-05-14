import { Component } from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
	selector:'items-list',
	templateUrl:'app/items/views/items.tmpl.html',
	directives: [NgStyle],
	styleUrls:['app/items/styles/items.style.css']
})

export class ItemsComponent {
	imageUrl ='http://lorempixel.com/400/200/sports/1';
}