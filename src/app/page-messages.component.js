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
/**
 * Created by CuiH on 2017/3/31.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("./user/user.service");
var notification_service_1 = require("./notification/notification.service");
require("zepto");
require("sm");
var PageMessagesComponent = (function () {
    function PageMessagesComponent(userService, router, notificationService) {
        this.userService = userService;
        this.router = router;
        this.notificationService = notificationService;
        this.notifications = [];
        this.loading = false;
        this.page = 1;
    }
    PageMessagesComponent.prototype.ngOnInit = function () {
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
    PageMessagesComponent.prototype.ngOnDestroy = function () {
        $(document).off('infinite', '.infinite-scroll-bottom');
    };
    PageMessagesComponent.prototype.getItems = function () {
        var _this = this;
        var originalLength = this.notifications.length;
        this.userService.getAllUserNotifications(this.page)
            .then(function (notifications) {
            _this.notifications = _this.notifications.concat(notifications);
            if ((_this.page == 1 && _this.notifications.length < 10) || _this.notifications.length == originalLength) {
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
    PageMessagesComponent.prototype.onClickNotification = function (notification) {
        notification.opened = !notification.opened;
        if (notification.is_read == 0) {
            notification.is_read = 1;
            this.notificationService.readNotification(notification.id).then();
        }
    };
    return PageMessagesComponent;
}());
PageMessagesComponent = __decorate([
    core_1.Component({
        selector: 'page-messages',
        templateUrl: './page-messages.component.html',
        styleUrls: ['./page-messages.component.css'],
        providers: [notification_service_1.NotificationService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router,
        notification_service_1.NotificationService])
], PageMessagesComponent);
exports.PageMessagesComponent = PageMessagesComponent;
//# sourceMappingURL=page-messages.component.js.map