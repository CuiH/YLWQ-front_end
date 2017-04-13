/**
 * Created by CuiH on 2017/4/2.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var user_service_1 = require("../user/user.service");
var club_service_1 = require("./club.service");
require("zepto");
require("sm");
var ClubMessagesComponent = (function () {
    function ClubMessagesComponent(userService, location, activatedRoute, router, clubService) {
        this.userService = userService;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.clubService = clubService;
        this.clubMessages = [];
        this.loading = true;
        this.page = 1;
    }
    ClubMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/log_in']);
            return;
        }
        $.init();
        this.getItems();
        $(document).on('infinite', '.infinite-scroll-bottom', function () {
            if (_this.loading)
                return;
            _this.loading = true;
            _this.getItems();
        });
    };
    ClubMessagesComponent.prototype.ngOnDestroy = function () {
        $(document).off('infinite', '.infinite-scroll-bottom');
    };
    ClubMessagesComponent.prototype.getItems = function () {
        var _this = this;
        var originalLength = this.clubMessages.length;
        this.activatedRoute.params
            .switchMap(function (params) { return _this.clubService.getAllClubMessagesById(+params['id'], _this.page); })
            .subscribe(function (clubMessages) {
            _this.clubMessages = _this.clubMessages.concat(clubMessages);
            if ((_this.page == 1 && _this.clubMessages.length < 10) || _this.clubMessages.length == originalLength) {
                // 加载完毕，则注销无限加载事件，以防不必要的加载
                $.detachInfiniteScroll($('.infinite-scroll'));
                // 删除加载提示符
                $('.infinite-scroll-preloader').remove();
            }
            _this.page += 1;
            _this.loading = false;
            $.refreshScroller();
        });
    };
    ClubMessagesComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ClubMessagesComponent;
}());
ClubMessagesComponent = __decorate([
    core_1.Component({
        selector: 'club-messages',
        templateUrl: './club-messages.component.html',
        styleUrls: ['./club-messages.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        common_1.Location,
        router_1.ActivatedRoute,
        router_1.Router,
        club_service_1.ClubService])
], ClubMessagesComponent);
exports.ClubMessagesComponent = ClubMessagesComponent;
//# sourceMappingURL=club-messages.component.js.map