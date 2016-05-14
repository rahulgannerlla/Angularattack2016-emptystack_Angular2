import { Component } from '@angular/core';

@Component({
	selector:'search-history',
	templateUrl:'app/search_history/views/search_history.tmpl.html'
})

export class SearchHistoryComponent {
	public errormessage;

	changeListener($event): void {
		this.readThis($event.target);
	}

	readThis(inputValue: any): void {
		for (var i = 0; i < inputValue.files.length; i++) {
			this.getContentsOfFile(inputValue.files[i]);
		}
	}

	LoadWordCloud(): void {

	}

	getContentsOfFile(file): void {
		var myReader: FileReader = new FileReader();
		var content = '';
		myReader.readAsText(file, "UTF-8");
		myReader.onload = function(e) {
			if (document.getElementById("mycontent").innerHTML == '')
				document.getElementById("mycontent").innerHTML = myReader.result;
			else
				document.getElementById("mycontent").innerHTML = document.getElementById("mycontent").innerHTML + ',' + myReader.result;
		}
	}
}