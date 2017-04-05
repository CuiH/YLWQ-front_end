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
var user_activities_component_1 = require("./user-activities.component");
var page_messages_component_1 = require("./page-messages.component");
var user_detail_component_1 = require("./user-detail.component");
var club_messages_component_1 = require("./club/club-messages.component");
var update_user_detail_component_1 = require("./update-user-detail.component");
var create_activity_bill_component_1 = require("./create-activity-bill.component");
var activity_bill_detail_component_1 = require("./activity-bill-detail.component");
var news_detail_component_1 = require("./news-detail.component");
var routes = [
    { path: '', redirectTo: '/page_home', pathMatch: 'full' },
    { path: 'log_in', component: log_in_component_1.LogInComponent },
    { path: 'page_my', component: page_my_component_1.PageMyComponent },
    { path: 'page_home', component: page_home_component_1.PageHomeComponent },
    { path: 'page_messages', component: page_messages_component_1.PageMessagesComponent },
    { path: 'clubs', component: user_clubs_component_1.UserClubsComponent },
    { path: 'activities', component: user_activities_component_1.UserActivitiesComponent },
    { path: 'user/:id', component: user_detail_component_1.UserDetailComponent },
    { path: 'club_messages/:club_id', component: club_messages_component_1.ClubMessagesComponent },
    { path: 'update_user_detail', component: update_user_detail_component_1.UpdateUserDetailComponent },
    { path: 'create_activity_bill/:activity_id', component: create_activity_bill_component_1.CreateActivityBillComponent },
    { path: 'activity_bill/:id', component: activity_bill_detail_component_1.ActivityBillDetailComponent },
    { path: 'news/:id', component: news_detail_component_1.NewsDetailComponent },
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