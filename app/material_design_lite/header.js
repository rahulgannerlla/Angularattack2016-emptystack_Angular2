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
var materialDesignLite_1 = require('./materialDesignLite');
var Header = (function () {
    function Header() {
    }
    Header = __decorate([
        core_1.Component({
            selector: 'header',
            directives: [materialDesignLite_1.MDL],
            template: "\n\t\t<header mdl class=\"mdl-layout__header\">\n\t      <div class=\"mdl-layout__header-row\">\n\t          <span class=\"mdl-layout-title\">Empty Stack App</span>\n\t      \n\t  \n\t          <div class=\"mdl-layout-spacer\"></div>\n\t      </div>\n\t  </header>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Header);
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=header.js.map