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
var create_club_bulletin_component_1 = require("./create-club-bulletin.component");
var club_bulletin_component_1 = require("./club-bulletin.component");
var clubBulletinRoutes = [
    {
        path: 'club_bulletin',
        component: club_bulletin_component_1.ClubBulletinComponent,
        children: [
            { path: 'create/:club_id', component: create_club_bulletin_component_1.CreateClubBulletinComponent },
        ]
    }
];
var ClubBulletinRoutingModule = (function () {
    function ClubBulletinRoutingModule() {
    }
    return ClubBulletinRoutingModule;
}());
ClubBulletinRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(clubBulletinRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], ClubBulletinRoutingModule);
exports.ClubBulletinRoutingModule = ClubBulletinRoutingModule;
//# sourceMappingURL=club-bulletin-routing.module.js.map