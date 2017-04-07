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
var page_messages_component_1 = require("./page-messages.component");
var club_list_component_1 = require("./club-list.component");
var routes = [
    { path: '', redirectTo: '/page_home', pathMatch: 'full' },
    { path: 'log_in', component: log_in_component_1.LogInComponent },
    { path: 'page_my', component: page_my_component_1.PageMyComponent },
    { path: 'page_home', component: page_home_component_1.PageHomeComponent },
    { path: 'page_messages', component: page_messages_component_1.PageMessagesComponent },
    { path: 'club_list', component: club_list_component_1.ClubListComponent },
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