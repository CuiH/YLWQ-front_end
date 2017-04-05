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
var checking_service_1 = require("./checking.service");
var user_activities_component_1 = require("./user-activities.component");
var page_messages_component_1 = require("./page-messages.component");
var user_detail_component_1 = require("./user-detail.component");
var update_user_detail_component_1 = require("./update-user-detail.component");
var create_activity_bill_component_1 = require("./create-activity-bill.component");
var activity_bill_detail_component_1 = require("./activity-bill-detail.component");
var news_detail_component_1 = require("./news-detail.component");
var activity_module_1 = require("./activity/activity.module");
var club_module_1 = require("./club/club.module");
var application_module_1 = require("./application/application.module");
var club_bulletin_module_1 = require("./club-bulletin/club-bulletin.module");
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
            activity_module_1.ActivityModule,
            club_module_1.ClubModule,
            application_module_1.ApplicationModule,
            club_bulletin_module_1.ClubBulletinModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            log_in_component_1.LogInComponent,
            page_my_component_1.PageMyComponent,
            page_home_component_1.PageHomeComponent,
            user_clubs_component_1.UserClubsComponent,
            user_activities_component_1.UserActivitiesComponent,
            page_messages_component_1.PageMessagesComponent,
            user_detail_component_1.UserDetailComponent,
            update_user_detail_component_1.UpdateUserDetailComponent,
            create_activity_bill_component_1.CreateActivityBillComponent,
            activity_bill_detail_component_1.ActivityBillDetailComponent,
            news_detail_component_1.NewsDetailComponent,
        ],
        providers: [
            { provide: core_1.LOCALE_ID, useValue: "zh-CN" },
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