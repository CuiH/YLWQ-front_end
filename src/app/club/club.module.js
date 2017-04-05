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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var club_routing_module_1 = require("./club-routing.module");
var club_component_1 = require("./club.component");
var club_activities_component_1 = require("./club-activities.component");
var club_detail_component_1 = require("./club-detail.component");
var club_members_component_1 = require("./club-members.component");
var club_messages_component_1 = require("./club-messages.component");
var create_club_component_1 = require("./create-club.component");
var update_club_component_1 = require("./update-club.component");
var club_service_1 = require("./club.service");
var ClubModule = (function () {
    function ClubModule() {
    }
    return ClubModule;
}());
ClubModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            club_routing_module_1.ClubRoutingModule
        ],
        declarations: [
            club_component_1.ClubComponent,
            club_activities_component_1.ClubActivitiesComponent,
            club_detail_component_1.ClubDetailComponent,
            club_members_component_1.ClubMembersComponent,
            club_messages_component_1.ClubMessagesComponent,
            create_club_component_1.CreateClubComponent,
            update_club_component_1.UpdateClubComponent
        ],
        providers: [
            club_service_1.ClubService
        ]
    })
], ClubModule);
exports.ClubModule = ClubModule;
//# sourceMappingURL=club.module.js.map