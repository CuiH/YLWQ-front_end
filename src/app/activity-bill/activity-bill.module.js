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
var activity_bill_service_1 = require("./activity-bill.service");
var activity_bill_component_1 = require("./activity-bill.component");
var activity_bill_detail_component_1 = require("./activity-bill-detail.component");
var create_activity_bill_component_1 = require("./create-activity-bill.component");
var activity_bill_routing_module_1 = require("./activity-bill-routing.module");
var ActivityBillModule = (function () {
    function ActivityBillModule() {
    }
    return ActivityBillModule;
}());
ActivityBillModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            activity_bill_routing_module_1.ActivityBillRoutingModule,
        ],
        declarations: [
            activity_bill_component_1.ActivityBillComponent,
            activity_bill_detail_component_1.ActivityBillDetailComponent,
            create_activity_bill_component_1.CreateActivityBillComponent
        ],
        providers: [
            activity_bill_service_1.ActivityBillService
        ]
    })
], ActivityBillModule);
exports.ActivityBillModule = ActivityBillModule;
//# sourceMappingURL=activity-bill.module.js.map