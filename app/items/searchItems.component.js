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
var items_component_1 = require('./items.component');
var SearchItemsComponent = (function () {
    function SearchItemsComponent() {
        this.searchWord = 'Hello There';
    }
    SearchItemsComponent.prototype.search = function (text) {
        console.log(text);
    };
    SearchItemsComponent = __decorate([
        core_1.Component({
            selector: 'search-items',
            templateUrl: 'app/items/views/search_items.tmpl.html',
            directives: [items_component_1.ItemsComponent],
            styleUrls: ['app/items/styles/searchItems.style.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SearchItemsComponent);
    return SearchItemsComponent;
}());
exports.SearchItemsComponent = SearchItemsComponent;
//# sourceMappingURL=searchItems.component.js.map