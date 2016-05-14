import { Component } from '@angular/core';
import {MDL} from './materialDesignLite';

@Component({
	selector: 'header',
	directives: [MDL],
	template: `
		<header mdl class="mdl-layout__header">
	      <div class="mdl-layout__header-row">
	          <span class="mdl-layout-title">Home</span>
	      
	  
	          <div class="mdl-layout-spacer"></div>
	      </div>
	  </header>
	`
})

export class Header {

}
