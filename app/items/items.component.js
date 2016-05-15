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
var http_1 = require('@angular/http');
var item_component_1 = require('./item.component');
var api_service_1 = require('../misc/api.service');
var converter_1 = require('../misc/converter');
var ItemsComponent = (function () {
    function ItemsComponent(_apiService, _converter) {
        this._apiService = _apiService;
        this._converter = _converter;
        this.shopType = '';
        this.title = 'ssss';
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.shopType = this.shop;
        this.title = this.shopTitle;
        this.getItems();
    };
    // getItems() {
    // 	this._apiService.getResults('')
    // 					.subscribe(
    // 						items =>	{	
    // 										console.log();
    // 										this.items = this._converter.convert('walmart', items);
    // 									},
    // 						error => 	this.errorMessage = <any>error
    // 					);
    // }
    ItemsComponent.prototype.getItems = function () {
        var _this = this;
        this._apiService.getData()
            .subscribe(function (data) {
            // console.log("ITEMS");
            console.log(data);
            _this.items = _this._converter.convert('walmart', data);
        }, function (error) { return console.log("ERROR"); }, function () { return console.log("DONE"); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ItemsComponent.prototype, "shop", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ItemsComponent.prototype, "shopTitle", void 0);
    ItemsComponent = __decorate([
        core_1.Component({
            selector: 'items-list',
            templateUrl: 'app/items/views/items.tmpl.html',
            directives: [item_component_1.ItemComponent],
            providers: [http_1.JSONP_PROVIDERS, api_service_1.ApiService, converter_1.Converter],
            styleUrls: ['app/items/styles/items.style.css']
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, converter_1.Converter])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map