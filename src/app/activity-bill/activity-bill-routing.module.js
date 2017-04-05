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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var activity_bill_component_1 = require("./activity-bill.component");
var create_activity_bill_component_1 = require("./create-activity-bill.component");
var activity_bill_detail_component_1 = require("./activity-bill-detail.component");
var activityBillRoutes = [
    {
        path: 'activity_bill',
        component: activity_bill_component_1.ActivityBillComponent,
        children: [
            { path: ':id/detail', component: activity_bill_detail_component_1.ActivityBillDetailComponent },
            { path: 'create/:activity_id', component: create_activity_bill_component_1.CreateActivityBillComponent },
        ]
    }
];
var ActivityBillRoutingModule = (function () {
    function ActivityBillRoutingModule() {
    }
    return ActivityBillRoutingModule;
}());
ActivityBillRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(activityBillRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], ActivityBillRoutingModule);
exports.ActivityBillRoutingModule = ActivityBillRoutingModule;
//# sourceMappingURL=activity-bill-routing.module.js.map