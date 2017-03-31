/**
 * Created by CuiH on 2017/3/27.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var log_in_component_1 = require("./log-in.component");
var page_my_component_1 = require("./page-my.component");
var page_home_component_1 = require("./page-home.component");
var user_clubs_component_1 = require("./user-clubs.component");
var club_detail_component_1 = require("./club-detail.component");
var user_activities_component_1 = require("./user-activities.component");
var activity_detail_component_1 = require("./activity-detail.component");
var club_activities_component_1 = require("./club-activities.component");
var club_members_component_1 = require("./club-members.component");
var activity_participants_component_1 = require("./activity-participants.component");
var create_club_bulletin_component_1 = require("./create-club-bulletin.component");
var routes = [
    { path: '', redirectTo: '/page_home', pathMatch: 'full' },
    { path: 'log_in', component: log_in_component_1.LogInComponent },
    { path: 'page_my', component: page_my_component_1.PageMyComponent },
    { path: 'page_home', component: page_home_component_1.PageHomeComponent },
    { path: 'clubs', component: user_clubs_component_1.UserClubsComponent },
    { path: 'club/:id', component: club_detail_component_1.ClubDetailComponent },
    { path: 'activities', component: user_activities_component_1.UserActivitiesComponent },
    { path: 'activity/:id', component: activity_detail_component_1.ActivityDetailComponent },
    { path: 'club_activities/:club_id', component: club_activities_component_1.ClubActivitiesComponent },
    { path: 'club_members/:club_id', component: club_members_component_1.ClubMembersComponent },
    { path: 'activity_participants/:activity_id', component: activity_participants_component_1.ActivityParticipantsComponent },
    { path: 'create_club_bulletin/:club_id', component: create_club_bulletin_component_1.CreateClubBulletinComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map