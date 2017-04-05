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
var activity_component_1 = require("../activity/activity.component");
var create_activity_component_1 = require("../activity/create-activity.component");
var update_activity_component_1 = require("../activity/update-activity.component");
var activity_participants_component_1 = require("../activity/activity-participants.component");
var activity_detail_component_1 = require("../activity/activity-detail.component");
var activityRoutes = [
    {
        path: 'activity',
        component: activity_component_1.ActivityComponent,
        children: [
            { path: 'create/:club_id', component: create_activity_component_1.CreateActivityComponent },
            { path: ':id/update', component: update_activity_component_1.UpdateActivityComponent },
            { path: ':id/participants', component: activity_participants_component_1.ActivityParticipantsComponent },
            { path: ':id/detail', component: activity_detail_component_1.ActivityDetailComponent },
        ]
    }
];
var ActivityRoutingModule = (function () {
    function ActivityRoutingModule() {
    }
    return ActivityRoutingModule;
}());
ActivityRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(activityRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], ActivityRoutingModule);
exports.ActivityRoutingModule = ActivityRoutingModule;
//# sourceMappingURL=activity-routing.module.js.map