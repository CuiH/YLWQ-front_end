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
var user_component_1 = require("./user.component");
var user_detail_component_1 = require("./user-detail.component");
var user_activities_component_1 = require("./user-activities.component");
var user_clubs_component_1 = require("./user-clubs.component");
var update_user_detail_component_1 = require("./update-user-detail.component");
var user_activities_sponsored_component_1 = require("./user-activities-sponsored.component");
var user_activities_participated_component_1 = require("./user-activities-participated.component");
var userRoutes = [
    {
        path: 'user',
        component: user_component_1.UserComponent,
        children: [
            { path: ':id/detail', component: user_detail_component_1.UserDetailComponent },
            {
                path: 'activities',
                component: user_activities_component_1.UserActivitiesComponent,
                children: [
                    { path: 'sponsored', component: user_activities_sponsored_component_1.UserActivitiesSponsoredComponent },
                    { path: 'participated', component: user_activities_participated_component_1.UserActivitiesParticipatedComponent },
                ]
            },
            { path: 'clubs', component: user_clubs_component_1.UserClubsComponent },
            { path: 'update', component: update_user_detail_component_1.UpdateUserDetailComponent },
        ]
    }
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());
UserRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(userRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], UserRoutingModule);
exports.UserRoutingModule = UserRoutingModule;
//# sourceMappingURL=user-routing.module.js.map