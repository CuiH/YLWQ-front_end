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
var user_routing_module_1 = require("./user-routing.module");
var user_component_1 = require("./user.component");
var user_detail_component_1 = require("./user-detail.component");
var user_activities_component_1 = require("./user-activities.component");
var user_clubs_component_1 = require("./user-clubs.component");
var update_user_detail_component_1 = require("./update-user-detail.component");
var user_service_1 = require("./user.service");
var user_activities_participated_component_1 = require("./user-activities-participated.component");
var user_activities_sponsored_component_1 = require("./user-activities-sponsored.component");
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            user_routing_module_1.UserRoutingModule
        ],
        declarations: [
            user_component_1.UserComponent,
            user_detail_component_1.UserDetailComponent,
            user_activities_component_1.UserActivitiesComponent,
            user_clubs_component_1.UserClubsComponent,
            update_user_detail_component_1.UpdateUserDetailComponent,
            user_activities_participated_component_1.UserActivitiesParticipatedComponent,
            user_activities_sponsored_component_1.UserActivitiesSponsoredComponent
        ],
        providers: [
            user_service_1.UserService
        ]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map