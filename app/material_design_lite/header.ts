import { Component } from '@angular/core';


import {MDL} from './materialDesignLite';


@Component({
	selector: 'header',
	directives: [MDL],
	templateUrl: 'app/material_design_lite/views/header.tmpl.html',
	
	styleUrls: ['app/material_design_lite/styles/header_style.css']
})


export class Header {

}
