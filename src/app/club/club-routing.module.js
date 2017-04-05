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
var club_component_1 = require("./club.component");
var club_detail_component_1 = require("./club-detail.component");
var club_activities_component_1 = require("./club-activities.component");
var club_messages_component_1 = require("./club-messages.component");
var club_members_component_1 = require("./club-members.component");
var create_club_component_1 = require("./create-club.component");
var update_club_component_1 = require("./update-club.component");
var clubRoutes = [
    {
        path: 'club',
        component: club_component_1.ClubComponent,
        children: [
            { path: 'create', component: create_club_component_1.CreateClubComponent },
            { path: ':id/detail', component: club_detail_component_1.ClubDetailComponent },
            { path: ':id/activities', component: club_activities_component_1.ClubActivitiesComponent },
            { path: ':id/messages', component: club_messages_component_1.ClubMessagesComponent },
            { path: ':id/members', component: club_members_component_1.ClubMembersComponent },
            { path: ':id/update', component: update_club_component_1.UpdateClubComponent },
        ]
    }
];
var ClubRoutingModule = (function () {
    function ClubRoutingModule() {
    }
    return ClubRoutingModule;
}());
ClubRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(clubRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], ClubRoutingModule);
exports.ClubRoutingModule = ClubRoutingModule;
//# sourceMappingURL=club-routing.module.js.map