import { Component } from '@angular/core';
import { Header } from './header';
@Component({
	selector: 'emptystack-app',
	template: `
	<header></header>
	<h3> Empty Stack app</h3>`,
	directives: [Header]
})
export class AppComponent { }