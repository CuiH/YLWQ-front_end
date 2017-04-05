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
var application_component_1 = require("./application.component");
var application_detail_component_1 = require("./application-detail.component");
var application_service_1 = require("./application.service");
var application_routing_module_1 = require("./application-routing.module");
var ApplicationModule = (function () {
    function ApplicationModule() {
    }
    return ApplicationModule;
}());
ApplicationModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            application_routing_module_1.ApplicationRoutingModule,
        ],
        declarations: [
            application_component_1.ApplicationComponent,
            application_detail_component_1.ApplicationDetailComponent
        ],
        providers: [
            application_service_1.ApplicationService
        ]
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=application.module.js.map