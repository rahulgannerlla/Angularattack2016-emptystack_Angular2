import { Component } from '@angular/core';

@Component({
	selector:'search-history',
	templateUrl:'app/search_history/views/search_history.tmpl.html',
	styleUrls: ['app/search_history/styles/search_history.css']
})

export class SearchHistoryComponent {
	public errormessage; 
	public timerMessage="Once finished with upload, please wait for 4-5 seconds and then click Submit button";
	public termsCheck = false;
	public freqArray = [];

	agreeTerms():void{
		this.termsCheck = true;
	}

	openFileSystem():void{
		this.errormessage = '';
		document.getElementById("mycontent").innerHTML = '';
		setTimeout(function() {
			document.getElementById('filetype').click()
		}, 0);

	}

	changeListener($event): void {
		this.readThis($event.target);
	}

	readThis(inputValue: any): void {
		for (var i = 0; i < inputValue.files.length; i++) {
			this.getContentsOfFile(inputValue.files[i]);
		}
	}

	LoadWordCloud(): void {

		this.freqArray = [];

		var stopwordsHash = {
			"i": 1, "me": 1, "my": 1,
			"myself": 1, "we": 1, "us": 1,
			"our": 1, "ours": 1, "ourselves": 1,
			"you": 1, "your": 1, "yours": 1,
			"yourself": 1, "yourselves": 1, "he": 1,
			"him": 1, "his": 1, "himself": 1, "she": 1,
			"her": 1, "hers": 1, "herself": 1,
			"it": 1, "its": 1, "itself": 1,
			"they": 1, "them": 1, "their": 1,
			"theirs": 1, "themselves": 1, "what": 1,
			"which": 1, "who": 1, "whom": 1,
			"whose": 1, "this": 1, "that": 1,
			"these": 1, "those": 1, "am": 1,
			"is": 1, "are": 1, "was": 1,
			"were": 1, "be": 1, "been": 1,
			"being": 1, "have": 1, "has": 1,
			"had": 1, "having": 1, "do": 1,
			"does": 1, "did": 1, "doing": 1,
			"will": 1, "would": 1, "should": 1,
			"can": 1, "could": 1, "ought": 1,
			"i'm": 1, "you're": 1, "he's": 1,
			"she's": 1, "it's": 1, "we're": 1,
			"they're": 1, "i've": 1, "you've": 1,
			"a": 1, "an": 1, "the": 1,
			"and": 1, "but": 1, "if": 1,
			"or": 1, "because": 1, "as": 1,
			"until": 1, "while": 1, "of": 1,
			"at": 1, "by": 1, "for": 1,
			"with": 1, "about": 1, "against": 1,
			"between": 1, "into": 1, "through": 1,
			"during": 1, "before": 1, "after": 1,
			"above": 1, "below": 1, "to": 1,
			"from": 1, "up": 1, "upon": 1,
			"down": 1, "in": 1, "out": 1,
			"on": 1, "off": 1, "over": 1,
			"under": 1, "again": 1, "further": 1,
			"then": 1, "once": 1, "here": 1,
			"there": 1, "when": 1, "where": 1,
			"why": 1, "how": 1, "all": 1,
			"any": 1, "both": 1, "each": 1,
			"few": 1, "more": 1, "most": 1,
			"other": 1, "some": 1, "such": 1,
			"no": 1, "nor": 1, "not": 1,
			"only": 1, "own": 1, "same": 1,
			"so": 1, "than": 1, "too": 1,
			"very": 1, "say": 1, "says": 1,
			"said": 1, "shall": 1, "cannot": 1,
			" ": 1, "": 1, "-&gt;": 1,

		}

		var events = '[' + document.getElementById("mycontent").innerHTML + ']';
		try {
			events = events.replace(/<\/?[^>]+>/gi, '');
			var parsedJson = JSON.parse(events);
			var hash = {};
			var uniqueCount = 0;
			var repeatedCount = 0;

			for (var i = 0; i < parsedJson.length; i++) {
				for (var j = 0; j < parsedJson[i].event.length; j++) {
					var queryString = parsedJson[i].event[j].query["query_text"];
		
					//check special characters
					if (/^[a-zA-Z0-9- ]*$/.test(queryString) == true) {
						var queryArray = queryString.split(' ');
						for (var k = 0; k < queryArray.length; k++) {
							repeatedCount = repeatedCount + 1;
							var lowercase = queryArray[k].toLowerCase();

							//check stop words
							if (typeof stopwordsHash[lowercase] == 'undefined') {
								//check if the word exists and increase the count
								if (typeof hash[lowercase] == 'undefined') {
									hash[queryArray[k]] = 1;
									uniqueCount = uniqueCount + 1;
								}
								else
									hash[queryArray[k]] = hash[queryArray[k]] + 1;
							}
						}
					}
				}
			}
			// console.log("repeated count - " + repeatedCount);
			// console.log("unique count - " + uniqueCount);
			// console.log("Highest Frequency: ");

			//sorting code from stackoverflow (Copyrights: Nosredna)
			var sortable = [];
			for (var vehicle in hash)
				sortable.push([vehicle, hash[vehicle]])

			sortable.sort(function(a, b) { return a[1] - b[1] })

			for (var i = sortable.length - 1; i >= 0; i--) {
				if (sortable.length - 75 > 0){
					if (i >= sortable.length - 75) {
						this.freqArray.push(sortable[i]);
					}
					else
						break;
				}else
					this.freqArray.push(sortable[i]);
				
			}

			console.log(this.freqArray);

		}
		catch (e) {
			this.errormessage = "Error processing files. Please try again after few minutes.";
		}
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