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
var activity_service_1 = require("./activity.service");
var activity_component_1 = require("./activity.component");
var activity_detail_component_1 = require("./activity-detail.component");
var activity_participants_component_1 = require("./activity-participants.component");
var create_activity_component_1 = require("./create-activity.component");
var update_activity_component_1 = require("./update-activity.component");
var activity_routing_module_1 = require("./activity-routing.module");
var ActivityModule = (function () {
    function ActivityModule() {
    }
    return ActivityModule;
}());
ActivityModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            activity_routing_module_1.ActivityRoutingModule,
        ],
        declarations: [
            activity_component_1.ActivityComponent,
            activity_detail_component_1.ActivityDetailComponent,
            create_activity_component_1.CreateActivityComponent,
            update_activity_component_1.UpdateActivityComponent,
            activity_participants_component_1.ActivityParticipantsComponent
        ],
        providers: [
            activity_service_1.ActivityService
        ]
    })
], ActivityModule);
exports.ActivityModule = ActivityModule;
//# sourceMappingURL=activity.module.js.map