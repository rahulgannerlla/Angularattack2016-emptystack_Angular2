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
var Converter = (function () {
    function Converter() {
    }
    /**
     * Converts an API JSon to the Json format needed by the directive.
     * @param {shop} the type of shop
     */
    Converter.prototype.convert = function (shop, jsonObject) {
        switch (shop) {
            case "walmart":
                return this.convert_walmart(jsonObject);
            default:
                return [];
        }
    };
    Converter.prototype.convert_walmart = function (jsonObject) {
        var result = [];
        for (var i = 0; i < jsonObject.items.length; i++) {
            console.log(jsonObject.items[i]);
            result.push({
                price: jsonObject.items[i]['salePrice'],
                description: jsonObject.items[i]['name'],
                image: jsonObject.items[i]['mediumImage'],
                productUrl: jsonObject.items[i]['productUrl']
            });
        }
        return result;
    };
    Converter = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Converter);
    return Converter;
}());
exports.Converter = Converter;
//# sourceMappingURL=converter.js.map