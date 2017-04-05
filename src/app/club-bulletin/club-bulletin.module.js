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
var club_bulletin_service_1 = require("./club-bulletin-service");
var club_bulletin_component_1 = require("./club-bulletin.component");
var create_club_bulletin_component_1 = require("./create-club-bulletin.component");
var club_bulletin_routing_module_1 = require("./club-bulletin-routing.module");
var ClubBulletinModule = (function () {
    function ClubBulletinModule() {
    }
    return ClubBulletinModule;
}());
ClubBulletinModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            club_bulletin_routing_module_1.ClubBulletinRoutingModule,
        ],
        declarations: [
            club_bulletin_component_1.ClubBulletinComponent,
            create_club_bulletin_component_1.CreateClubBulletinComponent
        ],
        providers: [
            club_bulletin_service_1.ClubBulletinService
        ]
    })
], ClubBulletinModule);
exports.ClubBulletinModule = ClubBulletinModule;
//# sourceMappingURL=club-bulletin.module.js.map