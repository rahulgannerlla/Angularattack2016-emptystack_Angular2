"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SearchHistoryComponent = (function () {
    function SearchHistoryComponent() {
    }
    SearchHistoryComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    SearchHistoryComponent.prototype.readThis = function (inputValue) {
        for (var i = 0; i < inputValue.files.length; i++) {
            this.getContentsOfFile(inputValue.files[i]);
        }
    };
    SearchHistoryComponent.prototype.LoadWordCloud = function () {
    };
    SearchHistoryComponent.prototype.getContentsOfFile = function (file) {
        var myReader = new FileReader();
        var content = '';
        myReader.readAsText(file, "UTF-8");
        myReader.onload = function (e) {
            if (document.getElementById("mycontent").innerHTML == '')
                document.getElementById("mycontent").innerHTML = myReader.result;
            else
                document.getElementById("mycontent").innerHTML = document.getElementById("mycontent").innerHTML + ',' + myReader.result;
        };
    };
    SearchHistoryComponent = __decorate([
        core_1.Component({
            selector: 'search-history',
            templateUrl: 'app/search_history/views/search_history.tmpl.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchHistoryComponent);
    return SearchHistoryComponent;
}());
exports.SearchHistoryComponent = SearchHistoryComponent;
//# sourceMappingURL=search_history.component.js.map