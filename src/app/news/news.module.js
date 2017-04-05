/**
 * Created by CuiH on 2017/4/5.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var news_component_1 = require("./news.component");
var news_detail_component_1 = require("./news-detail.component");
var new_service_1 = require("./new.service");
var news_routing_module_1 = require("./news-routing.module");
var NewsModule = (function () {
    function NewsModule() {
    }
    return NewsModule;
}());
NewsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            news_routing_module_1.NewsRoutingModule,
        ],
        declarations: [
            news_component_1.NewsComponent,
            news_detail_component_1.NewsDetailComponent
        ],
        providers: [
            new_service_1.NewsService
        ]
    })
], NewsModule);
exports.NewsModule = NewsModule;
//# sourceMappingURL=news.module.js.map