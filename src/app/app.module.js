"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var user_service_1 = require("./user.service");
var log_in_component_1 = require("./log-in.component");
var page_my_component_1 = require("./page-my.component");
var page_home_component_1 = require("./page-home.component");
var user_clubs_component_1 = require("./user-clubs.component");
var club_detail_component_1 = require("./club-detail.component");
var checking_service_1 = require("./checking.service");
var user_activities_component_1 = require("./user-activities.component");
var activity_detail_component_1 = require("./activity-detail.component");
var club_activities_component_1 = require("./club-activities.component");
var club_members_component_1 = require("./club-members.component");
var activity_participants_component_1 = require("./activity-participants.component");
var create_club_bulletin_component_1 = require("./create-club-bulletin.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            log_in_component_1.LogInComponent,
            page_my_component_1.PageMyComponent,
            page_home_component_1.PageHomeComponent,
            user_clubs_component_1.UserClubsComponent,
            club_detail_component_1.ClubDetailComponent,
            user_activities_component_1.UserActivitiesComponent,
            activity_detail_component_1.ActivityDetailComponent,
            club_activities_component_1.ClubActivitiesComponent,
            club_members_component_1.ClubMembersComponent,
            activity_participants_component_1.ActivityParticipantsComponent,
            create_club_bulletin_component_1.CreateClubBulletinComponent
        ],
        providers: [
            user_service_1.UserService,
            checking_service_1.CheckingService,
            cookies_service_1.CookieService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map