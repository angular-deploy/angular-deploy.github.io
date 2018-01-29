webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__("../../../../../src/app/util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.user = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* Util */].user;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__create_create_component__ = __webpack_require__("../../../../../src/app/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_bootstrap__ = __webpack_require__("../../../../ng2-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__inbox_inbox_component__ = __webpack_require__("../../../../../src/app/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__following_list_following_list_component__ = __webpack_require__("../../../../../src/app/following-list/following-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__slide_slide_component__ = __webpack_require__("../../../../../src/app/slide/slide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dynamic_dynamic_component__ = __webpack_require__("../../../../../src/app/dynamic/dynamic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__journey_map_journey_map_component__ = __webpack_require__("../../../../../src/app/journey-map/journey-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__directions_map_directive__ = __webpack_require__("../../../../../src/app/directions-map.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__notification_notification_component__ = __webpack_require__("../../../../../src/app/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__user_journies_user_journies_component__ = __webpack_require__("../../../../../src/app/user-journies/user-journies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__main_panel_main_panel_component__ = __webpack_require__("../../../../../src/app/main-panel/main-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__cesium_cesium_component__ = __webpack_require__("../../../../../src/app/cesium/cesium.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__broadcast_broadcast_component__ = __webpack_require__("../../../../../src/app/broadcast/broadcast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pusher_service__ = __webpack_require__("../../../../../src/app/pusher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__requests_requests_component__ = __webpack_require__("../../../../../src/app/requests/requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__discover_discover_component__ = __webpack_require__("../../../../../src/app/discover/discover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__discover_journey_discover_journey_component__ = __webpack_require__("../../../../../src/app/discover-journey/discover-journey.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// import { ModalModule } from 'angular2-modal';
// import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["b" /* SafeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_13__create_create_component__["a" /* CreateComponent */],
                __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__inbox_inbox_component__["a" /* InboxComponent */],
                __WEBPACK_IMPORTED_MODULE_18__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_19__following_list_following_list_component__["a" /* FollowingListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__carousel_carousel_component__["a" /* CarouselComponent */],
                // Carousel,
                // Slide,
                __WEBPACK_IMPORTED_MODULE_21__slide_slide_component__["a" /* SlideComponent */], __WEBPACK_IMPORTED_MODULE_22__dynamic_dynamic_component__["a" /* DynamicComponent */], __WEBPACK_IMPORTED_MODULE_23__journey_map_journey_map_component__["a" /* JourneyMapComponent */], __WEBPACK_IMPORTED_MODULE_24__directions_map_directive__["a" /* DirectionsMapDirective */], __WEBPACK_IMPORTED_MODULE_26__notification_notification_component__["a" /* NotificationComponent */], __WEBPACK_IMPORTED_MODULE_27__user_journies_user_journies_component__["a" /* UserJourniesComponent */], __WEBPACK_IMPORTED_MODULE_28__main_panel_main_panel_component__["a" /* MainPanelComponent */], __WEBPACK_IMPORTED_MODULE_29__settings_settings_component__["a" /* SettingsComponent */], __WEBPACK_IMPORTED_MODULE_30__cesium_cesium_component__["a" /* CesiumComponent */], __WEBPACK_IMPORTED_MODULE_32__broadcast_broadcast_component__["a" /* BroadcastComponent */], __WEBPACK_IMPORTED_MODULE_34__requests_requests_component__["a" /* RequestsComponent */], __WEBPACK_IMPORTED_MODULE_35__help_help_component__["a" /* HelpComponent */], __WEBPACK_IMPORTED_MODULE_36__discover_discover_component__["a" /* DiscoverComponent */], __WEBPACK_IMPORTED_MODULE_37__discover_journey_discover_journey_component__["a" /* DiscoverJourneyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                // HttpClientModule,
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                // angular material modules
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* AppRoutes */]), __WEBPACK_IMPORTED_MODULE_14_ng2_bootstrap__["a" /* AlertModule */], __WEBPACK_IMPORTED_MODULE_14_ng2_bootstrap__["a" /* AlertModule */].forRoot(),
                // ModalModule.forRoot(), BootstrapModalModule, 
                __WEBPACK_IMPORTED_MODULE_16_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_25__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyCW8ZlZzbtQWtn1LN6FM7JwZ6F28COCQjI",
                    libraries: ["places"]
                }),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__chat_chat_component__["a" /* ChatComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatIconRegistry */],
                __WEBPACK_IMPORTED_MODULE_12__parse_service__["a" /* ParseService */],
                // OVERLAY_PROVIDERS, 
                __WEBPACK_IMPORTED_MODULE_33__pusher_service__["a" /* PusherService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* unused harmony export AppComponents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_create_component__ = __webpack_require__("../../../../../src/app/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__journey_map_journey_map_component__ = __webpack_require__("../../../../../src/app/journey-map/journey-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_panel_main_panel_component__ = __webpack_require__("../../../../../src/app/main-panel/main-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_journies_user_journies_component__ = __webpack_require__("../../../../../src/app/user-journies/user-journies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__broadcast_broadcast_component__ = __webpack_require__("../../../../../src/app/broadcast/broadcast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cesium_cesium_component__ = __webpack_require__("../../../../../src/app/cesium/cesium.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__requests_requests_component__ = __webpack_require__("../../../../../src/app/requests/requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__discover_discover_component__ = __webpack_require__("../../../../../src/app/discover/discover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__discover_journey_discover_journey_component__ = __webpack_require__("../../../../../src/app/discover-journey/discover-journey.component.ts");















var AppRoutes = [
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: "signup", component: __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'video', component: __WEBPACK_IMPORTED_MODULE_10__cesium_cesium_component__["a" /* CesiumComponent */] },
    { path: "discover", component: __WEBPACK_IMPORTED_MODULE_13__discover_discover_component__["a" /* DiscoverComponent */] },
    { path: "discover/:id", component: __WEBPACK_IMPORTED_MODULE_14__discover_journey_discover_journey_component__["a" /* DiscoverJourneyComponent */] },
    {
        path: "", component: __WEBPACK_IMPORTED_MODULE_6__main_panel_main_panel_component__["a" /* MainPanelComponent */],
        children: [
            { path: "home", component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
            { path: 'myJournies', component: __WEBPACK_IMPORTED_MODULE_7__user_journies_user_journies_component__["a" /* UserJourniesComponent */] },
            { path: 'broadcast', component: __WEBPACK_IMPORTED_MODULE_9__broadcast_broadcast_component__["a" /* BroadcastComponent */] },
            { path: 'create', component: __WEBPACK_IMPORTED_MODULE_3__create_create_component__["a" /* CreateComponent */] },
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__["a" /* SettingsComponent */] },
            { path: 'profile/:username/:userId', component: __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__["a" /* ProfileComponent */] },
            { path: 'journey/:id/:polyline', component: __WEBPACK_IMPORTED_MODULE_5__journey_map_journey_map_component__["a" /* JourneyMapComponent */] },
            { path: 'requests', component: __WEBPACK_IMPORTED_MODULE_11__requests_requests_component__["a" /* RequestsComponent */] },
            { path: 'help', component: __WEBPACK_IMPORTED_MODULE_12__help_help_component__["a" /* HelpComponent */] }
        ]
    }
];
var AppComponents = [
    __WEBPACK_IMPORTED_MODULE_6__main_panel_main_panel_component__["a" /* MainPanelComponent */],
    __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */],
    __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */],
    __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__["a" /* ProfileComponent */],
    __WEBPACK_IMPORTED_MODULE_5__journey_map_journey_map_component__["a" /* JourneyMapComponent */],
    __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__["a" /* SettingsComponent */],
    __WEBPACK_IMPORTED_MODULE_10__cesium_cesium_component__["a" /* CesiumComponent */],
    __WEBPACK_IMPORTED_MODULE_13__discover_discover_component__["a" /* DiscoverComponent */],
    __WEBPACK_IMPORTED_MODULE_14__discover_journey_discover_journey_component__["a" /* DiscoverJourneyComponent */]
];


/***/ }),

/***/ "../../../../../src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var User = (function () {
    function User(email, username, password) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
    return User;
}());

var users = [
    new User('admin@admin.com', 'admin', 'admin'),
    new User('user1@gmail.com', 'asd', 'a23')
];
var AuthenticationService = (function () {
    function AuthenticationService(parse, _router) {
        this._router = _router;
        this.parse = parse.sdk();
    }
    AuthenticationService.prototype.logout = function () {
        // localStorage.removeItem("user");
        this.parse.User.logOut();
        this._router.navigate(['/login']);
    };
    /**
     * user: ParseUser
     * callback: Callback Method that will be called when result of login is received from ParseServer.
     */
    AuthenticationService.prototype.login = function (user, callback) {
        var _this = this;
        var authenticatedUser = users.find(function (u) { return u.email === user.email && u.password === user.password; });
        console.log(user.username);
        console.log(user.password);
        this.parse.User.logIn(user.username, user.password, {
            success: function (user) {
                // Do stuff after successful login.
                console.log('Login successful');
                callback(true);
                _this._router.navigate(['home']);
            },
            error: function (user, error) {
                callback(false);
                console.error('Failed to login. ', error);
            }
        });
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (localStorage.getItem("user") === null) {
            this._router.navigate(['Login']);
        }
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/broadcast/broadcast.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .sebm-google-map-container {\r\n       height: 300px;\r\n       width:600px; \r\n     }\r\n     .close-mapButton{\r\n     position:absolute;\r\n     left:96%;\r\n     z-index:10;\r\n     color:red; \r\n     }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/broadcast/broadcast.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 style=\"margin-left:30% \">\r\n    Broadcasting journeys List\r\n</h2>\r\n<mat-divider></mat-divider>\r\n<mat-nav-list style=\"margin-left:10%;\">\r\n    <div *ngFor='let data of this.journeyData; let index=index'>\r\n        <mat-list-item (click)='this.map(data.id,index)'>\r\n            <img mat-list-avatar src={{data.image}} alt=\"...\">\r\n            <div class=\"mat-list-item-text\" style=\"padding-left:2px; \">\r\n                <h6 style=\"font-size:13px;  \">\r\n                    <a style=\"color:dodgerblue; \"> <strong>{{data.username}} </strong></a> is travelling to {{data.title}}</h6>\r\n\r\n                <h6> click to see his Recent Activities</h6>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n        </mat-list-item>\r\n        <div *ngIf='flag' style=\"position:relative;width:600px \">\r\n            <a class=\"close-mapButton\" href=\"javascript:void(0)\" (click)=\"closeMap()\">&#10005;</a>\r\n            <agm-map [latitude]=\"data.currentLocation.latitude\" [longitude]=\"data.currentLocation.longitude\" [zoom]=this.zoom>\r\n                \r\n                <agm-marker [latitude]=\"data.currentLocation.latitude\" [longitude]=\"data.currentLocation.longitude\" [iconUrl]=currentIcon>\r\n                    <agm-info-window>\r\n                        <strong>{{data.username}} is currently at {{this.currLocation[data.id]}}</strong>\r\n                    </agm-info-window>\r\n                </agm-marker>\r\n\r\n                <agm-marker *ngFor='let l of mediaData[index]' [latitude]='l.location.latitude' [longitude]='l.location.longitude'\r\n                    [iconUrl]='l.icon'>\r\n                    <agm-info-window [disableAutoPan]=\"true\">\r\n                        <carousel (mouseenter)=\"displayArrow(index,l.content.length)\" (mouseleave)=\"hideArrow(index)\">\r\n\r\n                            <slide *ngFor='let I of l.content'>\r\n                                <img src=\"{{I}}\" class=\"mat-card-image\" alt=\"Grass\" width=\"300px\" height=\"130px\">\r\n                                <div class=\"carousel-caption\">\r\n                                    <h3 style=\"background-color: transparent;color: white;\"></h3>\r\n                                    <p style=\"background-color: transparent;color: white;\"></p>\r\n                                </div>\r\n                            </slide>\r\n\r\n                        </carousel>\r\n                    </agm-info-window>\r\n                </agm-marker>\r\n\r\n\r\n\r\n            </agm-map>\r\n        </div>\r\n    </div>\r\n\r\n    <mat-divider></mat-divider>\r\n    <mat-list-item *ngIf='this.journeyData.length == 0'>\r\n\r\n        <div class=\"mat-list-item-text\" style=\"padding-left:2px; \">\r\n            <h6 style=\"font-size:13px;  \">\r\n                No one of your follower travelers are traveling at the moment</h6>\r\n\r\n            <h6> Stay in touch to us.</h6>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n    </mat-list-item>\r\n\r\n</mat-nav-list>"

/***/ }),

/***/ "../../../../../src/app/broadcast/broadcast.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BroadcastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_modal__ = __webpack_require__("../../../../angular2-modal/esm/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var imagePath = '/assets/images/p2.png';
var BroadcastComponent = (function () {
    function BroadcastComponent(mapsAPILoader, parse, _sharedService, gmapsApi, overlay, vcRef) {
        var _this = this;
        this.mapsAPILoader = mapsAPILoader;
        this._sharedService = _sharedService;
        this.gmapsApi = gmapsApi;
        this.journeyData = [];
        this.mediaData = [];
        this.currLocation = [];
        this.followingList = [];
        this.flag = false;
        this.flag1 = false;
        this.currentIcon = '/assets/images/curr1.png';
        this.startIcon = '/assets/images/start1.png';
        this.image = '/assets/images/photo.png';
        this.video = '/assets/images/video.png';
        this.checkin = '/assets/images/checkin.png';
        this.lat = 51.678418;
        this.lng = 7.809007;
        overlay.defaultViewContainer = vcRef;
        this.MapsAPILoader = mapsAPILoader;
        this.parse = parse.sdk();
        console.log(this._sharedService.getData());
        var currentUser = this.parse.User.current();
        var query = new this.parse.Query(this.parse.User);
        var Journey = this.parse.Object.extend('Journeys');
        var User = new this.parse.User();
        User.id = 'K9ekSSNbiL';
        var image;
        this.zoom = 9;
        console.log(currentUser.getUsername());
        var query = new this.parse.Query(Journey);
        query.equalTo('state', 'recording');
        query.descending('createdAt');
        query.include('createdBy');
        query.find(function (journey) {
            console.log(journey.length);
            for (var j = 0; j < journey.length; j++) {
                var objt = journey[j];
                var latlng = objt.get('currentLocation');
                _this.getGeoLocation(latlng.latitude, latlng.longitude, objt.id);
                if (objt.get('createdBy').get('profilePic'))
                    image = objt.get('createdBy').get('profilePic').url();
                else
                    image = imagePath;
                _this.journeyData.push({ id: objt.id, currentLocation: objt.get('currentLocation'),
                    startLocation: objt.get('startLocation'), title: objt.get('name'),
                    username: objt.get('createdBy').get('username'), image: image, startAddress: objt.get('startAddress') });
            }
            ;
        });
    }
    BroadcastComponent.prototype.ngOnInit = function () {
    };
    BroadcastComponent.prototype.map = function (id, index) {
        this.flag = true;
        //  this.showMap(id,index);
    };
    BroadcastComponent.prototype.showMap = function (id, index) {
        var _this = this;
        var Media = this.parse.Object.extend('Media');
        var Journey = this.parse.Object.extend('Journeys');
        var journey = new Journey();
        journey.id = id;
        var query = new this.parse.Query(Media);
        var localmedia = [];
        query.equalTo("createdBy", journey);
        query.find(function (media) {
            console.log(media.length);
            var icon;
            if (objt.get('type') == 'IMAGE')
                icon = _this.image;
            else if (objt.get('type') == 'VIDEO')
                icon = _this.video;
            else if (objt.get('type') == 'CHECKIN')
                icon = _this.checkin;
            for (var j = 0; j < media.length; j++) {
                var objt = media[j];
                localmedia.push({ id: objt.id, text: objt.get('text'), location: objt.get('location'),
                    content: objt.get('content'), type: objt.get('type'), icon: icon });
            }
            _this.mediaData[index] = localmedia;
            //this.flag=true;
            console.log(_this.mediaData[index]);
        });
        this.gmapsApi.getNativeMap();
        // this.gmapsApi.createMarker({ position: { lat: 51.678418, lng: 7.809007 }});
    };
    BroadcastComponent.prototype.closeMap = function () {
        this.flag = false;
    };
    BroadcastComponent.prototype.getGeoLocation = function (lat, lng, id) {
        var _this = this;
        this.MapsAPILoader.load().then(function () {
            if (navigator.geolocation) {
                var geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(lat, lng);
                var request = { latLng: latlng };
                geocoder.geocode(request, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var result = results[0];
                        var rsltAdrComponent = result.address_components;
                        var resultLength = rsltAdrComponent.length;
                        if (result != null) {
                            //   console.log(rsltAdrComponent[resultLength-8].short_name);
                            console.log(result.formatted_address);
                            _this.currLocation[id] = result.formatted_address;
                            //  this.marker.buildingNum = rsltAdrComponent[resultLength-8].short_name;
                            // this.marker.streetName = rsltAdrComponent[resultLength-7].short_name;
                        }
                        else {
                            console.log("No address available!");
                        }
                    }
                });
            }
        });
    };
    BroadcastComponent.prototype.displayArrow = function (index, length) {
        console.log(length);
        this.carouselComponent.displayArrow(index, length); //calling displayArrow func in carouselComponent to show arrow on card
    };
    BroadcastComponent.prototype.hideArrow = function (index) {
        console.log('leave');
        this.carouselComponent.hideArrow(index); //calling hideArrow func in carouselComponent to hide arrow on card
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__carousel_carousel_component__["a" /* CarouselComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__carousel_carousel_component__["a" /* CarouselComponent */])
    ], BroadcastComponent.prototype, "carouselComponent", void 0);
    BroadcastComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-broadcast',
            template: __webpack_require__("../../../../../src/app/broadcast/broadcast.component.html"),
            styles: [__webpack_require__("../../../../../src/app/broadcast/broadcast.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* GoogleMapsAPIWrapper */], __WEBPACK_IMPORTED_MODULE_4__shared_service__["a" /* SharedService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_2__parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* GoogleMapsAPIWrapper */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_modal__["h" /* Overlay */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], BroadcastComponent);
    return BroadcastComponent;
}());



/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Direction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));
var CarouselComponent = (function () {
    function CarouselComponent() {
        this.slides = [];
        this.destroyed = false;
    }
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    CarouselComponent.prototype.select = function (nextSlide, direction) {
        if (direction === void 0) { direction = Direction.UNKNOWN; }
        var nextIndex = nextSlide.index;
        if (direction === Direction.UNKNOWN) {
            direction = nextIndex > this.getCurrentIndex() ? Direction.NEXT : Direction.PREV;
        }
        // Prevent this user-triggered transition from occurring if there is already one in progress
        if (nextSlide && nextSlide !== this.currentSlide) {
            this.goNext(nextSlide, direction);
        }
    };
    CarouselComponent.prototype.goNext = function (slide, direction) {
        if (this.destroyed) {
            return;
        }
        slide.direction = direction;
        slide.active = true;
        if (this.currentSlide) {
            this.currentSlide.direction = direction;
            this.currentSlide.active = false;
        }
        this.currentSlide = slide;
    };
    CarouselComponent.prototype.getSlideByIndex = function (index) {
        var len = this.slides.length;
        for (var i = 0; i < len; ++i) {
            if (this.slides[i].index === index) {
                return this.slides[i];
            }
        }
    };
    CarouselComponent.prototype.getCurrentIndex = function () {
        return !this.currentSlide ? 0 : this.currentSlide.index;
    };
    CarouselComponent.prototype.next = function () {
        var newIndex = (this.getCurrentIndex() + 1) % this.slides.length;
        if (newIndex === 0 && this.noWrap) {
            return;
        }
        return this.select(this.getSlideByIndex(newIndex), Direction.NEXT);
    };
    CarouselComponent.prototype.prev = function () {
        var newIndex = this.getCurrentIndex() - 1 < 0 ? this.slides.length - 1 : this.getCurrentIndex() - 1;
        if (this.noWrap && newIndex === this.slides.length - 1) {
            return;
        }
        return this.select(this.getSlideByIndex(newIndex), Direction.PREV);
    };
    CarouselComponent.prototype.addSlide = function (slide) {
        slide.index = this.slides.length;
        this.slides.push(slide);
        if (this.slides.length === 1 || slide.active) {
            this.select(this.slides[this.slides.length - 1]);
        }
        else {
            slide.active = false;
        }
    };
    CarouselComponent.prototype.displayArrow = function (index, length) {
        console.log('enter1');
        if (length > 1) {
            var el = document.getElementsByClassName('left carousel-control')[index];
            el.style.display = 'block';
            var rarr = document.getElementsByClassName('right carousel-control')[index];
            rarr.style.display = 'block';
            var ind = document.getElementsByClassName('carousel-indicators')[index];
            ind.style.display = 'block';
        }
    };
    CarouselComponent.prototype.hideArrow = function (index) {
        var el = document.getElementsByClassName('left carousel-control')[index];
        el.style.display = 'none';
        var rarr = document.getElementsByClassName('right carousel-control')[index];
        rarr.style.display = 'none';
        var ind = document.getElementsByClassName('carousel-indicators')[index];
        ind.style.display = 'none';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "noWrap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "noPause", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "noTransition", void 0);
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'carousel',
            template: "\n    <div  class=\"carousel slide\" style='background-color:black'>\n    <ol class=\"carousel-indicators\" [hidden]=\"slides.length <= 1\" style=\"display:none;\">\n    \n         <li *ngFor=\"let slidez of slides\" [class.active]=\"slidez.active === true\" (click)=\"select(slidez)\"></li>\n       \n      </ol>\n      <div class=\"carousel-inner\"><ng-content></ng-content></div>\n                  <a id=\"leftarrow\" class=\"left carousel-control\" style=\"height:140px;display:none;\" (click)=\"prev()\" [hidden]=\"slides.length<2\" >\n                  <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                  </a>\n                  <a  id=\"rightarrow\" class=\"right carousel-control\" style=\"height:140px;display:none;\" (click)=\"next()\" [hidden]=\"slides.length<2\">\n                  <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                 </a>\n    </div>\n  "
        })
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cesium/cesium.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video-box {\r\n    min-height: 600px;\r\n    min-width: 900px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cesium/cesium.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Video Component</h1>\r\n\r\n<br>\r\n\r\n<iframe class=\"video-box\" src=\"http://h-r.westeurope.cloudapp.azure.com:3000\" frameborder=\"0\"></iframe>\r\n"

/***/ }),

/***/ "../../../../../src/app/cesium/cesium.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CesiumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CesiumComponent = (function () {
    function CesiumComponent(http) {
    }
    CesiumComponent.prototype.ngOnInit = function () {
    };
    CesiumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cesium',
            template: __webpack_require__("../../../../../src/app/cesium/cesium.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cesium/cesium.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CesiumComponent);
    return CesiumComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    background: #eee;\r\n}\r\n\r\n.chat .message {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin: 10px 0 0 10px;\r\n    min-height: 30px;\r\n    height: auto;\r\n    text-align: left;\r\n}\r\n\r\n.chat .message.me img {\r\n    -webkit-box-ordinal-group: 3;\r\n        -ms-flex-order: 2;\r\n            order: 2;\r\n    margin: 0 0 0 3px;\r\n}\r\n\r\n.chat .message.me div {\r\n    -webkit-box-ordinal-group: 2;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n    padding: 0 8px 0 0;\r\n}\r\n\r\n.chat .message.me div p {\r\n    float: right;\r\n}\r\n\r\n.chat .message.me div:before {\r\n    position: relative;\r\n    float: right;\r\n    content: '';\r\n    margin: 7px -8px 0 0;\r\n    width: 0;\r\n    height: 0;\r\n    border-style: solid;\r\n    border-width: 8px 0 8px 8px;\r\n    border-color: transparent transparent transparent #fff;\r\n}\r\n\r\n.chat .message img {\r\n    display: block;\r\n    -webkit-box-ordinal-group: 2;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n    margin: 0 10px 0 0;\r\n    height: 30px;\r\n    width: 30px;\r\n    border-radius: 50%;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n}\r\n\r\n.chat .message div {\r\n    display: block;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    -webkit-box-ordinal-group: 3;\r\n        -ms-flex-order: 2;\r\n            order: 2;\r\n}\r\n\r\n.chat .message div p {\r\n    display: inline-block;\r\n    margin: 0;\r\n    width: auto;\r\n    padding: 8px 10px 8px 10px;\r\n    background: #fff;\r\n    word-wrap: break-word;\r\n    font-family: Monospace;\r\n    border-radius: 3px;\r\n    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.chat .message div:before {\r\n    position: relative;\r\n    float: left;\r\n    content: '';\r\n    margin: 7px 0 0 -8px;\r\n    width: 0;\r\n    height: 0;\r\n    border-style: solid;\r\n    border-width: 8px 8px 8px 0;\r\n    border-color: transparent #fff transparent transparent;\r\n}\r\n\r\n/*\r\n* The styles to setup this scene\r\n*/\r\n\r\n/*//////////////////////////////////////////////*/\r\n\r\n.img-responsive,\r\n.chat-window .msg-container .avatar img {\r\n    display: block;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.row:after,\r\n.chat-window-container:after,\r\n.chat-window .msg-container:after {\r\n    clear: both;\r\n}\r\n\r\n.chat-window {\r\n    display: block;\r\n    position: absolute;\r\n   \r\n    top: 47%;\r\n    left: 49%;\r\n    width: 320px;\r\n    height: 300px;\r\n    z-index:100; \r\n}\r\n\r\n.col-xs-1,\r\n.col-sm-1,\r\n.col-mat-1,\r\n.col-lg-1,\r\n.col-xs-2,\r\n.chat-window .top-bar .panel-buttons-container,\r\n.chat-window .msg-container .avatar,\r\n.col-sm-2,\r\n.col-mat-2,\r\n.chat-window .top-bar .panel-buttons-container,\r\n.chat-window .msg-container .avatar,\r\n.col-lg-2,\r\n.col-xs-3,\r\n.col-sm-3,\r\n.col-mat-3,\r\n.col-lg-3,\r\n.conversation-wrap,\r\n.col-xs-4,\r\n.col-sm-4,\r\n.col-mat-4,\r\n.col-lg-4,\r\n.col-xs-5,\r\n.col-sm-5,\r\n.col-mat-5,\r\n.col-lg-5,\r\n.col-xs-6,\r\n.col-sm-6,\r\n.col-mat-6,\r\n.col-lg-6,\r\n.col-xs-7,\r\n.col-sm-7,\r\n.col-mat-7,\r\n.col-lg-7,\r\n.col-xs-8,\r\n.col-sm-8,\r\n.col-mat-8,\r\n.col-lg-8,\r\n.col-xs-9,\r\n.col-sm-9,\r\n.col-mat-9,\r\n.col-lg-9,\r\n.col-xs-10,\r\n.chat-window .top-bar .panel-title-container,\r\n.chat-window .messages,\r\n.col-sm-10,\r\n.col-mat-10,\r\n.chat-window .top-bar .panel-title-container,\r\n.chat-window .messages,\r\n.col-lg-10,\r\n.col-xs-11,\r\n.col-sm-11,\r\n.col-mat-11,\r\n.col-lg-11,\r\n.col-xs-12,\r\n.chat-window .panel-container,\r\n.col-sm-12,\r\n.col-mat-12,\r\n.chat-window .panel-container,\r\n.col-lg-12 {\r\n    position: relative;\r\n    min-height: 1px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.col-mat-2,\r\n.chat-window .top-bar .panel-buttons-container,\r\n.chat-window .msg-container .avatar {\r\n    width: 16.66667%;\r\n}\r\n\r\n.chat-window .msg-container-base::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n.chat-window .msg-container-base::-webkit-scrollbar {\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n.chat-window .msg-container-base::-webkit-scrollbar-thumb {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #555;\r\n}\r\n\r\n.img-responsive,\r\n.chat-window .msg-container .avatar img {\r\n    display: block;\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.chat-window .avatar {\r\n    position: relative;\r\n}\r\n\r\n.chat-window .base-receive>.avatar:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    width: 0;\r\n    height: 0;\r\n    border: 5px solid #FFF;\r\n    border-left-color: transparent;\r\n    border-bottom-color: transparent;\r\n}\r\n\r\n.chat-window .base-sent {\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    -webkit-box-align: end;\r\n        -ms-flex-align: end;\r\n            align-items: flex-end;\r\n}\r\n\r\n.chat-window .base-sent>.avatar:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 0;\r\n    height: 0;\r\n    border: 5px solid white;\r\n    border-right-color: transparent;\r\n    border-top-color: transparent;\r\n    -webkit-box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\r\n            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.col-mat-10,\r\n.chat-window .top-bar .panel-title-container,\r\n.chat-window .messages {\r\n    width: 83.33333%;\r\n}\r\n\r\n.chat-window .messages {\r\n    background: white;\r\n    padding: 10px;\r\n    border-radius: 2px;\r\n    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\r\n            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\r\n    max-width: 100%;\r\n}\r\n\r\n.chat-window .messages>p {\r\n    font-size: 13px;\r\n    margin: 0 0 0.2rem 0;\r\n}\r\n\r\n.chat-window .messages>.time {\r\n    font-size: 11px;\r\n    color: #ccc;\r\n}\r\n\r\n.chat-window .messages>.time {\r\n    font-size: 11px;\r\n    color: #ccc;\r\n}\r\n\r\n.chat-window .msg-sent>.time {\r\n    float: right;\r\n}\r\n\r\n.row,\r\n.chat-window-container,\r\n.chat-window .msg-container {\r\n    margin-left: -15px;\r\n    margin-right: -15px;\r\n}\r\n\r\n.row:before,\r\n.chat-window-container:before,\r\n.chat-window .msg-container:before,\r\n.row:after,\r\n.chat-window-container:after,\r\n.chat-window .msg-container:after {\r\n    content: \" \";\r\n    display: table;\r\n}\r\n\r\n.row:after,\r\n.chat-window-container:after,\r\n.chat-window .msg-container:after {\r\n    clear: both;\r\n}\r\n\r\n.form-control,\r\n.chat-window .panel-footer .chat-input {\r\n    display: block;\r\n    width: 100%;\r\n    height: 34px;\r\n    padding: 6px 12px;\r\n    font-size: 14px;\r\n    line-height: 1.42857;\r\n    color: #555555;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n    -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\r\n    -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\r\n    transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\r\n    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\r\n    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\r\n}\r\n\r\n.chat-window .top-bar {\r\n    background: #666;\r\n    color: white;\r\n    padding: 10px;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.chat-window .msg-receive {\r\n    padding-left: 0;\r\n    margin-left: 0;\r\n}\r\n\r\n.chat-window .msg-sent {\r\n    padding-bottom: 20px !important;\r\n    margin-right: 0;\r\n}\r\n\r\n.chat-window .messages {\r\n    background: white;\r\n    padding: 10px;\r\n    border-radius: 2px;\r\n    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\r\n            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\r\n    max-width: 100%;\r\n}\r\n\r\n.chat-window .messages>p {\r\n    font-size: 13px;\r\n    margin: 0 0 0.2rem 0;\r\n}\r\n\r\n.chat-window .messages>.time {\r\n    font-size: 11px;\r\n    color: #ccc;\r\n}\r\n\r\n.chat-window .msg-container {\r\n    padding: 10px;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.chat-window img {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.chat-window .avatar {\r\n    position: relative;\r\n}\r\n\r\n.chat-window .base-receive>.avatar:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    width: 0;\r\n    height: 0;\r\n    border: 5px solid #FFF;\r\n    border-left-color: transparent;\r\n    border-bottom-color: transparent;\r\n}\r\n\r\n.chat-window .base-sent {\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    -webkit-box-align: end;\r\n        -ms-flex-align: end;\r\n            align-items: flex-end;\r\n}\r\n\r\n.chat-window .base-sent>.avatar:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 0;\r\n    height: 0;\r\n    border: 5px solid white;\r\n    border-right-color: transparent;\r\n    border-top-color: transparent;\r\n    -webkit-box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\r\n            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.chat-window .msg-sent>.time {\r\n    float: right;\r\n}\r\n\r\n.chat-window .msg-container-base::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n.chat-window .msg-container-base::-webkit-scrollbar {\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n.chat-window .msg-container-base::-webkit-scrollbar-thumb {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #555;\r\n}\r\n\r\n.chat-window .btn-group.dropup {\r\n    position: fixed;\r\n    left: 0px;\r\n    bottom: 0;\r\n}\r\n\r\n.col-xs-12,\r\n.chat-window .panel-container {\r\n    width: 100%;\r\n}\r\n\r\n.panel-title {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 16px;\r\n    color: inherit;\r\n}\r\n\r\n.panel-title>a,\r\n.panel-title>small,\r\n.panel-title>.small,\r\n.panel-title>small>a,\r\n.panel-title>.small>a {\r\n    color: inherit;\r\n}\r\n\r\n.panel-body {\r\n    padding: 15px;\r\n}\r\n\r\n.chat-window .msg-container-base {\r\n    background: #e5e5e5;\r\n    margin: 0;\r\n    padding: 0 10px 10px;\r\n    max-height: 200px;\r\n    min-height:200px; \r\n    overflow-x: hidden;\r\n}\r\n\r\n.chat-window .msg-container-base::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n.chat-window .msg-container-base::-webkit-scrollbar {\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n.chat-window .msg-container-base::-webkit-scrollbar-thumb {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #555;\r\n}\r\n\r\n.btn,\r\n.chat-window .panel-footer .btn-chat {\r\n    display: inline-block;\r\n    margin-bottom: 0;\r\n    font-weight: normal;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    -ms-touch-action: manipulation;\r\n        touch-action: manipulation;\r\n    cursor: pointer;\r\n    background-image: none;\r\n    border: 1px solid transparent;\r\n    white-space: nowrap;\r\n    padding: 6px 12px;\r\n    font-size: 14px;\r\n    line-height: 1.42857;\r\n    border-radius: 4px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n.form-inline .input-group {\r\n    display: inline-table;\r\n    vertical-align: middle;\r\n}\r\n\r\n.form-inline .input-group .input-group-addon,\r\n.form-inline .input-group .input-group-btn,\r\n.form-inline .input-group .form-control,\r\n.form-inline .input-group .chat-window .panel-footer .chat-input,\r\n.chat-window .panel-footer .form-inline .input-group .chat-input {\r\n    width: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-window-container\">\r\n  <div class=\"chat-window\">\r\n    <div class=\"panel-container\">\r\n      <div class=\"panel panel-default\">\r\n\r\n        <div class=\"panel-heading top-bar\">\r\n          <div class=\"panel-title-container\">\r\n            <h3 class=\"panel-title\">\r\n              <span class=\"glyphicon glyphicon-comment\"></span> {{showChatName}}\r\n              <a style=\"position:absolute;left:280px;\" href=\"javascript:void(0)\" (click)=\"closeChat()\">&#10005;</a>\r\n            </h3>\r\n\r\n          </div>\r\n          <div class=\"panel-buttons-container\">\r\n\r\n            <!-- you could put minimize or close buttons here -->\r\n          </div>\r\n        </div>\r\n\r\n        <div #msg class=\"panel-body msg-container-base\">\r\n          <div   class=\"msg-container\" *ngFor=\"let m of messages\">\r\n\r\n            <div class=\"avatar\" *ngIf=\"m.get('sender').id == user.id\">\r\n              <img src=\"{{userDP}}\">\r\n            </div>\r\n            <div class=\"messages\" *ngIf=\"m.get('sender').id == user.id\">\r\n              <p>{{ m.get('text') }}</p>\r\n              <p class=\"time\"></p>\r\n            </div>\r\n\r\n            <div class=\"messages\" *ngIf=\"m.get('sender').id == otherUser.id\">\r\n              <p>{{ m.get('text') }}</p>\r\n              <p class=\"time\"></p>\r\n            </div>\r\n\r\n            <div class=\"avatar\" *ngIf=\"m.get('sender').id == otherUser.id\">\r\n              <img src=\"{{otherUserDP}}\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"panel-footer\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" class=\"chat-input\" placeholder=\"Write your message here...\" [(ngModel)]=\"text\" />\r\n            <span class=\"input-group-btn\">\r\n            <button class=\"btn-chat\" (click)=\"sendMessage()\">Send</button>\r\n          </span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CustomModalContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal_plugins_bootstrap__ = __webpack_require__("../../../../angular2-modal/plugins/bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__live_query_service__ = __webpack_require__("../../../../../src/app/live-query.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__("../../../../../src/app/util.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomModalContext = (function (_super) {
    __extends(CustomModalContext, _super);
    function CustomModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomModalContext;
}(__WEBPACK_IMPORTED_MODULE_1_angular2_modal_plugins_bootstrap__["a" /* BSModalContext */]));

var imagePath = '/assets/images/p2.png';
var ChatComponent = (function () {
    function ChatComponent(
        // public dialog: DialogRef<CustomModalContext>,
        parseService, liveQuery, injector) {
        this.liveQuery = liveQuery;
        this.injector = injector;
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.messages = [];
        this.incoming = false;
        // text of message
        this.text = "";
        this.isDisabled = false;
        this.closed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.parse = parseService.sdk();
        // this.context = dialog.context;
        //dialog.setCloseGuard(this);
        this.showChatName = this.injector.get('showChatName');
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.parse.User.current();
        //console.log(this.user);
        // get required fields
        this.otherUser = __WEBPACK_IMPORTED_MODULE_4__util__["a" /* Util */].otherChatUser;
        this.currentChat = __WEBPACK_IMPORTED_MODULE_4__util__["a" /* Util */].selectedChat;
        if (this.otherUser.get('profilePic'))
            this.otherUserDP = this.otherUser.get('profilePic').url();
        else
            this.otherUserDP = imagePath;
        if (this.user.get('profilePic'))
            this.userDP = this.user.get('profilePic').url();
        else
            this.userDP = imagePath;
        if (!this.otherUser) {
            console.log('Problem: otherUser not provided');
            return;
        }
        else if (!this.currentChat) {
            // this should be because the chat doesn't exist
            // fetch chat between these users
            var query = new this.parse.Query('Chat');
            query.containsAll("users", [this.user, __WEBPACK_IMPORTED_MODULE_4__util__["a" /* Util */].otherChatUser]);
            query.limit(1);
            query.find().then(function (chats) {
                console.log('Found chat', chats);
                if (chats.length == 1) {
                    _this.currentChat = chats[0];
                    // now fetch the messages
                    _this.getMessages(_this.currentChat);
                }
                // else 
                // chat doesn't exist, so create new one when user sends new message
            }, function (err) {
                _this.logErr(err);
            });
        }
        if (this.currentChat) {
            this.getMessages(this.currentChat);
            this.subscribeToChat(this.currentChat);
        }
    };
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    /**
     * Subscribe to chat messages where chattingId matches.
     * @param chat ParseObject of Chat class
     */
    ChatComponent.prototype.subscribeToChat = function (chat) {
        var _this = this;
        var client = this.liveQuery.getLiveQueryClient();
        client.open();
        var query = new this.parse.Query('Message');
        query.equalTo("chat", this.currentChat);
        var subscription = client.subscribe(query);
        console.log('subscribed!!');
        // when new message is created.
        subscription.on('create', function (message) {
            console.log('new message: ', message.get('text'));
            _this.messages.push(message);
        });
    };
    /**
     * Retrieves previous messages of this chat
     */
    ChatComponent.prototype.getMessages = function (chat) {
        var _this = this;
        var query = new this.parse.Query('Message');
        query
            .equalTo("chat", chat)
            .find().then(function (messages) {
            _this.messages = messages;
            console.log(messages[0].get('text'));
            // scroll to bottom
        }, function (error) {
            _this.logErr(error);
        });
    };
    ChatComponent.prototype.logErr = function (e) {
        console.log('Err: ', e);
    };
    ChatComponent.prototype.closeChat = function () {
        // unset the fields used from Util
        __WEBPACK_IMPORTED_MODULE_4__util__["a" /* Util */].selectedChat = null;
        __WEBPACK_IMPORTED_MODULE_4__util__["a" /* Util */].otherChatUser = null;
        var el = document.getElementsByClassName('chat-window')[0];
        el.style.display = 'none';
        console.log('close');
        //  this.dialog.close();
    };
    ChatComponent.prototype.sendMessage = function () {
        var _this = this;
        this.disableSend(true);
        var msgText = this.text.trim();
        if (msgText === "") {
            this.disableSend(false);
            return;
        }
        if (!this.currentChat) {
            // chat doesn't already exist, create new one the call this method
            this.insertChat(msgText);
        }
        // send the message throug live query
        var Message = this.parse.Object.extend("Message");
        var m = new Message();
        m.set("chat", this.currentChat);
        m.set("sender", this.user);
        m.set("text", msgText);
        m.save(null, {
            success: function (m) {
                // now clear the global field
                _this.text = "";
                // don't push it now, it will be pushed when subscriber receives it
                // this.messages.push(m);
                // TODO hide the progress circle if any
                // also update the Chat
                _this.updateChat(msgText); // sending local var, global might have been cleared
                _this.disableSend(false);
            },
            error: function (m, e) {
                console.log(e);
                _this.disableSend(false);
            }
        });
        console.log(this.text);
    };
    /**
     * Updates the document in Chat collection
     * corresponding to these users
     */
    ChatComponent.prototype.updateChat = function (msgText) {
        if (this.currentChat) {
            this.currentChat.set("sender", this.user);
            this.currentChat.set("lastMessage", msgText);
            this.currentChat.save();
        }
    };
    ChatComponent.prototype.insertChat = function (msgText) {
        var self = this;
        // create new chat
        var Chat = this.parse.Object.extend('Chat');
        var chat = new Chat();
        chat.set("users", [this.user, this.otherUser]);
        chat.set("sender", this.user);
        chat.set("lastMessage", msgText);
        chat.save(null, {
            success: function (c) {
                console.log('new chat sasved');
                self.currentChat = c;
                self.sendMessage();
            },
            error: function (chat, error) {
                console.log(error);
            }
        });
    };
    ChatComponent.prototype.disableSend = function (what) {
        // Send button
        this.isDisabled = what;
    };
    ChatComponent.prototype.closeChatBox = function () {
        //this.closed.emit('closed');
        var el = document.getElementsByClassName('chat-window')[0];
        el.style.display = 'none';
        // console.log('close');
    };
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msg'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChatComponent.prototype, "myScrollContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ChatComponent.prototype, "closed", void 0);
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__live_query_service__["a" /* LiveQueryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_3__live_query_service__["a" /* LiveQueryService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-modal-container {\r\n    padding: 15px;\r\n}\r\n\r\n.custom-modal-header {\r\n    background-color: #f41d1d;\r\n    color: #fff;\r\n    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\r\n    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\r\n    margin-top: -15px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.postButton {\r\n    background-color: #f41d1d;\r\n    color: white;\r\n    position: relative;\r\n    left: 100px;\r\n}\r\n\r\n.cancelButton {\r\n    position: relative;\r\n    left: 120px;\r\n    background-color: #f41d1d;\r\n    color: white;\r\n}\r\n\r\n.media {\r\n    background: url(\"/assets/images/p2.png\");\r\n}\r\n\r\nlabel.cabinet {\r\n    width: 79px;\r\n    height: 50px;\r\n    margin-left: 2px;\r\n    background: url(\"/assets/images/photoIcon.png\") 0 0 no-repeat;\r\n    display: block;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n\r\nlabel.cabinet input.file {\r\n    position: relative;\r\n    height: 100%;\r\n    width: auto;\r\n    opacity: 0;\r\n    -moz-opacity: 0;\r\n    filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid custom-modal-container\">\r\n    <div class=\"row custom-modal-header\">\r\n        <div class=\"col-sm-12\">\r\n            <h1 align=\"center\">Post Travelogue</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n\r\n            <input class=\"form-control\" placeholder=\"Title\" type=\"text\" [(ngModel)]=\"title\" autofocus><br/>\r\n            <textarea class=\"form-control\" placeholder=\"Description\" [(ngModel)]=\"description\" type=\"text\" autofocus>\r\n            </textarea><br/>\r\n             <label class=\"cabinet\"> \r\n            <input type=\"file\"  class='file' ng2FileSelect multiple [uploader]=\"uploader\" id=\"img\" /> </label><br/>\r\n\r\n            <ng-template [ngIf]=\"uploader?.queue?.length>0\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th width=\"50%\">Name</th>\r\n                            <th>Size</th>\r\n                            <th>Progress</th>\r\n                            <th>Status</th>\r\n                            <th>Actions</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of uploader.queue\">\r\n                            <td><strong>{{ item?.file?.name }}</strong></td>\r\n                            <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n                            <td *ngIf=\"uploader.isHTML5\">\r\n                                <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n                                <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n                                <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n                            </td>\r\n                            <td nowrap>\r\n                                <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"item.remove()\">\r\n                                    <span class=\"glyphicon glyphicon-trash\"></span> Remove\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </ng-template>\r\n            <mat-spinner *ngIf=\"spin\" id=\"spinner-login\"></mat-spinner>\r\n\r\n            <button align=\"center\" mat-raised-button (click)=\"getMedialenght()\" class=\"postButton\" [disabled]=\"!description\">\r\n                Post\r\n            </button>\r\n            <button align=\"center\" mat-raised-button (click)=\"cancelPost()\" class='cancelButton'>\r\n                Cancel\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
// import { BSModalContext } from 'angular2-modal/plugins/bootstrap';




// export class CustomModalContext extends BSModalContext {
//   public num1: number;
//   public num2: number;
// }
var URL = '';
var CreateComponent = (function () {
    function CreateComponent(
        // public dialog: DialogRef<CustomModalContext>, 
        parse, _sharedService) {
        this._sharedService = _sharedService;
        this.spin = false;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.parse = parse.sdk();
        // this.context = dialog.context;
        // dialog.setCloseGuard(this);
        // dialog.context.showClose=true;
        this.meta = [];
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.getMedialenght = function () {
        var i = 0;
        var len = this.uploader.queue.length;
        this.saveMedia(len, i);
    };
    CreateComponent.prototype.saveMedia = function (len, i) {
        var _this = this;
        this.spin = true;
        var file;
        var obj = this.uploader.queue;
        if (len == 0) {
            console.log(this.meta);
            this.savePostToServer(this.meta);
            return;
        }
        else {
            file = new this.parse.Parse.File(obj[i]._file.name, obj[i]._file, obj[i]._file.type);
            var type = obj[i]._file.type;
            type = type.substring(0, 5);
            console.log('Upload file-type: ', type);
            var ob = file.save(function (success) {
                _this.meta.push({ type: type, url: success._url });
                len--;
                i++;
                console.log('State of meta: ' + i, _this.meta);
                _this.saveMedia(len, i);
            }, function (error) {
                console.error(error);
                _this.saveMedia(len, i);
            });
        }
    };
    CreateComponent.prototype.savePostToServer = function (meta) {
        var _this = this;
        var Post = this.parse.Object.extend('Post');
        var post = new Post();
        var currentUser = this.parse.User.current();
        // console.log(meta);s
        post.set('Creator', currentUser);
        post.set('title', this.title);
        post.set('body', this.description);
        post.set('meta', meta);
        post.save({
            success: function (post) {
                console.log('Post Saved');
                _this._sharedService.publishData(post);
                _this.spin = false;
                // this.dialog.close();
                //this.saveActivity(post);
                //  this.updatePostData(post.id, this.description, meta, this.title);
                // TODO show SnackBar with success
                console.log('Post Saved');
            },
            error: function (gameScore, error) {
                console.error('Failed to create new object, with error code: ', error);
            }
        });
    };
    /**
     * After post is saved, an activity is related to post is saved
     * @param post ParseObject
     */
    CreateComponent.prototype.cancelPost = function () {
        // this.dialog.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */])
    ], CreateComponent.prototype, "homeComponent", void 0);
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create',
            template: __webpack_require__("../../../../../src/app/create/create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create/create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__shared_service__["a" /* SharedService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_service__["a" /* SharedService */]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directions-map.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionsMapDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_decode_google_map_polyline__ = __webpack_require__("../../../../decode-google-map-polyline/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_decode_google_map_polyline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_decode_google_map_polyline__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// const decodePolyline = require('decode-google-map-polyline');

var DirectionsMapDirective = (function () {
    function DirectionsMapDirective(gmapsApi, activatedRoute) {
        var _this = this;
        this.gmapsApi = gmapsApi;
        this.activatedRoute = activatedRoute;
        this.way = [];
        this.endicon = '/assets/images/end.png';
        this.starticon = '/assets/images/start1.png';
        this.activatedRoute.params.subscribe(function (params) {
            _this.polyline = params['polyline'];
            //       console.log(this.user);
        });
        //var polyline = 'q{xlEqzc}Ls{tAyeXimrBcny@';
        console.log(__WEBPACK_IMPORTED_MODULE_3_decode_google_map_polyline__(this.polyline));
        this.p = __WEBPACK_IMPORTED_MODULE_3_decode_google_map_polyline__(this.polyline);
        var a = [];
        for (var i = 0; i < this.p.length; i++) {
            this.way.push({ location: { lat: this.p[i]['lat'], lng: this.p[i]['lng'] }, stopover: true });
        }
        /* this.way=[
      
        {location:{lat:30.18787,lng:71.46606},
             stopover: true
       },
      
      
       ];*/
    }
    DirectionsMapDirective.prototype.updateDirections = function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            var directionsService = new google.maps.DirectionsService;
            var me = _this;
            _this.directionsDisplay.setMap(map);
            _this.directionsDisplay.setOptions({
                polylineOptions: {
                    strokeWeight: 8,
                    strokeOpacity: 0.7,
                    strokeColor: '#00468c'
                },
                suppressMarkers: true
            });
            _this.directionsDisplay.setDirections({ routes: [] });
            directionsService.route({
                // origin: {placeId : 'ChIJL3KReNC_3zgRtgLbO1xRWWA' },
                origin: { location: { lat: _this.p[0]['lat'], lng: _this.p[0]['lng'] } },
                waypoints: _this.way,
                optimizeWaypoints: true,
                //destination: {placeId : 'ChIJ2QeB5YMEGTkRYiR-zGy-OsI'},
                destination: { location: { lat: _this.p[_this.p.length - 1]['lat'], lng: _this.p[_this.p.length - 1]['lng'] } },
                avoidHighways: true,
                travelMode: google.maps.DirectionsTravelMode.DRIVING
                //travelMode: 'DRIVING'
            }, function (response, status) {
                if (status === 'OK') {
                    me.directionsDisplay.setDirections(response);
                    map.setZoom(30);
                    me.addMarker(me.p[0]['lat'], me.p[0]['lng'], me.starticon);
                    me.addMarker(me.p[me.p.length - 1]['lat'], me.p[me.p.length - 1]['lng'], me.endicon);
                    //console.log(me.getcomputeDistance (latLngA, latLngB));
                    var point = response.routes[0].legs[0];
                    me.estimatedTime = point.duration.text;
                    me.estimatedDistance = point.distance.text;
                    console.log(me.estimatedTime);
                    console.log('Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')');
                }
                else {
                    console.log('Directions request failed due to ' + status);
                }
            });
        });
    };
    DirectionsMapDirective.prototype.addMarker = function (lat, lng, icon) {
        // this.gmapsApi.createMarker({ position: { lat: lat - .001, lng: lng - .001 }, icon: icon });
    };
    DirectionsMapDirective.prototype.getcomputeDistance = function (latLngA, latLngB) {
        return (google.maps.geometry.spherical.computeDistanceBetween(latLngA, latLngB) / 1000).toFixed(2);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DirectionsMapDirective.prototype, "origin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DirectionsMapDirective.prototype, "destination", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DirectionsMapDirective.prototype, "originPlaceId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DirectionsMapDirective.prototype, "destinationPlaceId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DirectionsMapDirective.prototype, "waypoints", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DirectionsMapDirective.prototype, "directionsDisplay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DirectionsMapDirective.prototype, "estimatedTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DirectionsMapDirective.prototype, "estimatedDistance", void 0);
    DirectionsMapDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
            selector: 'appDirectionsMap'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__agm_core__["b" /* GoogleMapsAPIWrapper */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], DirectionsMapDirective);
    return DirectionsMapDirective;
}());



/***/ }),

/***/ "../../../../../src/app/discover-journey/discover-journey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.background {\r\n    background: #e2e1e0;\r\n    height: 100%;\r\n    width:100%;\r\n    }\r\n.mat-card\r\n    {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    padding-bottom: 0px;\r\n    width: 520px;\r\n   \r\n    }\r\n.showlike-icon\r\n    {\r\n    color:red;\r\n    position:absolute;\r\n    left:250px;\r\n    top:25px \r\n    }\r\n.showNoLike{\r\n    background-color: transparent;\r\n    color: white;\r\n    position:absolute;\r\n    left:270px;\r\n    top:25px\r\n}\r\n.showShare-icon{\r\n    width:24px;\r\n    height:24px;\r\n     color:red; \r\n     position:absolute;\r\n     left:320px;\r\n     top:25px\r\n}\r\n.showNoShare{\r\n    background-color: transparent;\r\n    color: white;\r\n    position:absolute;\r\n    left:340px;\r\n    top:25px\r\n}\r\n.card-content\r\n    {\r\n     height: 60px;\r\n    padding-left:24px;\r\n    padding-right:24px;\r\n    text-overflow: ellipsis;\r\n    overflow:hidden;\r\n    text-align: justify; \r\n    \r\n    }\r\n.viewmore{\r\n        padding-left:20px;\r\n        padding-bottom:0px; \r\n        margin:0px; \r\n        display: none;\r\n    }\r\n/* //////////////////////////////////*/\r\n.card-header\r\n\r\n    {\r\n        padding-left:14px;\r\n        padding-right:24px;\r\n    }\r\n.card-action{\r\n    margin-left:5px;\r\n    height:15px;    \r\n    padding-bottom:40px;\r\n    position:relative;\r\n   \r\n\r\n}\r\n.card-title-group{\r\n    margin-left:10%;\r\n    padding-left:24px;\r\n    padding-right:24px;\r\n}\r\n.icon-miles{\r\n    color:#4682B4;\r\n}\r\n.icon-card-time{\r\n    margin-left:100px;\r\n    color:#4682B4;\r\n}\r\n.icon-media{\r\n    margin-left:78px;\r\n    color:#4682B4;\r\n}\r\n.icon-miles-span{\r\n    position:absolute;\r\n    left:20%;\r\n    top:85px;\r\n}\r\n.icon-card-time-span{\r\n    position:absolute;\r\n    left:44%;\r\n    top:85px;\r\n}\r\n.icon-media-span{\r\n    position:absolute;\r\n    left:66%;\r\n    top:85px;\r\n}\r\n.showjourney-icon{\r\n    position:absolute;\r\n    left:480px;\r\n}\r\n:-moz-placeholder {\r\n    color: #a7aabc;\r\n    font-weight: 200;\r\n}\r\n/*::-webkit-input-placeholder {\r\n    color: #a7aabc;\r\n    font-weight: 200;\r\n}*/\r\n.lt-ie9 .search_box input {\r\n    line-height: 26px\r\n}\r\n.custom-modal-container {\r\n    padding: 15px;\r\n}\r\n.custom-modal-header {\r\n    background-color: #219161;\r\n    color: #fff;\r\n    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\r\n    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\r\n    margin-top: -15px;\r\n    margin-bottom: 40px;\r\n}\r\n/*///////// image slider      */\r\n.dialogbox .body {\r\n    position: relative;\r\n    max-width: 300px;\r\n    height: auto;\r\n    margin: 20px 10px;\r\n    padding: 5px;\r\n    background-color: #DADADA;\r\n    border-radius: 3px;\r\n    border: 5px solid #ccc;\r\n}\r\n.body .message {\r\n    min-height: 30px;\r\n    border-radius: 3px;\r\n    font-family: Arial;\r\n    font-size: 14px;\r\n    line-height: 1.5;\r\n    color: #797979;\r\n}\r\n.likeButton{\r\n    width:30px;\r\n    border-bottom: 4px solid red;\r\n    border-radius:0%;\r\n}\r\n.shareButton{\r\nwidth:30px;\r\nborder-bottom: 4px solid  #62C2F9;\r\nborder-radius:0%;\r\n\r\n}\r\n.commentButton{\r\nwidth:30px;\r\nborder-bottom: 4px solid #ADD8E6;\r\nborder-radius:0%;\r\n\r\n}\r\n.icon-view{\r\n    margin-left:63%;\r\n    color:gray;\r\n}\r\n.icon-view-span{\r\n    font-size:small; \r\n    position:absolute;\r\n    left:460px;\r\n    top:12px;\r\n    color:gray;\r\n}\r\ntextarea {\r\n    resize: none;\r\n    overflow: hidden;\r\n}\r\n.comment_box {\r\n    border: 1px solid;\r\n    background-color: #f1f1f1;\r\n    margin-top: 0px;\r\n    color: #e2e1e0;\r\n    display:block;\r\n    \r\n}\r\n.video{\r\n    width: 520px;\r\n     height:180px;\r\n      -o-object-fit:cover;\r\n         object-fit:cover;\r\n      color:black;\r\n}\r\n.playpause {\r\n    background-image:url(/assets/images/play.png);\r\n    background-repeat: no-repeat;\r\n    width: 30%;\r\n    height: 30%;\r\n    position: absolute;\r\n    left: 0%;\r\n    right: 0%;\r\n    top: 0%;\r\n    bottom: 0%;\r\n    margin: auto;\r\n    background-size: contain;\r\n    background-position: center;\r\n    opacity: 1;\r\n}\r\n.wrapper {\r\n    display: table;\r\n    width: auto;\r\n    width: 520px;\r\n    height: 180px;\r\n}\r\n.spinner{\r\n    position:absolute;\r\n    left:40%;\r\n    top:5\r\n}\r\n.time {\r\n    position:absolute;\r\n    left:88%;\r\n    top:1px;  \r\n    font-size: 10px;\r\n    color: #aaa;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/discover-journey/discover-journey.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n  <mat-toolbar color=\"warn\">\r\n  \r\n    <span><h2>Traverous</h2></span>\r\n  \r\n    \r\n  \r\n  \r\n  </mat-toolbar>\r\n  \r\n  \r\n    <div>\r\n      <!--main card content-->\r\n      <mat-card class=\"card\" *ngFor=\"let items of this.journeyData;trackBy:identity;let index=index\" layout-fill >\r\n        <mat-card-header class=\"card-header\">\r\n          <p class=\"time\">\r\n            {{items.posttime}} ago\r\n          </p>\r\n          <img mat-card-avatar src=\"{{items.pimage}}\">\r\n          <mat-card-title>{{items.username}}</mat-card-title>\r\n  \r\n          <mat-card-subtitle>published journey <strong>{{items.title}}</strong></mat-card-subtitle>\r\n          <button mat-icon-button class=\"showjourney-icon\" (click)=\"showJourney(this.identity(index,items))\"><img src='/assets/images/import.png'></button>\r\n  \r\n        </mat-card-header>\r\n  \r\n  \r\n        <mat-card-title-group class=\"card-title-group\">\r\n          <mat-card-subtitle>\r\n            <mat-icon class=\"icon-miles\">directions_walk</mat-icon><span class=\"icon-miles-span\">{{items.distance}} miles</span>\r\n            <mat-icon class=\"icon-card-time\">watch</mat-icon><span class=\"icon-card-time-span\">{{items.time}}</span>\r\n            <mat-icon class=\"icon-media\">perm_media</mat-icon> <span class=\"icon-media-span\">{{items.numMedia}} photos and media</span>\r\n          </mat-card-subtitle>\r\n        </mat-card-title-group>\r\n  \r\n        <mat-card-content style=\"padding-left:24px;padding-right:24px;\">\r\n          <p [id]=\"'contentOverflow-'+index\" class=\"card-content\">\r\n            {{items.description}}\r\n            <br>\r\n  \r\n          </p>\r\n  \r\n          <a [id]=\"'viewmore-'+index\" class='viewmore' (click)='more(index)' href=\"javascript:void(0)\">view more</a>\r\n          \r\n        </mat-card-content>\r\n  \r\n  \r\n  \r\n  \r\n        <carousel style=\"padding-bottom:24px; \" (mouseenter)=\"displayArrow(index,items.length)\" (mouseleave)=\"hideArrow(index)\">\r\n          <slide *ngFor=\"let slidez of items.polyline;\">\r\n  \r\n            <!--    <ng-template [ngIf]=\"slidez.type=='image'\">-->\r\n            <img src=\"https://maps.googleapis.com/maps/api/staticmap?size=615x185&markers=size:mid%7C{{items.startLocation}}&markers=size:mid%7C{{items.endLocation}}&path=weight:7%7Ccolor:red%7Cenc:{{slidez}}&key=AIzaSyCW8ZlZzbtQWtn1LN6FM7JwZ6F28COCQjI\"\r\n              class=\"mat-card-image\" alt=\"Grass\" width=\"520px\" height=\"185px\">\r\n  \r\n            <div class=\"carousel-caption\" style=\"left:100px;top:125px;right:0px; \">\r\n              <mat-icon class=\"showlike-icon\">favorite</mat-icon>\r\n              <h5 class=\"showNoLike\"><strong>{{items.numLikes}} likes</strong></h5>\r\n              <img src=\"/assets/images/share1.png\" class=\"showShare-icon\">\r\n              <h5 class=\"showNoShare\"><strong>4k Shares</strong></h5>\r\n            </div>\r\n            <!--   </ng-template>\r\n                              <ng-template [ngIf]=\"slidez.type=='video'\">\r\n  \r\n                                <div class=\"wrapper\">\r\n                                 <video class='video' style=\"width: 615px; height:180px; object-fit: initial;color:black;\" controls  >\r\n                                  <source src=\"{{slidez.url}}\">\r\n                                  Your browser does not support the video tag.\r\n                                  </video>\r\n                                  <div class=\"playpause\" (click)=\"playPauseVideo(index)\"></div></div>\r\n                              </ng-template>-->\r\n          </slide>\r\n  \r\n          <slide *ngIf='items.video'>\r\n            <div class=\"wrapper\">\r\n              <video class='video' [id]=\"'vid-'+index\" controls>\r\n                <source src=\"{{items.video}}\"> Your browser does not support the video tag.\r\n              </video>\r\n              <div class=\"playpause\" [id]=\"'play-'+index\" (click)=\"playPauseVideo(index)\"></div>\r\n            </div>\r\n          </slide>\r\n        </carousel>\r\n        <div class='comment_box'>\r\n          <mat-list>\r\n            <mat-list-item *ngFor=\"let message of this.messages\">\r\n              <img mat-list-avatar src={{message.image}} alt=\"...\">\r\n              <h6 style=\"padding-left:5px; \">\r\n                <a> <strong>{{message.from}}</strong></a> {{message.message}}</h6>\r\n              <p>\r\n  \r\n  \r\n              </p>\r\n            </mat-list-item>\r\n            \r\n          </mat-list>\r\n  \r\n  \r\n  \r\n        </div>\r\n  \r\n  \r\n  \r\n       \r\n      </mat-card>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/discover-journey/discover-journey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverJourneyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var imagePath = '/assets/images/p2.png';
var DiscoverJourneyComponent = (function () {
    function DiscoverJourneyComponent(
        //private _elementRef: ElementRef,
        parse, router, activatedRoute) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.zindex = 900;
        this.journeyData = [];
        this.messages = [];
        this.activatedRoute.params.subscribe(function (params) {
            _this.journey_id = params['id'];
        });
        this.parse = parse.sdk();
        //var Media = this.parse.Object.extend('Media');
        //var media = new Media();
        var Journey = this.parse.Object.extend('Journeys');
        //var qu=new this.parse.Query(journey);
        //  qu.equalTo('objectId',this.journey_id);
        var journey = new Journey();
        journey.id = this.journey_id;
        console.log(journey);
        var query = new this.parse.Query(Journey);
        query.equalTo("objectId", this.journey_id);
        query.include("createdBy");
        query.find(function (journey) {
            for (var j = 0; j < journey.length; j++) {
                var objt = journey[j];
                var videoUrl;
                var length;
                var dis = Math.floor(objt.get('distance'));
                if (objt.get('videoUrl')) {
                    videoUrl = objt.get('videoUrl');
                    length = 2;
                }
                else {
                    videoUrl = false;
                    length = 1;
                }
                var path;
                if (objt.get('createdBy').get('profilePic'))
                    path = objt.get('createdBy').get('profilePic').url();
                else
                    path = imagePath;
                var uname = objt.get('createdBy').get('name');
                var ms = new Date().getTime() - new Date(objt.get('createdAt')).getTime();
                var time = _this.timeConversion(ms);
                var millisec = new Date(objt.get('endDate')).getTime() - new Date(objt.get('startDate')).getTime();
                var timejourneytake = _this.timeConversion(millisec);
                _this.journeyData.push({
                    id: objt.id, description: objt.get('description'), posttime: time, username: uname, pimage: path,
                    polyline: objt.get('polylines'), numMedia: objt.get('numOfMedia'),
                    distance: dis, title: objt.get('name'), view: objt.get('views'), numLikes: objt.get('likesCounter'),
                    video: videoUrl, length: length, startLocation: objt.get('startLocation'),
                    endLocation: objt.get('endLocation'), time: timejourneytake
                });
            }
            console.log(_this.journeyData);
        });
        this.getComment(journey);
    }
    DiscoverJourneyComponent.prototype.ngOnInit = function () {
    };
    DiscoverJourneyComponent.prototype.getComment = function (journey) {
        var _this = this;
        var Comment = this.parse.Object.extend('CommentJourney');
        var queryC = new this.parse.Query(Comment);
        var messages1 = [];
        queryC.equalTo("journey", journey);
        var u_id;
        // 
        queryC.ascending('createdAt');
        queryC.include('user');
        queryC.find().then(function (comment) {
            // Do stuff
            var promise = _this.parse.Promise.as();
            __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](comment, function (resultObj) {
                promise = promise.then(function (abc) {
                    var ob = resultObj;
                    console.log(ob.get('text'));
                    if (!ob.get('user').get('profilePic')) {
                        _this.messages.push({ from: ob.get('user').get('username'), image: imagePath, message: ob.get('text') });
                        console.log(_this.messages);
                    }
                    else {
                        _this.messages.push({ from: ob.get('user').get('username'), image: ob.get('user').get('profilePic').url(), message: ob.get('text') });
                    }
                });
            });
            return promise;
        });
        // this.messages[index] = messages1;
    };
    DiscoverJourneyComponent.prototype.displayArrow = function (index, length) {
        console.log(index);
        this.carouselComponent.displayArrow(index, length); //calling displayArrow func in carouselComponent to show arrow on card
    };
    DiscoverJourneyComponent.prototype.hideArrow = function (index) {
        console.log('leave');
        this.carouselComponent.hideArrow(index); //calling hideArrow func in carouselComponent to hide arrow on card
    };
    DiscoverJourneyComponent.prototype.playPauseVideo = function (index) {
        console.log('play');
        var el = document.getElementsByClassName('video')[index];
        var em = document.getElementsByClassName('playpause')[index];
        if (el.paused) {
            console.log('play2');
            el.play();
            em.style.opacity = '0';
        }
        else {
            el.pause();
            em.style.opacity = '1';
        }
    };
    DiscoverJourneyComponent.prototype.timeConversion = function (millisec) {
        var seconds = (millisec / 1000).toFixed();
        var minutes = (millisec / (1000 * 60)).toFixed();
        var hours = (millisec / (1000 * 60 * 60)).toFixed();
        var days = (millisec / (1000 * 60 * 60 * 24)).toFixed();
        if (seconds < 60) {
            return seconds + " Sec";
        }
        else if (minutes < 60) {
            return minutes + " Min";
        }
        else if (hours < 24) {
            return hours + " Hrs";
        }
        else {
            return days + " Days";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__carousel_carousel_component__["a" /* CarouselComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__carousel_carousel_component__["a" /* CarouselComponent */])
    ], DiscoverJourneyComponent.prototype, "carouselComponent", void 0);
    DiscoverJourneyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-discover-journey',
            template: __webpack_require__("../../../../../src/app/discover-journey/discover-journey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/discover-journey/discover-journey.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], DiscoverJourneyComponent);
    return DiscoverJourneyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/discover/discover.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.background {\r\n    background: #e2e1e0;\r\n    height: 100%;\r\n    width:100%;\r\n    }\r\n.mat-card\r\n    {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    padding-bottom: 0px;\r\n    width: 520px;\r\n   \r\n    }\r\n.showlike-icon\r\n    {\r\n    color:red;\r\n    position:absolute;\r\n    left:250px;\r\n    top:25px \r\n    }\r\n.showNoLike{\r\n    background-color: transparent;\r\n    color: white;\r\n    position:absolute;\r\n    left:270px;\r\n    top:25px\r\n}\r\n.showShare-icon{\r\n    width:24px;\r\n    height:24px;\r\n     color:red; \r\n     position:absolute;\r\n     left:320px;\r\n     top:25px\r\n}\r\n.showNoShare{\r\n    background-color: transparent;\r\n    color: white;\r\n    position:absolute;\r\n    left:340px;\r\n    top:25px\r\n}\r\n.card-content\r\n    {\r\n     height: 60px;\r\n    padding-left:24px;\r\n    padding-right:24px;\r\n    text-overflow: ellipsis;\r\n    overflow:hidden;\r\n    text-align: justify; \r\n    \r\n    }\r\n.viewmore{\r\n        padding-left:20px;\r\n        padding-bottom:0px; \r\n        margin:0px; \r\n        display: none;\r\n    }\r\n/* //////////////////////////////////*/\r\n.card-header\r\n\r\n    {\r\n        padding-left:14px;\r\n        padding-right:24px;\r\n    }\r\n.card-action{\r\n    margin-left:5px;\r\n    height:15px;    \r\n    padding-bottom:40px;\r\n    position:relative;\r\n   \r\n\r\n}\r\n.card-title-group{\r\n    margin-left:10%;\r\n    padding-left:24px;\r\n    padding-right:24px;\r\n}\r\n.icon-miles{\r\n    color:#4682B4;\r\n}\r\n.icon-card-time{\r\n    margin-left:100px;\r\n    color:#4682B4;\r\n}\r\n.icon-media{\r\n    margin-left:78px;\r\n    color:#4682B4;\r\n}\r\n.icon-miles-span{\r\n    position:absolute;\r\n    left:20%;\r\n    top:85px;\r\n}\r\n.icon-card-time-span{\r\n    position:absolute;\r\n    left:44%;\r\n    top:85px;\r\n}\r\n.icon-media-span{\r\n    position:absolute;\r\n    left:66%;\r\n    top:85px;\r\n}\r\n.showjourney-icon{\r\n    position:absolute;\r\n    left:480px;\r\n}\r\n:-moz-placeholder {\r\n    color: #a7aabc;\r\n    font-weight: 200;\r\n}\r\n/*::-webkit-input-placeholder {\r\n    color: #a7aabc;\r\n    font-weight: 200;\r\n}*/\r\n.lt-ie9 .search_box input {\r\n    line-height: 26px\r\n}\r\n.custom-modal-container {\r\n    padding: 15px;\r\n}\r\n.custom-modal-header {\r\n    background-color: #219161;\r\n    color: #fff;\r\n    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\r\n    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\r\n    margin-top: -15px;\r\n    margin-bottom: 40px;\r\n}\r\n/*///////// image slider      */\r\n.dialogbox .body {\r\n    position: relative;\r\n    max-width: 300px;\r\n    height: auto;\r\n    margin: 20px 10px;\r\n    padding: 5px;\r\n    background-color: #DADADA;\r\n    border-radius: 3px;\r\n    border: 5px solid #ccc;\r\n}\r\n.body .message {\r\n    min-height: 30px;\r\n    border-radius: 3px;\r\n    font-family: Arial;\r\n    font-size: 14px;\r\n    line-height: 1.5;\r\n    color: #797979;\r\n}\r\n.likeButton{\r\n    width:30px;\r\n    border-bottom: 4px solid red;\r\n    border-radius:0%;\r\n}\r\n.shareButton{\r\nwidth:30px;\r\nborder-bottom: 4px solid  #62C2F9;\r\nborder-radius:0%;\r\n\r\n}\r\n.commentButton{\r\nwidth:30px;\r\nborder-bottom: 4px solid #ADD8E6;\r\nborder-radius:0%;\r\n\r\n}\r\n.icon-view{\r\n    margin-left:63%;\r\n    color:gray;\r\n}\r\n.icon-view-span{\r\n    font-size:small; \r\n    position:absolute;\r\n    left:460px;\r\n    top:12px;\r\n    color:gray;\r\n}\r\ntextarea {\r\n    resize: none;\r\n    overflow: hidden;\r\n}\r\n.comment_box {\r\n    border: 1px solid;\r\n    background-color: #f1f1f1;\r\n    margin-top: 0px;\r\n    color: #e2e1e0;\r\n    display: none;\r\n    \r\n}\r\n.video{\r\n    width: 520px;\r\n     height:180px;\r\n      -o-object-fit:cover;\r\n         object-fit:cover;\r\n      color:black;\r\n}\r\n.playpause {\r\n    background-image:url(/assets/images/play.png);\r\n    background-repeat: no-repeat;\r\n    width: 30%;\r\n    height: 30%;\r\n    position: absolute;\r\n    left: 0%;\r\n    right: 0%;\r\n    top: 0%;\r\n    bottom: 0%;\r\n    margin: auto;\r\n    background-size: contain;\r\n    background-position: center;\r\n    opacity: 1;\r\n}\r\n.wrapper {\r\n    display: table;\r\n    width: auto;\r\n    width: 520px;\r\n    height: 180px;\r\n}\r\n.spinner{\r\n    position:absolute;\r\n    left:40%;\r\n    top:5\r\n}\r\n.time {\r\n    position:absolute;\r\n    left:88%;\r\n    top:1px;  \r\n    font-size: 10px;\r\n    color: #aaa;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/discover/discover.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n<mat-toolbar color=\"warn\">\r\n\r\n  <span><h2>Traverous</h2></span>\r\n\r\n  \r\n\r\n\r\n</mat-toolbar>\r\n\r\n\r\n  <div>\r\n    <!--main card content-->\r\n    <mat-card class=\"card\" *ngFor=\"let items of this.journeyData;trackBy:identity;let index=index\" layout-fill >\r\n      <mat-card-header class=\"card-header\">\r\n        <p class=\"time\">\r\n          {{items.posttime}} ago\r\n        </p>\r\n        <img mat-card-avatar src=\"{{items.pimage}}\">\r\n        <mat-card-title>{{items.username}}</mat-card-title>\r\n\r\n        <mat-card-subtitle>published journey <strong>{{items.title}}</strong></mat-card-subtitle>\r\n        <button mat-icon-button class=\"showjourney-icon\" (click)=\"showJourney(this.identity(index,items))\"><img src='/assets/images/import.png'></button>\r\n\r\n      </mat-card-header>\r\n\r\n\r\n      <mat-card-title-group class=\"card-title-group\">\r\n        <mat-card-subtitle>\r\n          <mat-icon class=\"icon-miles\">directions_walk</mat-icon><span class=\"icon-miles-span\">{{items.distance}} miles</span>\r\n          <mat-icon class=\"icon-card-time\">watch</mat-icon><span class=\"icon-card-time-span\">{{items.time}}</span>\r\n          <mat-icon class=\"icon-media\">perm_media</mat-icon> <span class=\"icon-media-span\">{{items.numMedia}} photos and media</span>\r\n        </mat-card-subtitle>\r\n      </mat-card-title-group>\r\n\r\n      <mat-card-content style=\"padding-left:24px;padding-right:24px;\">\r\n        <p [id]=\"'contentOverflow-'+index\" class=\"card-content\">\r\n          {{items.description}}\r\n          <br>\r\n\r\n        </p>\r\n\r\n        <a [id]=\"'viewmore-'+index\" class='viewmore' (click)='more(index)' href=\"javascript:void(0)\">view more</a>\r\n        \r\n      </mat-card-content>\r\n\r\n\r\n\r\n\r\n      <carousel style=\"padding-bottom:24px; \" (mouseenter)=\"displayArrow(index,items.length)\" (mouseleave)=\"hideArrow(index)\">\r\n        <slide *ngFor=\"let slidez of items.polyline;\">\r\n\r\n          <!--    <ng-template [ngIf]=\"slidez.type=='image'\">-->\r\n          <img src=\"https://maps.googleapis.com/maps/api/staticmap?size=615x185&markers=size:mid%7C{{items.startLocation}}&markers=size:mid%7C{{items.endLocation}}&path=weight:7%7Ccolor:red%7Cenc:{{slidez}}&key=AIzaSyCW8ZlZzbtQWtn1LN6FM7JwZ6F28COCQjI\"\r\n            class=\"mat-card-image\" alt=\"Grass\" width=\"520px\" height=\"185px\">\r\n\r\n          <div class=\"carousel-caption\" style=\"left:100px;top:125px;right:0px; \">\r\n            <mat-icon class=\"showlike-icon\">favorite</mat-icon>\r\n            <h5 class=\"showNoLike\"><strong>{{items.numLikes}} likes</strong></h5>\r\n            <img src=\"/assets/images/share1.png\" class=\"showShare-icon\">\r\n            <h5 class=\"showNoShare\"><strong>4k Shares</strong></h5>\r\n          </div>\r\n          <!--   </ng-template>\r\n                            <ng-template [ngIf]=\"slidez.type=='video'\">\r\n\r\n                              <div class=\"wrapper\">\r\n                               <video class='video' style=\"width: 615px; height:180px; object-fit: initial;color:black;\" controls  >\r\n                                <source src=\"{{slidez.url}}\">\r\n                                Your browser does not support the video tag.\r\n                                </video>\r\n                                <div class=\"playpause\" (click)=\"playPauseVideo(index)\"></div></div>\r\n                            </ng-template>-->\r\n        </slide>\r\n\r\n        <slide *ngIf='items.video'>\r\n          <div class=\"wrapper\">\r\n            <video class='video' [id]=\"'vid-'+index\" controls>\r\n              <source src=\"{{items.video}}\"> Your browser does not support the video tag.\r\n            </video>\r\n            <div class=\"playpause\" [id]=\"'play-'+index\" (click)=\"playPauseVideo(index)\"></div>\r\n          </div>\r\n        </slide>\r\n      </carousel>\r\n\r\n\r\n\r\n\r\n     \r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/discover/discover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var imagePath = '/assets/images/p2.png';
var DiscoverComponent = (function () {
    function DiscoverComponent(parse, router) {
        var _this = this;
        this.journeyData = [];
        this.userarray = [];
        this.slideIndex = 1;
        this.messages = [];
        this.likeButton = [];
        this.componentData = null;
        this._router = router;
        this.parse = parse.sdk();
        var currentUser = this.parse.User.current();
        var query = new this.parse.Query(this.parse.User);
        var Journey = this.parse.Object.extend('Journeys');
        this.name = "abc";
        this.profileImg = imagePath;
        //this.curuser_id = currentUser.id;
        //console.log(currentUser.getUsername());
        var query = new this.parse.Query(Journey);
        // query.equalTo("createdBy", currentUser);
        query.descending('createdAt');
        query.include('createdBy');
        query.find(function (journey) {
            for (var j = 0; j < journey.length; j++) {
                var objt = journey[j];
                var videoUrl;
                var length;
                var dis = Math.floor(objt.get('distance'));
                if (objt.get('videoUrl')) {
                    videoUrl = objt.get('videoUrl');
                    length = 2;
                }
                else {
                    videoUrl = false;
                    length = 1;
                }
                var path;
                if (objt.get('createdBy').get('profilePic'))
                    path = objt.get('createdBy').get('profilePic').url();
                else
                    path = imagePath;
                var uname = objt.get('createdBy').get('name');
                var ms = new Date().getTime() - new Date(objt.get('createdAt')).getTime();
                var time = _this.timeConversion(ms);
                var millisec = new Date(objt.get('endDate')).getTime() - new Date(objt.get('startDate')).getTime();
                var timejourneytake = _this.timeConversion(millisec);
                _this.journeyData.push({
                    id: objt.id, description: objt.get('description'), posttime: time, username: uname, pimage: path,
                    polyline: objt.get('polylines'), numMedia: objt.get('numOfMedia'),
                    distance: dis, title: objt.get('name'), view: objt.get('views'), numLikes: objt.get('likesCounter'),
                    video: videoUrl, length: length, startLocation: objt.get('startLocation'),
                    endLocation: objt.get('endLocation'), time: timejourneytake
                });
            }
            console.log(_this.journeyData);
        });
        var user_name;
        var user_Profimg;
    }
    DiscoverComponent.prototype.ngOnInit = function () {
    };
    DiscoverComponent.prototype.ngAfterViewChecked = function () {
        this.checkOverflowContent();
    };
    DiscoverComponent.prototype.checkOverflowContent = function () {
        for (var i = 0; i < this.journeyData.length; i++) {
            var el = document.getElementById('contentOverflow-' + i);
            var em = document.getElementById('viewmore-' + i);
            if (el && em) {
                if (el.clientHeight < el.scrollHeight) {
                    em.style.display = 'block';
                }
                else {
                    el.style.height = '100%';
                }
            }
        }
    };
    DiscoverComponent.prototype.identity = function (index, item) {
        //  console.log(index);
        // console.log(item.id);
        return item.id;
    };
    DiscoverComponent.prototype.showJourney = function (id) {
        //console.log(polyline[0]);
        this._router.navigate(["discover/" + id]);
    };
    DiscoverComponent.prototype.timeConversion = function (millisec) {
        var seconds = (millisec / 1000).toFixed();
        var minutes = (millisec / (1000 * 60)).toFixed();
        var hours = (millisec / (1000 * 60 * 60)).toFixed();
        var days = (millisec / (1000 * 60 * 60 * 24)).toFixed();
        if (seconds < 60) {
            return seconds + " Sec";
        }
        else if (minutes < 60) {
            return minutes + " Min";
        }
        else if (hours < 24) {
            return hours + " Hrs";
        }
        else {
            return days + " Days";
        }
    };
    DiscoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-discover',
            template: __webpack_require__("../../../../../src/app/discover/discover.component.html"),
            styles: [__webpack_require__("../../../../../src/app/discover/discover.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DiscoverComponent);
    return DiscoverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dynamic/dynamic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dynamic/dynamic.component.html":
/***/ (function(module, exports) {

module.exports = "<div #dynamic (closed)=\"closeBox($event)\"></div>"

/***/ }),

/***/ "../../../../../src/app/dynamic/dynamic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicComponent = (function () {
    function DynamicComponent(resolver) {
        this.resolver = resolver;
        this.currentComponent = null;
    }
    Object.defineProperty(DynamicComponent.prototype, "componentData", {
        // component: Class for the component you want to create
        // inputs: An object with key/value pairs mapped to input name/input value
        set: function (data) {
            if (!data) {
                return;
            }
            // Inputs need to be in the following format to be resolved properly
            var inputProviders = Object.keys(data.inputs).map(function (inputName) { return { provide: inputName, useValue: data.inputs[inputName] }; });
            var resolvedInputs = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolve(inputProviders);
            // We create an injector out of the data we want to pass down and this components injector
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].fromResolvedProviders(resolvedInputs, this.dynamic.parentInjector);
            // We create a factory out of the component we want to create
            var factory = this.resolver.resolveComponentFactory(data.component);
            // We create the component using the factory and the injector
            var component = factory.create(injector);
            // We insert the component into the dom container
            this.dynamic.insert(component.hostView);
            // We can destroy the old component is we like by calling destroy
            if (this.currentComponent) {
                this.currentComponent.destroy();
            }
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    DynamicComponent.prototype.ngOnInit = function () {
    };
    DynamicComponent.prototype.closeBox = function (enent) {
        console.log('closed2');
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dynamic', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], DynamicComponent.prototype, "dynamic", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DynamicComponent.prototype, "componentData", null);
    DynamicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dynamic',
            entryComponents: [__WEBPACK_IMPORTED_MODULE_1__chat_chat_component__["a" /* ChatComponent */]],
            template: __webpack_require__("../../../../../src/app/dynamic/dynamic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dynamic/dynamic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]])
    ], DynamicComponent);
    return DynamicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/following-list/following-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .chat-sidebar {\r\n     width: 200px;\r\n     position: fixed;\r\n     height: 100%;\r\n     right: 0px;\r\n     top: 0px;\r\n     padding-top: 10px;\r\n     padding-bottom: 10px;\r\n     border: 1px solid rgba(29, 49, 91, .3);\r\n }\r\n\r\n .sidebar-name {\r\n     padding-left: 10px;\r\n     padding-right: 10px;\r\n     margin-bottom: 4px;\r\n     font-size: 12px;\r\n }\r\n\r\n .sidebar-name span {\r\n     padding-left: 5px;\r\n }\r\n\r\n .sidebar-name a {\r\n     display: block;\r\n     height: 100%;\r\n     text-decoration: none;\r\n     color: inherit;\r\n }\r\n\r\n .sidebar-name:hover {\r\n     background-color: #e1e2e5;\r\n }\r\n\r\n .sidebar-name img {\r\n     width: 32px;\r\n     height: 32px;\r\n     vertical-align: middle;\r\n }\r\n\r\n .sidenav-search {\r\n    width: 300px;\r\n    height: 40px;\r\n    font-size: 100%;\r\n    padding-left: 45%;\r\n    padding-top: 7px;\r\n    background-color: lightgray;\r\n}\r\n\r\n .sidenav-search::-webkit-input-placeholder {\r\n    /* Chrome/Opera/Safari */\r\n    color: gray;\r\n}\r\n\r\n .sidenav-search::-moz-placeholder {\r\n    /* Firefox 19+ */\r\n    color: gray;\r\n}\r\n\r\n .sidenav-search:-ms-input-placeholder {\r\n    /* IE 10+ */\r\n    color: gray;\r\n}\r\n\r\n .sidenav-search:-moz-placeholder {\r\n    /* Firefox 18- */\r\n    color: gray;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/following-list/following-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"position:relative;\">\r\n  <button mat-icon-button style=\"position:absolute;left:100px;top:5px;z-index:1;color:gray;\">\r\n    <mat-icon>search</mat-icon>\r\n  </button>\r\n  <input class=\"sidenav-search\" placeholder=\"Search\">\r\n</div>\r\n<mat-nav-list>\r\n  <mat-list-item class=\"mat-2-line\" *ngFor=\"let item of followinglist; let index = index \" (click)=\"showChatBox(item.username,index)\">\r\n    <span>\r\n      <img [src]=\"item.image+'?'+index\" mat-list-avatar alt=\"{{item.username}}\"/>\r\n    </span>\r\n    <div class=\"mat-list-item-text\" layout=\"column\" style=\"margin-left:10px;\">\r\n      <h5>{{ item.username }}</h5>\r\n    </div>\r\n    <ng-template [ngIf]=\"item.online == 1\">\r\n      <mat-icon class=\"online_button\">wifi_tethering</mat-icon>\r\n    </ng-template>\r\n  </mat-list-item>\r\n</mat-nav-list>"

/***/ }),

/***/ "../../../../../src/app/following-list/following-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("../../../../../src/app/util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var imagePath = '/assets/images/p2.png';
var FollowingListComponent = (function () {
    function FollowingListComponent(parseService) {
        var _this = this;
        this.total_popups = 0;
        this.followinglist = [];
        this.following_id = [];
        this.searchedList = [];
        //arrays of popups ids
        this.popups = [];
        this.componentData = null;
        this.uploaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.parse = parseService.sdk();
        this.user = this.parse.User.current();
        var Connection = this.parse.Object.extend('Connection');
        var query2 = new this.parse.Query(Connection);
        var queryU = new this.parse.Query(this.parse.User);
        query2.equalTo("from", this.user);
        query2.include('to');
        query2.find().then(function (user) {
            for (var i = 0; i < user.length; i++) {
                var obj = user[i];
                if (obj.get('to').get('profilePic'))
                    _this.followinglist.push({ username: obj.get('to').get('username'), image: obj.get('to').get('profilePic').url() });
                else
                    _this.followinglist.push({ username: obj.get('to').get('username'), image: imagePath });
                _this.following_id.push(obj.get('to').id);
            }
        }).then(function (az) {
            queryU.containedIn('objectId', _this.following_id); //to get the name and profile image of user to display on card
            queryU.find().then(function (user) {
                _this.searchedList = user;
            });
        });
    }
    FollowingListComponent.prototype.ngOnInit = function () {
    };
    FollowingListComponent.prototype.showChatBox = function (chatname, index) {
        __WEBPACK_IMPORTED_MODULE_2__util__["a" /* Util */].selectedChat = null;
        console.log(this.searchedList[index]);
        __WEBPACK_IMPORTED_MODULE_2__util__["a" /* Util */].otherChatUser = this.searchedList[index];
        this.uploaded.emit(chatname);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FollowingListComponent.prototype, "uploaded", void 0);
    FollowingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-following-list',
            template: __webpack_require__("../../../../../src/app/following-list/following-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/following-list/following-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__parse_service__["a" /* ParseService */]])
    ], FollowingListComponent);
    return FollowingListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nmat-card {\r\n    width: 80%;\r\n    margin: auto;\r\n    margin-top: 2%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<mat-card class=\"about\">\r\n  <h2>Traverous</h2>\r\n  Traverous is a Social Platform for travelers. On Traverous\r\n  <ul>\r\n    <li>You can <b>record</b> and <b>share</b> your Journeys with Community</li>\r\n    <li><b>Hire Tour Guides</b> to assist you on a tour</li>\r\n    <li><b>Find travelers</b> around you in strange place for help</li>\r\n    <li>Write <b>Travelogues</b></li>\r\n    <li>Write and sell <b>Travel How-tos</b></li>\r\n    <li>Find best <b>Deals</b> on Food, Stay and Transport</li>\r\n  </ul>\r\n</mat-card>\r\n\r\n<mat-card class=\"support\">\r\n  <h3>Feedback</h3>\r\n  We would love to here from you. Soon you will be able to submit your valuble feedback via a web form. But untill then, please forward all your suggestions, queries and complaints to <a href=\"mailto:emadulehsan@gmail.com\" target=\"_blank\"><code>emadulehsan@gmail.com</code></a>.\r\n</mat-card>\r\n\r\n<mat-card class=\"privacy-policy\">\r\n  <h3>Privacy</h3>\r\n  At Traverous, we take privacy as a fundamental right human of the user. We don't share your private data with any third party without your consent. Your data is used anonymously to improve your experience on Traverous.\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help',
            template: __webpack_require__("../../../../../src/app/help/help.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background-card {\r\n    background: #e2e1e0;\r\n    height: 485px;\r\n    }\r\n.mat-card\r\n    {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    padding-bottom: 0px;\r\n    width: 520px;\r\n    margin: 5% 10% 5% 9%;\r\n    }\r\n.showlike-icon\r\n    {\r\n    color:red;\r\n    position:absolute;\r\n    left:250px;\r\n    top:25px \r\n    }\r\n.showNoLike{\r\n    background-color: transparent;\r\n    color: white;\r\n    position:absolute;\r\n    left:270px;\r\n    top:25px\r\n}\r\n.showShare-icon{\r\n    width:24px;\r\n    height:24px;\r\n     color:red; \r\n     position:absolute;\r\n     left:320px;\r\n     top:25px\r\n}\r\n.showNoShare{\r\n    background-color: transparent;\r\n    color: white;\r\n    position:absolute;\r\n    left:345px;\r\n    top:25px\r\n}\r\n.card-content\r\n    {\r\n     height: 60px;\r\n    padding-left:24px;\r\n    padding-right:24px;\r\n    text-overflow: ellipsis;\r\n    overflow:hidden;\r\n    text-align: justify; \r\n    \r\n    }\r\n.viewmore{\r\n        padding-left:20px;\r\n        padding-bottom:0px; \r\n        margin:0px; \r\n        display: none;\r\n    }\r\n/* //////////////////////////////////*/\r\n.card-header\r\n\r\n    {\r\n        padding-left:14px;\r\n        padding-right:24px;\r\n    }\r\n.card-action{\r\n    margin-left:5px;\r\n    height:15px;    \r\n    padding-bottom:40px;\r\n    position:relative;\r\n   \r\n\r\n}\r\n.card-title-group{\r\n    margin-left:10%;\r\n    padding-left:24px;\r\n    padding-right:24px;\r\n}\r\n.icon-miles{\r\n    color:#4682B4;\r\n}\r\n.icon-card-time{\r\n    margin-left:100px;\r\n    color:#4682B4;\r\n}\r\n.icon-media{\r\n    margin-left:78px;\r\n    color:#4682B4;\r\n}\r\n.icon-miles-span{\r\n    position:absolute;\r\n    left:20%;\r\n    top:85px;\r\n}\r\n.icon-card-time-span{\r\n    position:absolute;\r\n    left:44%;\r\n    top:85px;\r\n}\r\n.icon-media-span{\r\n    position:absolute;\r\n    left:66%;\r\n    top:85px;\r\n}\r\n.showjourney-icon{\r\n    position:absolute;\r\n    left:480px;\r\n}\r\n:-moz-placeholder {\r\n    color: #a7aabc;\r\n    font-weight: 200;\r\n}\r\n/*::-webkit-input-placeholder {\r\n    color: #a7aabc;\r\n    font-weight: 200;\r\n}*/\r\n.lt-ie9 .search_box input {\r\n    line-height: 26px\r\n}\r\n.custom-modal-container {\r\n    padding: 15px;\r\n}\r\n.custom-modal-header {\r\n    background-color: #219161;\r\n    color: #fff;\r\n    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\r\n    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\r\n    margin-top: -15px;\r\n    margin-bottom: 40px;\r\n}\r\n/*///////// image slider      */\r\n.dialogbox .body {\r\n    position: relative;\r\n    max-width: 300px;\r\n    height: auto;\r\n    margin: 20px 10px;\r\n    padding: 5px;\r\n    background-color: #DADADA;\r\n    border-radius: 3px;\r\n    border: 5px solid #ccc;\r\n}\r\n.body .message {\r\n    min-height: 30px;\r\n    border-radius: 3px;\r\n    font-family: Arial;\r\n    font-size: 14px;\r\n    line-height: 1.5;\r\n    color: #797979;\r\n}\r\n.likeButton{\r\n    width:30px;\r\n    border-bottom: 4px solid red;\r\n    border-radius:0%;\r\n}\r\n.shareButton{\r\nwidth:30px;\r\nborder-bottom: 4px solid  #62C2F9;\r\nborder-radius:0%;\r\n\r\n}\r\n.commentButton{\r\nwidth:30px;\r\nborder-bottom: 4px solid #ADD8E6;\r\nborder-radius:0%;\r\n\r\n}\r\n.icon-view{\r\n    margin-left:63%;\r\n    color:gray;\r\n}\r\n.icon-view-span{\r\n    font-size:small; \r\n    position:absolute;\r\n    left:460px;\r\n    top:12px;\r\n    color:gray;\r\n}\r\ntextarea {\r\n    resize: none;\r\n    overflow: hidden;\r\n}\r\n.comment_box {\r\n    border: 1px solid;\r\n    background-color: #f1f1f1;\r\n    margin-top: 0px;\r\n    color: #e2e1e0;\r\n    display: none;\r\n    \r\n}\r\n.video{\r\n    width: 520px;\r\n     height:180px;\r\n      -o-object-fit:cover;\r\n         object-fit:cover;\r\n      color:black;\r\n}\r\n.playpause {\r\n    background-image:url(/assets/images/play.png);\r\n    background-repeat: no-repeat;\r\n    width: 30%;\r\n    height: 30%;\r\n    position: absolute;\r\n    left: 0%;\r\n    right: 0%;\r\n    top: 0%;\r\n    bottom: 0%;\r\n    margin: auto;\r\n    background-size: contain;\r\n    background-position: center;\r\n    opacity: 1;\r\n}\r\n.wrapper {\r\n    display: table;\r\n    width: auto;\r\n    width: 520px;\r\n    height: 180px;\r\n}\r\n.spinner{\r\n    position:absolute;\r\n    left:40%;\r\n    top:5\r\n}\r\n.time {\r\n    position:absolute;\r\n    left:88%;\r\n    top:1px;  \r\n    font-size: 10px;\r\n    color: #aaa;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='background-card'>\r\n  <mat-spinner *ngIf=\"spin\" color='red' class=\"spinner\" id=\"spinner-login\"></mat-spinner>\r\n  <mat-card class=\"card\" *ngFor=\"let items of this.postJourneyData;trackBy:identity;let index=index\" layout-fill (click)='incrementView(index,this.identity(index,items),items.type)'>\r\n    <!--main card content-->\r\n    <mat-card-header class=\"card-header\">\r\n      <p class=\"time\" >\r\n        {{items.posttime}} ago\r\n      </p>\r\n      <img mat-card-avatar src=\"{{items.profileImg}}\">\r\n      <mat-card-title>{{items.name}}</mat-card-title>\r\n\r\n      <mat-card-subtitle *ngIf=\"items.type=='journey'\">published journey <strong>{{items.title}}</strong></mat-card-subtitle>\r\n      <button *ngIf=\"items.type=='journey'\" mat-icon-button class=\"showjourney-icon\" (click)=\"showJourney(this.identity(index,items),items.polyline)\"><img src='/assets/images/import.png'></button>\r\n      <mat-card-subtitle *ngIf=\"items.type=='post'\">shared post <strong> {{items.title}}</strong></mat-card-subtitle>\r\n    </mat-card-header>\r\n\r\n    <ng-template [ngIf]=\"items.type=='journey'\">\r\n      <mat-card-title-group class=\"card-title-group\">\r\n        <mat-card-subtitle>\r\n          <mat-icon class=\"icon-miles\">directions_walk</mat-icon><span class=\"icon-miles-span\">{{items.distance}} miles</span>\r\n          <mat-icon class=\"icon-card-time\">watch</mat-icon><span class=\"icon-card-time-span\">{{items.time}}</span>\r\n          <mat-icon class=\"icon-media\">perm_media</mat-icon> <span class=\"icon-media-span\">{{items.noMedia}} photos and media</span>\r\n        </mat-card-subtitle>\r\n      </mat-card-title-group>\r\n    </ng-template>\r\n    <mat-card-content style=\"padding-left:24px;padding-right:24px;\">\r\n      <p [id]=\"'contentOverflow-'+index\" class=\"card-content\">\r\n        {{items.description}}\r\n      </p>\r\n\r\n      <a [id]=\"'viewmore-'+index\" class='viewmore' (click)='more(index)' href=\"javascript:void(0)\">view more</a>\r\n\r\n    </mat-card-content>\r\n\r\n    <ng-template [ngIf]=\"items.type=='post'\">\r\n      <carousel style=\"padding-bottom:24px; \" (mouseenter)=\"displayArrow(index,items.images.length)\" (mouseleave)=\"hideArrow(index)\">\r\n        <slide *ngFor=\"let slidez of items.images;\">\r\n\r\n          <ng-template [ngIf]=\"slidez.type=='image'\">\r\n            <img src=\"{{slidez.url}}\" class=\"mat-card-image\" alt=\"image\" width=\"520px\" height=\"185px\" style=\"object-fit:cover\">\r\n            <div class=\"carousel-caption\" style=\"left:100px;top:125px;right:0px; \">\r\n              <mat-icon class=\"showlike-icon\">favorite</mat-icon>\r\n              <h5 class=\"showNoLike\"><strong>{{items.numLikes}} Likes</strong></h5>\r\n              <img src=\"/assets/images/share1.png\" class=\"showShare-icon\">\r\n              <h5 class=\"showNoShare\"><strong>2 Shares</strong></h5>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"slidez.type=='video'\">\r\n            <div class=\"wrapper\">\r\n              <video class='video' [id]=\"'vid-'+index\" controls>\r\n                <source src=\"{{slidez.url}}\"> Your browser does not support the video tag.\r\n              </video>\r\n              <div class=\"playpause\" [id]=\"'play-'+index\" (click)=\"playPauseVideo(index)\"></div>\r\n            </div>\r\n          </ng-template>\r\n        </slide>\r\n      </carousel>\r\n    </ng-template>\r\n\r\n    <ng-template [ngIf]=\"items.type=='journey'\">\r\n      <carousel style=\"padding-bottom:24px; \" (mouseenter)=\"displayArrow(index,items.length)\" (mouseleave)=\"hideArrow(index)\">\r\n        <slide *ngFor=\"let slidez of items.polyline;\">\r\n\r\n          <!--    <ng-template [ngIf]=\"slidez.type=='image'\">-->\r\n          <img src=\"https://maps.googleapis.com/maps/api/staticmap?size=615x185&markers=size:mid%7C{{items.startLocation}}&markers=size:mid%7C{{items.endLocation}}&path=weight:7%7Ccolor:red%7Cenc:{{slidez}}&maptype=terrain&key=AIzaSyCW8ZlZzbtQWtn1LN6FM7JwZ6F28COCQjI\"\r\n            class=\"mat-card-image\" alt=\"Grass\" width=\"520px\" height=\"185px\">\r\n\r\n          <div class=\"carousel-caption\" style=\"left:100px;top:125px;right:0px; \">\r\n            <mat-icon class=\"showlike-icon\">favorite</mat-icon>\r\n            <h5 class=\"showNoLike\"><strong>{{items.numLikes}} likes</strong></h5>\r\n            <img src=\"/assets/images/share1.png\" class=\"showShare-icon\">\r\n            <h5 class=\"showNoShare\"><strong>4 Shares</strong></h5>\r\n          </div>\r\n          <!--   </ng-template>\r\n                            <ng-template [ngIf]=\"slidez.type=='video'\">\r\n\r\n                              <div class=\"wrapper\">\r\n                               <video class='video' style=\"width: 615px; height:180px; object-fit: initial;color:black;\" controls  >\r\n                                <source src=\"{{slidez.url}}\">\r\n                                Your browser does not support the video tag.\r\n                                </video>\r\n                                <div class=\"playpause\" (click)=\"playPauseVideo(index)\"></div></div>\r\n                            </ng-template>-->\r\n        </slide>\r\n\r\n        <slide *ngIf='items.video'>\r\n          <div class=\"wrapper\">\r\n            <video class='video' [id]=\"'vid-'+index\" controls>\r\n              <source src=\"{{items.video}}\"> Your browser does not support the video tag.\r\n            </video>\r\n            <div class=\"playpause\" [id]=\"'play-'+index\" (click)=\"playPauseVideo(index)\"></div>\r\n          </div>\r\n        </slide>\r\n      </carousel>\r\n\r\n    </ng-template>\r\n\r\n    <mat-card-actions class=\"card-action\">\r\n      <button mat-icon-button class=\"likeButton\" (click)=\"likePost(this.identity(index,items),index)\"><mat-icon  style=\"color:red;\">{{this.likeButton[items.id]}}</mat-icon></button>\r\n      <button mat-icon-button class=\"shareButton\"><img src=\"/assets/images/share1.png\"style=\"width:24px;height24px;color:red;\" ></button>\r\n      <button mat-icon-button (click)=\"this.showComments(index,this.identity(index,items),items.type)\" class=\"commentButton\"> <img src=\"/assets/images/comment.png\"style=\"width:28px;height28px;\" ></button>\r\n      <mat-icon class=\"icon-view\">remove_red_eye</mat-icon><span class=\"icon-view-span\">{{items.view}} views</span>\r\n    </mat-card-actions>\r\n\r\n    <div class='comment_box'>\r\n      <mat-list>\r\n        <mat-list-item *ngFor=\"let message of messages[index]\">\r\n          <img mat-list-avatar src={{message.image}} alt=\"...\">\r\n          <h6 style=\"padding-left:5px; \">\r\n            <a> <strong>{{message.from}}</strong></a> {{message.message}}</h6>\r\n          <p>\r\n\r\n\r\n          </p>\r\n        </mat-list-item>\r\n        <mat-list-item>\r\n          <img mat-list-avatar src={{this.profileImg}} alt=\"...\"> <textarea type=text placeholder=\"comment\" style=\"width:500px;height:40px;margin-left:5px; \"\r\n            (keypress)='saveComment($event,this.identity(index,items),index,items.type)'></textarea>\r\n        </mat-list-item>\r\n      </mat-list>\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </mat-card>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SafeHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util__ = __webpack_require__("../../../../../src/app/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inbox_inbox_component__ = __webpack_require__("../../../../../src/app/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var outlink = '/assets/images/import.png';
var imagePath = '/assets/images/p2.png';
var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());

var HomeComponent = (function () {
    function HomeComponent(_service, parse, router, 
        //overlay: Overlay,
        vcRef, // public modal: Modal,
        _sharedService, cdr) {
        this._service = _service;
        this._sharedService = _sharedService;
        this.cdr = cdr;
        this.listname = [];
        this.counter = 0;
        this.postJourneyData = [];
        this.spin = false;
        this.slideIndex = 1;
        this.messages = [];
        this.likeButton = [];
        this.componentData = null;
        this._router = router;
        //   overlay.defaultViewContainer = vcRef;
        this.spin = true;
        this.parse = parse.sdk();
        var currentUser = this.parse.User.current();
        var query = new this.parse.Query(this.parse.User);
        var Activity = this.parse.Object.extend('Activity');
        this.curuser_id = currentUser.id;
        this.name = currentUser.getUsername();
        var query = new this.parse.Query(Activity);
        this.findingActivity(currentUser, query);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
        if (this._sharedService.getData()) {
            this.userPostUpdateView();
        }
        this.checkOverflowContent();
    };
    HomeComponent.prototype.findingActivity = function (currentUser, query) {
        var _this = this;
        query.descending('createdAt');
        query.include('post');
        query.include('journey');
        query.find().then(function (post) {
            var i = 0;
            var promise2 = _this.parse.Promise.as();
            __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](post, function (resultObj) {
                var obj2 = resultObj;
                var type = obj2.get('verb');
                if (type === 'published_post') {
                    var ob = obj2.get('post');
                    _this.getPost(ob, promise2); //get the post data
                }
                else {
                    var ob = obj2.get('journey');
                    _this.getJourney(ob, promise2); //get the journey data
                }
            });
            _this.spin = false;
            return promise2;
        });
        //      console.log(following_id[1]);
    };
    HomeComponent.prototype.logout = function () {
        this._service.logout();
    };
    HomeComponent.prototype.showComments = function (index, trackBy, type) {
        var _this = this;
        var e = document.getElementsByClassName('comment_box')[index];
        console.log('comment');
        console.log(__WEBPACK_IMPORTED_MODULE_7__util__["a" /* Util */].profileImg);
        this.profileImg = __WEBPACK_IMPORTED_MODULE_7__util__["a" /* Util */].profileImg;
        var messages1 = [];
        if (type == 'post') {
            var Post = this.parse.Object.extend('Post');
            var post = new Post();
            post.id = trackBy;
            var Comment = this.parse.Object.extend('CommentPost');
            var query = new this.parse.Query(Comment);
            query.equalTo("post", post);
        }
        else {
            var Journey = this.parse.Object.extend('Journeys');
            var journey = new Journey();
            journey.id = trackBy;
            var Comment = this.parse.Object.extend('CommentJourney');
            var query = new this.parse.Query(Comment);
            query.equalTo("post", journey);
        }
        if (e.style.display === "none") {
            e.style.display = "block";
            var u_id;
            // 
            query.ascending('createdAt');
            query.include('user');
            query.find().then(function (comment) {
                // Do stuff
                var promise = _this.parse.Promise.as();
                __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](comment, function (resultObj) {
                    promise = promise.then(function (abc) {
                        var ob = resultObj;
                        console.log(ob.get('text'));
                        if (!ob.get('user').get('profilePic')) {
                            messages1.push({ from: ob.get('user').get('username'), image: imagePath, message: ob.get('text') });
                            console.log(_this.messages);
                        }
                        else {
                            messages1.push({ from: ob.get('user').get('username'), image: ob.get('user').get('profilePic').url(), message: ob.get('text') });
                        }
                    });
                });
                return promise;
            });
            this.messages[index] = messages1;
        }
        else {
            e.style.display = 'none';
        }
    };
    HomeComponent.prototype.saveComment = function (event, post_id, index, type) {
        var _this = this;
        if (event.keyCode == 13) {
            var image = __WEBPACK_IMPORTED_MODULE_7__util__["a" /* Util */].profileImg;
            var currentUser = this.parse.User.current();
            if (type == 'post') {
                var Post = this.parse.Object.extend('Post');
                var post = new Post();
                post.id = post_id;
                var Comment = this.parse.Object.extend('CommentPost');
                var comment = new Comment();
                comment.set('post', post);
            }
            else {
                var Journey = this.parse.Object.extend('Journeys');
                var journey = new Journey();
                journey.id = post_id;
                var Comment = this.parse.Object.extend('CommentJourney');
                var comment = new Comment();
                comment.set('journey', journey);
            }
            comment.set('user', currentUser);
            comment.set('text', event.target.value);
            // for now
            comment.set('type', 'plain_comment');
            comment.save({
                success: function (comment) {
                    _this.messages[index].push({ from: _this.name, image: image, message: comment.get('text') });
                    console.log(comment);
                },
                error: function (comment, error) {
                    console.error('Failed to create new object, with error: ' + error);
                }
            });
            event.target.value = "";
        }
    };
    HomeComponent.prototype.identity = function (index, item) {
        //  console.log(index);
        //console.log(item);
        return item.id;
    };
    HomeComponent.prototype.likePost = function (post_id, index) {
        var _this = this;
        var currentUser = this.parse.User.current();
        // var Likes=this.parse.Object.extend('likes');
        //var likes=new Likes();
        var Post = this.parse.Object.extend('Post');
        var post = new Post();
        post.id = post_id;
        if (this.likeButton[post_id] == 'favorite_border') {
            //likes.set('user_id',this.curuser_id);
            //likes.set('post_id',post_id);
            post.relation('likes').add(currentUser);
            post.increment('likesCounter');
            post.save({
                success: function (like) {
                    _this.likeButton[post.id] = 'favorite';
                    // post.add('like',likes);
                    //post.save();
                    console.log('add like');
                },
                error: function (like, error) {
                    console.error('Failed to create new object, with error code: ', error);
                }
            });
        }
        else {
            // var query = new this.parse.Query(Likes);
            var relation = post.relation('likes');
            relation.remove(currentUser);
            post.save({
                success: function (like) {
                    _this.likeButton[post.id] = 'favorite_border';
                    // post.add('like',likes);
                    //post.save();
                    console.log('remove like');
                },
                error: function (like, error) {
                    console.log('Failed to create new object, with error code: ', error);
                }
            });
        }
    };
    HomeComponent.prototype.displayArrow = function (index, length) {
        console.log(length);
        this.carouselComponent.displayArrow(index, length); //calling displayArrow func in carouselComponent to show arrow on card
    };
    HomeComponent.prototype.hideArrow = function (index) {
        console.log('leave');
        this.carouselComponent.hideArrow(index); //calling hideArrow func in carouselComponent to hide arrow on card
    };
    HomeComponent.prototype.playPauseVideo = function (index) {
        console.log('play');
        console.log(index);
        var e = document.getElementById('vid-' + index);
        var em = document.getElementById('play-' + index);
        //var em = document.getElementsByClassName('playpause')[0] as HTMLElement;
        if (e.paused) {
            console.log('play2');
            e.play();
            em.style.opacity = '0';
        }
        else {
            e.pause();
            em.style.opacity = '1';
        }
    };
    HomeComponent.prototype.showJourney = function (id, polyline) {
        // console.log(polyline[0]);
        this._router.navigate(['journey/' + id + '/' + polyline[0]]);
    };
    HomeComponent.prototype.getPost = function (ob, promise2) {
        var _this = this;
        var img = ob.get('meta');
        promise2 = promise2.then(function (abc) {
            var relation = ob.relation('likes');
            return relation.query().find().then(function (results) {
                //  console.log(results);
                // console.log(results.length);
                if (results.length > 0) {
                    _this.likeButton[ob.id] = 'favorite';
                    console.log(results);
                }
                else {
                    _this.likeButton[ob.id] = 'favorite_border';
                }
            });
        });
        var path;
        if (ob.get('Creator').get('profilePic'))
            path = ob.get('Creator').get('profilePic').url();
        else
            path = imagePath;
        var uname = ob.get('Creator').get('name');
        var ms = new Date().getTime() - new Date(ob.get('createdAt')).getTime();
        var time = this.timeConversion(ms);
        this.postJourneyData.push({
            id: ob.id, type: 'post', name: uname, profileImg: path, posttime: time,
            title: ob.get('title'), description: ob.get('body'),
            images: img, view: ob.get('views'), numLikes: ob.get('likesCounter')
        });
    };
    HomeComponent.prototype.getJourney = function (ob, promise2) {
        var _this = this;
        promise2 = promise2.then(function (abc) {
            var relation = ob.relation('likes');
            return relation.query().find().then(function (results) {
                //  console.log(results);
                // console.log(results.length);
                if (results.length > 0) {
                    _this.likeButton[ob.id] = 'favorite';
                }
                else {
                    _this.likeButton[ob.id] = 'favorite_border';
                }
            });
        });
        var path;
        if (ob.get('createdBy').get('profilePic'))
            path = ob.get('createdBy').get('profilePic').url();
        else
            path = imagePath;
        var uname = ob.get('createdBy').get('name');
        console.log('journey');
        var videoUrl;
        var length;
        if (ob.get('videoUrl')) {
            videoUrl = ob.get('videoUrl');
            length = 2;
        }
        else {
            videoUrl = false;
            length = 1;
        }
        var ms = new Date().getTime() - new Date(ob.get('createdAt')).getTime();
        var time = this.timeConversion(ms);
        var millisec = new Date(ob.get('endDate')).getTime() - new Date(ob.get('startDate')).getTime();
        var timejourneytake = this.timeConversion(millisec);
        this.postJourneyData.push({
            id: ob.id, type: 'journey', name: uname, profileImg: path, posttime: time,
            title: ob.get('name'), description: ob.get('description'),
            polyline: ob.get('polylines'), distance: this.getMiles(ob.get('distance')).toFixed(1),
            noMedia: ob.get('numOfMedia'), view: ob.get('views'),
            startLocation: ob.get('startLocation'), endLocation: ob.get('endLocation'),
            video: videoUrl, length: length, numLikes: ob.get('likesCounter'), time: timejourneytake
        });
    };
    /**
     * incrementView
     */
    HomeComponent.prototype.incrementView = function (index, id, type) {
        if (type == 'post') {
            console.log('view incr');
            var Post = this.parse.Object.extend('Post');
            var post = new Post();
            post.id = id;
            post.increment('views');
            post.save();
        }
        else {
            /*   var Journey = this.parse.Object.extend('Journey');
               var journeys = new Journey();
               journeys.id = id;
               journeys.increment('views');
               journeys.save();*/
        }
    };
    HomeComponent.prototype.more = function (index) {
        var el = document.getElementById('contentOverflow-' + index);
        var em = document.getElementById('viewmore-' + index);
        el.style.overflow = 'visible';
        el.style.height = '100%';
        em.style.display = 'none';
    };
    HomeComponent.prototype.checkOverflowContent = function () {
        for (var i = 0; i < this.postJourneyData.length; i++) {
            var el = document.getElementById('contentOverflow-' + i);
            var em = document.getElementById('viewmore-' + i);
            if (el && em) {
                if (el.clientHeight < el.scrollHeight) {
                    em.style.display = 'block';
                }
                else {
                    el.style.height = '100%';
                }
            }
        }
    };
    HomeComponent.prototype.userPostUpdateView = function () {
        var ob = this._sharedService.getData();
        this.postJourneyData.unshift({
            id: ob.id, type: 'post', name: this.name, profileImg: __WEBPACK_IMPORTED_MODULE_7__util__["a" /* Util */].profileImg,
            title: ob.get('title'), description: ob.get('body'),
            images: ob.get('meta'), view: ob.get('views')
        });
        this.likeButton[ob.id] = 'favorite_border';
        this._sharedService.publishData(null);
    };
    HomeComponent.prototype.timeConversion = function (millisec) {
        var seconds = (millisec / 1000).toFixed();
        var minutes = (millisec / (1000 * 60)).toFixed();
        var hours = (millisec / (1000 * 60 * 60)).toFixed();
        var days = (millisec / (1000 * 60 * 60 * 24)).toFixed();
        if (seconds < 60) {
            return seconds + " Sec";
        }
        else if (minutes < 60) {
            return minutes + " Min";
        }
        else if (hours < 24) {
            return hours + " Hrs";
        }
        else {
            return days + " Days";
        }
    };
    HomeComponent.prototype.getMiles = function (i) {
        return i * 0.000621371192;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__carousel_carousel_component__["a" /* CarouselComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__carousel_carousel_component__["a" /* CarouselComponent */])
    ], HomeComponent.prototype, "carouselComponent", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_8__inbox_inbox_component__["a" /* InboxComponent */], __WEBPACK_IMPORTED_MODULE_9__shared_service__["a" /* SharedService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_4__parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_9__shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/inbox/inbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".last-msg {\r\n    color: #777;\r\n}\r\n\r\n.sidenav-search {\r\n    width: 300px;\r\n    height: 40px;\r\n    font-size: 100%;\r\n    padding-left: 5%;\r\n    padding-top: 7px;\r\n    background-color: lightgray;\r\n}\r\n\r\n.sidenav-search::-webkit-input-placeholder {\r\n    /* Chrome/Opera/Safari */\r\n    color: gray;\r\n}\r\n\r\n.sidenav-search::-moz-placeholder {\r\n    /* Firefox 19+ */\r\n    color: gray;\r\n}\r\n\r\n.sidenav-search:-ms-input-placeholder {\r\n    /* IE 10+ */\r\n    color: gray;\r\n}\r\n\r\n.sidenav-search:-moz-placeholder {\r\n    /* Firefox 18- */\r\n    color: gray;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inbox/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"position:relative;\">\r\n  <!--<button mat-icon-button style=\"position:absolute;left:30px;top:5px;z-index:1;color:gray;\">\r\n    <mat-icon>search</mat-icon>\r\n  </button>-->\r\n\r\n  <input class=\"sidenav-search\" [(ngModel)]=\"searchText\" placeholder=\"Search by username to chat\" (keyup.enter)=\"searchUsers()\">\r\n</div>\r\n\r\n<mat-nav-list *ngIf=\"showSearched\">\r\n  <mat-list-item class=\"mat-2-line\" *ngFor=\"let u of searchedList; let i = index \" (click)=\"startChat(i, u.get('name'))\">\r\n    <span>\r\n      <img [src]=\"imgUrl\" class=\"mat-avatar\" alt=\"{{u.get('username')}}\"/>\r\n    </span>\r\n\r\n    <div class=\"mat-list-item-text\" layout=\"column\" style=\"margin-left:10px;\">\r\n      <h5>{{ u.get('name') }}</h5>\r\n    </div>\r\n\r\n    <ng-template [ngIf]=\"u.get('username').length > 0\">\r\n      <mat-icon class=\"message_popup\">lens</mat-icon>\r\n      <span style=\"position:absolute;right:34px; color:white;\">{{u.get('username').length}}</span>\r\n    </ng-template>\r\n  </mat-list-item>\r\n</mat-nav-list>\r\n\r\n<mat-nav-list *ngIf=\"contentReady\">\r\n  <h4>Preivous Chats</h4>\r\n  <mat-list-item class=\"mat-2-line\" *ngFor=\"let c of chats; let i = index \" (click)=\"openChat(i,users[i].get('username'))\">\r\n    <span *ngIf=\"users[i].get('profilePic')\">\r\n      \r\n      <img [src]=\"users[i].get('profilePic').url()\" mat-list-avatar alt=\"{{users[i].get('username')}}\"/>\r\n    </span>\r\n    <span *ngIf=\"!users[i].get('profilePic')\">\r\n      \r\n      <img [src]=\"imgUrl\" mat-list-avatar alt=\"{{users[i].get('username')}}\"/>\r\n    </span>\r\n\r\n    <div class=\"mat-list-item-text\" layout=\"column\" style=\"margin-left:10px;\">\r\n      <h5>{{ users[i].get('name') }}</h5>\r\n      <p class=\"last-msg\">{{ c.get('lastMessage') }}</p>\r\n    </div>\r\n\r\n    \r\n  </mat-list-item>\r\n</mat-nav-list>"

/***/ }),

/***/ "../../../../../src/app/inbox/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("../../../../../src/app/util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var imagePath = '/assets/images/p2.png';
var InboxComponent = (function () {
    function InboxComponent(parseService, // overlay: Overlay,
        vcRef //, public modal: Modal
    ) {
        this.imgUrl = imagePath;
        // Chat objects fetched from server
        this.chats = [];
        /*
        * Parallel with chats array!
        * shows the other user in corresponding chat
        */
        this.users = [];
        // set true when list of chats is ready to display
        this.contentReady = false;
        this.searchText = "";
        this.searchedList = [];
        this.showSearched = false;
        this.componentData = null;
        this.uploaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.parse = parseService.sdk();
        this.user = this.parse.User.current();
        // overlay.defaultViewContainer = vcRef;
    }
    InboxComponent.prototype.ngOnInit = function () {
        this.fetchChatList();
    };
    /**
     * Fetch chat list of this user from server
     */
    InboxComponent.prototype.fetchChatList = function () {
        var _this = this;
        var query = new this.parse.Query('Chat');
        /*
         * chat.users: [user1, user2] // array containig users of this Chat
         */
        query.equalTo("users", this.user);
        query.include("users");
        query.descending("updatedAt");
        query.find({
            success: function (chats) {
                _this.chats = chats;
                _this.optimizeChatList();
            },
            error: function (chats, e) {
                _this.logErr(e);
            }
        });
    };
    /**
     * Populates the users array in parallel with chats array
     */
    InboxComponent.prototype.optimizeChatList = function () {
        var _this = this;
        this.chats.forEach(function (chat) {
            var otherIndex = -1;
            var userArr = chat.get('users');
            if (userArr[0].id != _this.user.id) {
                // this is other user
                otherIndex = 0;
            }
            else {
                otherIndex = 1;
            }
            _this.users.push(chat.get('users')[otherIndex]);
            // console.log(this.users);
        });
        this.contentReady = true;
    };
    InboxComponent.prototype.chat = function () {
        this.htmltoadd = '<div style=" display: block; position: fixed;bottom: 0px;right: 400px;height: 285px;background-color: rgb(237, 239, 244);width: 300px;border: 1px solid rgba(29, 49, 91, .3);" id="' + 'id' + '"><div style="background-color: #bc0f0f;padding: 5px;color: white;font-weight: bold;font-size: 14px;clear: both;"><div style="float: left;">' + 'name' + '</div><div style="float: right;opacity: 0.5;"><a href="#">&#10005</a></div><div style="clear: both"></div></div><div style="height: 100%;overflow-y: scroll;"></div>' + '</div>';
    };
    /**
     * called when item from previous chat-list is clicked
     */
    InboxComponent.prototype.openChat = function (position, chatname) {
        // send chat & otherUser so corresponding chat could be openned
        console.log(chatname);
        __WEBPACK_IMPORTED_MODULE_2__util__["a" /* Util */].selectedChat = this.chats[position];
        __WEBPACK_IMPORTED_MODULE_2__util__["a" /* Util */].otherChatUser = this.users[position];
        this.uploaded.emit(chatname);
    };
    /**
     * Called when an item form searched users' list is clicked
     * Often, corresponding chat doesn't exist
     */
    InboxComponent.prototype.startChat = function (position, chatname) {
        console.log(chatname);
        __WEBPACK_IMPORTED_MODULE_2__util__["a" /* Util */].selectedChat = null;
        __WEBPACK_IMPORTED_MODULE_2__util__["a" /* Util */].otherChatUser = this.searchedList[position];
        this.uploaded.emit(chatname);
    };
    InboxComponent.prototype.logErr = function (e) {
        console.log(e);
    };
    /**
     * Finds all users where username starts with
       * provided username
     */
    InboxComponent.prototype.searchUsers = function ($event) {
        var _this = this;
        this.showSearched = true;
        var username = this.searchText.trim();
        if (username.length < 3) {
            console.log('Err at least 3 chars');
            this.showSearched = false;
            return;
        }
        var query = new this.parse.Query(this.parse.User);
        query.startsWith("username", username)
            .notEqualTo("username", this.user.get('username'))
            .find({
            success: function (usersList) {
                _this.searchedList = usersList;
                console.log(_this.searchedList);
            },
            error: function (users, e) {
                console.log(e);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], InboxComponent.prototype, "uploaded", void 0);
    InboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__("../../../../../src/app/inbox/inbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/inbox/inbox.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] //, public modal: Modal
        ])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/journey-map/journey-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\r\n    height: 535px;\r\n}\r\n\r\n.mapc {\r\n    position: relative;\r\n    height: 535px;\r\n    z-index: 100;\r\n}\r\n\r\n.logo {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 10%;\r\n    margin-left: -50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/journey-map/journey-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mapc\">\r\n  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [styles]=\"mapCustomStyles\" [fitBounds]=\"latlngBounds\">\r\n    <!-- <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"iconurl\">\r\n                    <agm-info-window>\r\n                        <strong>InfoWindow content</strong>\r\n                    </agm-info-window>\r\n                </agm-marker> -->\r\n    <agm-polyline [strokeColor]=\"'#FF0000'\" [strokeOpacity]=\"0.7\">\r\n      <agm-polyline-point *ngFor='let p of this.dePolylines let index=index' [latitude]=\"this.dePolylines[index]['lat']\"\r\n        [longitude]=\"this.dePolylines[index]['lng']\">\r\n      </agm-polyline-point>\r\n    </agm-polyline>\r\n    <agm-marker [latitude]=\"this.dePolylines[0]['lat']\" [longitude]=\"this.dePolylines[0]['lng']\" [iconUrl]=starticon\r\n      [zIndex]='1000'>\r\n      <agm-info-window>\r\n        <strong>start journey </strong>\r\n      </agm-info-window>\r\n    </agm-marker>\r\n    <agm-marker [latitude]=\"this.dePolylines[this.pllength-1]['lat']\" [longitude]=\"this.dePolylines[this.pllength-1]['lng']\"\r\n      [iconUrl]=endicon>\r\n      <agm-info-window>\r\n        <strong> Finish Journey </strong>\r\n      </agm-info-window>\r\n    </agm-marker>\r\n\r\n    < <agm-marker *ngFor='let l of this.journeyData;let index=index;' [latitude]='l.location.latitude' [longitude]='l.location.longitude'\r\n      [iconUrl]='l.icon' [zIndex]='l.zIndex' (mouseOver)='changeZindex(l)' (mouseOut)='changebackZindex(l)'>\r\n      <agm-info-window [disableAutoPan]=\"true\">\r\n        <carousel (mouseenter)=\"displayArrow(index,l.content.length)\" (mouseleave)=\"hideArrow(index)\">\r\n\r\n          <slide *ngFor='let I of l.content'>\r\n            <ng-template [ngIf]=\"l.type=='IMAGE'\">\r\n              <img src=\"{{I}}\"  alt=\"image\" style=\" object-fit:contain; width:400px;height:200px;\" >\r\n              <div class=\"carousel-caption\">\r\n                <h3 style=\"background-color: transparent;color: white;\"></h3>\r\n                <p style=\"background-color: transparent;color: white;\"></p>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"l.type=='VIDEO'\">\r\n\r\n              <div class=\"wrapper\">\r\n                <video class='video' style=\"width: 450px; height:180px; object-fit:contain;color:black;\" controls>\r\n                  <source src=\"{{I}}\"> Your browser does not support the video tag.\r\n                </video>\r\n                <div class=\"playpause\" (click)=\"playPauseVideo(index)\"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n          </slide>\r\n\r\n        </carousel>\r\n        <ng-template [ngIf]=\"l.type=='CHECKIN'\">\r\n          <h3>{{l.text}}</h3>\r\n        </ng-template>\r\n      </agm-info-window>\r\n      </agm-marker>\r\n\r\n\r\n\r\n  </agm-map>\r\n  <!--     <img src=\"/assets/images/trlogo.png\" class=\"logo\" (click)='backHome()'>-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/journey-map/journey-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneyMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directions_map_directive__ = __webpack_require__("../../../../../src/app/directions-map.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_decode_google_map_polyline__ = __webpack_require__("../../../../decode-google-map-polyline/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_decode_google_map_polyline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_decode_google_map_polyline__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// const decodePolyline = require('decode-google-map-polyline');

var imagePath = '/assets/images/p2.png';
var JourneyMapComponent = (function () {
    function JourneyMapComponent(mapsAPILoader, ngZone, gmapsApi, _elementRef, parse, router, activatedRoute) {
        var _this = this;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.gmapsApi = gmapsApi;
        this._elementRef = _elementRef;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.zindex = 900;
        this.journeyData = [];
        this.image = '/assets/images/photo.png';
        this.video = '/assets/images/video.png';
        this.checkin = '/assets/images/checkin1.png';
        this.dePolylines = [];
        this.endicon = '/assets/images/flag.png';
        this.starticon = '/assets/images/start1.png';
        this.activatedRoute.params.subscribe(function (params) {
            _this.journey_id = params['id'];
            _this.polyline = params['polyline'];
        });
        this.dePolylines = __WEBPACK_IMPORTED_MODULE_6_decode_google_map_polyline__(this.polyline);
        this.latitude = this.dePolylines[0]['lat'];
        this.longitude = this.dePolylines[0]['lng'];
        this.pllength = this.dePolylines.length;
        console.log(this.dePolylines);
        this.parse = parse.sdk();
        var Media = this.parse.Object.extend('Media');
        var media = new Media();
        var Journey = this.parse.Object.extend('Journeys');
        //var qu=new this.parse.Query(journey);
        //  qu.equalTo('objectId',this.journey_id);
        var journey = new Journey();
        journey.id = this.journey_id;
        console.log(journey);
        var query = new this.parse.Query(Media);
        query.equalTo("belongsTo", journey);
        query.find(function (jo) {
            for (var j = 0; j < jo.length; j++) {
                var objt = jo[j];
                console.log(objt.get('content')[0]);
                var icon;
                if (objt.get('type') == 'IMAGE')
                    icon = _this.image;
                else if (objt.get('type') == 'VIDEO')
                    icon = _this.video;
                else if (objt.get('type') == 'CHECKIN')
                    icon = _this.checkin;
                _this.journeyData.push({
                    id: objt.id, text: objt.get('text'), location: objt.get('location'),
                    content: objt.get('content'), type: objt.get('type'), zIndex: 900, icon: icon,
                    startAddress: objt.get('startAddress'), finishAddress: objt.get('finishAddress')
                });
            }
            console.log(_this.journeyData);
        });
        var polyline = 'q{xlEqzc}Ls{tAyeXimrBcny@';
        console.log(__WEBPACK_IMPORTED_MODULE_6_decode_google_map_polyline__(polyline));
        this.deLatLng = __WEBPACK_IMPORTED_MODULE_6_decode_google_map_polyline__(polyline);
        var currentUser = this.parse.User.current();
    }
    JourneyMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            _this.latlngBounds = new window['google'].maps.LatLngBounds();
            _this.dePolylines.forEach(function (location) {
                _this.latlngBounds.extend(new window['google'].maps.LatLng(location.lat, location.lng));
            });
        });
    };
    /* if (this.vc.directionsDisplay === undefined) {
       this.mapsAPILoader.load().then(() => {
         this.vc.directionsDisplay = new google.maps.DirectionsRenderer;
       });
  
     }
  
     //Update the directions
     this.vc.updateDirections();
    // this.zoom = 12;*/
    JourneyMapComponent.prototype.setupPlaceChangedListener = function (autocomplete, mode) {
        var _this = this;
        autocomplete.addListener("place_changed", function () {
            _this.ngZone.run(function () {
                //get the place result
                // commented following line because 'google' was not gettting resolved
                // let place: google.maps.places.PlaceResult = autocomplete.getPlace();
                var place = autocomplete.getPlace();
                //verify result
                if (place.geometry === undefined) {
                    return;
                }
                if (mode === 'ORG') {
                    _this.vc.origin = { longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat() };
                    _this.vc.originPlaceId = place.place_id;
                }
                else {
                    _this.vc.destination = { longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat() }; // its a example aleatory position
                    _this.vc.destinationPlaceId = place.place_id;
                }
                if (_this.vc.directionsDisplay === undefined) {
                    _this.mapsAPILoader.load().then(function () {
                        _this.vc.directionsDisplay = new google.maps.DirectionsRenderer;
                    });
                }
                //Update the directions
                _this.vc.updateDirections();
                _this.zoom = 12;
            });
        });
    };
    JourneyMapComponent.prototype.getDistanceAndDuration = function () {
        this.estimatedTime = this.vc.estimatedTime;
        this.estimatedDistance = this.vc.estimatedDistance;
    };
    JourneyMapComponent.prototype.scrollToBottom = function () {
        jQuery('html, body').animate({ scrollTop: jQuery(document).height() }, 3000);
    };
    JourneyMapComponent.prototype.setPickUpLocation = function (place) {
        //verify result
        if (place.geometry === undefined || place.geometry === null) {
            return;
        }
        //set latitude, longitude and zoom
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.zoom = 12;
    };
    JourneyMapComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    JourneyMapComponent.prototype.getMapCusotmStyles = function () {
        // Write your Google Map Custom Style Code Here.
    };
    JourneyMapComponent.prototype.backHome = function () {
        this.router.navigate(['home']);
    };
    JourneyMapComponent.prototype.displayArrow = function (index, length) {
        console.log(length);
        this.carouselComponent.displayArrow(index, length); //calling displayArrow func in carouselComponent to show arrow on card
    };
    JourneyMapComponent.prototype.hideArrow = function (index) {
        console.log('leave');
        this.carouselComponent.hideArrow(index); //calling hideArrow func in carouselComponent to hide arrow on card
    };
    JourneyMapComponent.prototype.changeZindex = function (l) {
        // var el=document.getElementById('mar-' + index);
        //el.style.zIndex='1100';
        console.log('over');
        console.log(l);
        //  this.zindex=1100;
        l.zIndex = 1100;
    };
    JourneyMapComponent.prototype.changebackZindex = function (l) {
        console.log('leave');
        l.zIndex = 900;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("scrollMe"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], JourneyMapComponent.prototype, "scrollContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__carousel_carousel_component__["a" /* CarouselComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__carousel_carousel_component__["a" /* CarouselComponent */])
    ], JourneyMapComponent.prototype, "carouselComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__directions_map_directive__["a" /* DirectionsMapDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__directions_map_directive__["a" /* DirectionsMapDirective */])
    ], JourneyMapComponent.prototype, "vc", void 0);
    JourneyMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-journey-map',
            template: __webpack_require__("../../../../../src/app/journey-map/journey-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/journey-map/journey-map.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* GoogleMapsAPIWrapper */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* GoogleMapsAPIWrapper */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_3__parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], JourneyMapComponent);
    return JourneyMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/live-query.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveQueryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("../../../../../src/app/util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LiveQueryService = (function () {
    function LiveQueryService(parseService) {
        this.parse = parseService.sdk();
    }
    LiveQueryService.prototype.getLiveQueryClient = function () {
        var LiveQueryClient = this.parse.LiveQueryClient;
        var client = new LiveQueryClient({
            applicationId: __WEBPACK_IMPORTED_MODULE_2__util__["a" /* Util */].PARSE_APP_ID,
            serverURL: __WEBPACK_IMPORTED_MODULE_2__util__["a" /* Util */].PARSE_LIVE_QUERY_URL,
            javascriptKey: '',
            masterKey: ''
        });
        return client;
    };
    LiveQueryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__parse_service__["a" /* ParseService */]])
    ], LiveQueryService);
    return LiveQueryService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font: 16px Helvetica;\r\n}\r\n\r\nsection {\r\n    width: 300px;\r\n    height: 600px;\r\n    background: #800000;\r\n    padding: 0 30px 30px 30px;\r\n    margin: 60px auto;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n}\r\n\r\nspan {\r\n    display: block;\r\n    position: relative;\r\n    margin: 0 auto;\r\n    top: -40px;\r\n    height: 80px;\r\n    width: 80px;\r\n    background: url('/assets/images/t1.png') center center no-repeat, #f39c12;\r\n    border-radius: 50%;\r\n    -webkit-box-shadow: 1px 1px 2px rgba(0, 0, 0, .3);\r\n            box-shadow: 1px 1px 2px rgba(0, 0, 0, .3);\r\n}\r\n\r\nh1 {\r\n    font-size: 24px;\r\n    font-weight: 100;\r\n    margin-bottom: 30px;\r\n}\r\n\r\ninput {\r\n    width: 100%;\r\n    background: #bdc3c7;\r\n    border: none;\r\n    height: 30px;\r\n    margin-bottom: 15px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    color: #7f8c8d;\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n}\r\n\r\nbutton {\r\n    width: 100%;\r\n    height: 30px;\r\n    border: none;\r\n    background: #3498db;\r\n    color: #ecf0f1;\r\n    font-weight: 100;\r\n    margin-bottom: 15px;\r\n    border-radius: 5px;\r\n    -webkit-transition: all ease-in-out .2s;\r\n    transition: all ease-in-out .2s;\r\n    border-bottom: 3px solid #2980b9;\r\n}\r\n\r\nbutton:focus {\r\n    outline: none;\r\n}\r\n\r\nbutton:hover {\r\n    background: #2980b9;\r\n}\r\n\r\nh2 {\r\n    font-size: .75em;\r\n}\r\n\r\na {\r\n    color: #e74c3c;\r\n    text-decoration: none;\r\n    -webkit-transition: all ease-in-out .2s;\r\n    transition: all ease-in-out .2s;\r\n}\r\n\r\na:hover {\r\n    color: #c0392b;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n    /* Chrome/Opera/Safari */\r\n    color: black;\r\n}\r\n\r\ninput::-moz-placeholder {\r\n    /* Firefox 19+ */\r\n    color: black;\r\n}\r\n\r\ninput:-ms-input-placeholder {\r\n    /* IE 10+ */\r\n    color: black;\r\n}\r\n\r\ninput:-moz-placeholder {\r\n    /* Firefox 18- */\r\n    color: black;\r\n}\r\n\r\nbody,html {\r\n    height: 535px;\r\n    margin:0px;\r\n\r\n}\r\n\r\n.bg{\r\n    background-image: url('/assets/images/map1.jpeg');\r\n\r\n    /* Full height */\r\n    height: 582px; \r\n\r\n    /* Center and scale the image nicely */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.logo {\r\n    width: 213px;\r\n    height: 36px;\r\n  /*  background: url('/assets/images/log.png') no-repeat;*/\r\n    margin: 30px auto;\r\n}\r\n\r\n.login-block {\r\n    position: relative;\r\n    width: 320px;\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    border-top: 5px solid #ff656c;\r\n    margin: 0 auto;\r\n}\r\n\r\n.login-block h1 {\r\n    text-align: center;\r\n    color: #000;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.login-block input {\r\n    width: 100%;\r\n    height: 42px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    border-radius: 5px;\r\n    border: 1px solid #ccc;\r\n    margin-bottom: 20px;\r\n    font-size: 14px;\r\n    font-family: Montserrat;\r\n    padding: 0 20px 0 50px;\r\n    outline: none;\r\n}\r\n\r\n.login-block input#username {\r\n    background: #fff url('/assets/images/user1.png') 20px top no-repeat;\r\n    background-size: 16px 80px;\r\n}\r\n\r\n.login-block input#username:focus {\r\n    background: #fff url('/assets/images/user1.png') 20px bottom no-repeat;\r\n    background-size: 16px 80px;\r\n}\r\n\r\n.login-block input#password {\r\n    background: #fff url('/assets/images/password.png') 20px top no-repeat;\r\n    background-size: 16px 80px;\r\n}\r\n\r\n.login-block input#password:focus {\r\n    background: #fff url('/assets/images/password.png') 20px bottom no-repeat;\r\n    background-size: 16px 80px;\r\n}\r\n\r\n.login-block input:active, .login-block input:focus {\r\n    border: 1px solid #ff656c;\r\n}\r\n\r\n.login-block button {\r\n    width: 100%;\r\n    height: 40px;\r\n    background: #ff656c;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    border-radius: 5px;\r\n    border: 1px solid #e15960;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    font-family: Montserrat;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.login-block button:hover {\r\n    background: #ff7b81;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"bg\">\r\n    <h1 style=\"text-align:center;color: white;font-size:50px;padding-top:50px;   \"> Welcome to Traverous</h1>\r\n\r\n    <div class=\"login-block\">\r\n      <h1>Login</h1>\r\n      <input type=\"text\" value=\"\" [(ngModel)]=\"user.username\" placeholder=\"Username\" id=\"username\" />\r\n      <input type=\"password\" value=\"\" [(ngModel)]=\"user.password\" placeholder=\"password\" id=\"password\" />\r\n      <h2 style=\"margin-left: 30%;margin-top:1px; \">\r\n      <a href='#'>Forgot Password?</a>\r\n      </h2>\r\n      <mat-spinner *ngIf=\"spin\" style=\"position:absolute;left:40%;top:5%;\" id=\"spinner-login\"></mat-spinner>\r\n      <div>{{errorMsg}}</div>\r\n      <button (click)=\"login()\">Login</button>\r\n      <button [routerLink]=\"['/signup']\">SignUp</button>\r\n    </div>\r\n  </div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, _service, parseService) {
        this.router = router;
        this._service = _service;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__authentication_service__["b" /* User */]('', '', '');
        this.errorMsg = '';
        this.spin = false;
        this.parse = parseService.sdk();
        // if user is already logged in
        if (this.parse.User.current()) {
            this.gotoHome();
        }
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.gotoHome = function () {
        this.router.navigate(['/home']);
    };
    LoginComponent.prototype.login = function () {
        // start the spinner
        var _this = this;
        if (!this.user.username) {
            this.errorMsg = 'Enter Username ';
        }
        else if (!this.user.password) {
            this.errorMsg = 'Enter Password';
        }
        else {
            this.spin = true;
            // pass ParseUser and a callback. The callback receives a boolean
            // which tells if login was successful?
            this._service.login(this.user, function (isLoginSuccessful) {
                // request's response is received. Stop the spinner
                _this.spin = false;
                if (!isLoginSuccessful) {
                    _this.errorMsg = 'Failed to login';
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]],
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__parse_service__["a" /* ParseService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-panel/main-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.mat-sidenav-container{\r\nbackground: #e2e1e0;\r\n\r\n}\r\n.mat-sidenav{\r\nmin-height: 600px;\r\nmax-height: 600px;\r\n}\r\n.right-sidenav{\r\nwidth:300px;\r\nborder-left:1px solid lightgray;\r\n\r\n\r\n}\r\n/deep/ .mat-tab-label{\r\n        min-width: 146px !important;\r\n        \r\n}\r\n/* //////////////////////////////////*/\r\n.label-count {\r\n    position: absolute;\r\n    top: 2px;\r\n    right: 6px;\r\n    font-size: 10px;\r\n    line-height: 15px;\r\n    background-color: #000;\r\n    padding: 0 4px;\r\n    border-radius: 3px;\r\n}\r\n.section-title,\r\n.entry-title {\r\n    display: block;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    margin: 0px 0 25px;\r\n    text-align: center;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    font-size: 36px;\r\n    font-size: 2.25rem;\r\n    letter-spacing: 1px;\r\n}\r\n.section-title a,\r\n.entry-title a {\r\n    color: #333333;\r\n}\r\n.section-title span,\r\n.entry-title span {\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n.section-title span:before,\r\n.entry-title span:before,\r\n.section-title span:after,\r\n.entry-title span:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 4px;\r\n    top: .53em;\r\n    width: 400%;\r\n    border-bottom: 1px solid #ccc;\r\n    border-top: 1px solid #ccc;\r\n}\r\n.section-title span:before,\r\n.entry-title span:before {\r\n    right: 100%;\r\n    margin-right: 45px;\r\n}\r\n.section-title span:after,\r\n.entry-title span:after {\r\n    left: 100%;\r\n    margin-left: 45px;\r\n}\r\n.profile {\r\n    width: 100%;\r\n    position: relative;\r\n    background: #FFF;\r\n    border: 1px solid #D5D5D5;\r\n    padding-bottom: 5px;\r\n    margin-bottom: 20px;\r\n}\r\n.profile .image {\r\n    display: block;\r\n    position: relative;\r\n    z-index: 1;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    border: 5px solid #FFF;\r\n}\r\n.profile .user {\r\n    position: relative;\r\n    padding: 0px 5px 5px;\r\n}\r\n.profile .user .avatar {\r\n    position: absolute;\r\n    left: 20px;\r\n    top: -85px;\r\n    z-index: 2;\r\n}\r\n.profile .user h2 {\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    display: block;\r\n    float: left;\r\n    margin: 4px 0px 0px 135px;\r\n    font-weight: bold;\r\n}\r\n.profile .user .actions {\r\n    float: right;\r\n}\r\n.profile .user .actions .btn {\r\n    margin-bottom: 0px;\r\n}\r\n.profile .info {\r\n    float: left;\r\n    margin-left: 20px;\r\n}\r\n.img-profile {\r\n    height: 100px;\r\n    width: 100px;\r\n}\r\n.img-cover {\r\n    width: 800px;\r\n    height: 300px;\r\n}\r\n#map-canvas {\r\n    width: 100%;\r\n    height: 400px;\r\n}\r\n#update-profile-form {\r\n    margin: 10%;\r\n}\r\n/*///////////////////////////////////////////////// main search box list */\r\n/*.search_box input:focus + .results { display: block }*/\r\n.search_box .results {\r\n    display: block;\r\n    position: absolute;\r\n    top: 37px;\r\n    left: 9px;\r\n    right: 32px;\r\n    z-index: 10;\r\n    padding: 0;\r\n    margin: 0;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #cbcfe2 #c8cee7 #c4c7d7;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n    -ms-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n    -o-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n}\r\n.search_box .results li {\r\n    display: block\r\n}\r\n.search_box .results li:first-child {\r\n    margin-top: -1px\r\n}\r\n.search_box .results li:first-child:before,\r\n.search_box .results li:first-child:after {\r\n    display: block;\r\n    content: '';\r\n    width: 0;\r\n    height: 0;\r\n    position: absolute;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border: 5px outset transparent;\r\n}\r\n.search_box .results li:first-child:before {\r\n    border-bottom: 5px solid #c4c7d7;\r\n    top: -11px;\r\n}\r\n.search_box .results li:first-child:after {\r\n    border-bottom: 5px solid #fdfdfd;\r\n    top: -10px;\r\n}\r\n.search_box .results li:first-child:hover:before,\r\n.search_box .results li:first-child:hover:after {\r\n    display: none\r\n}\r\n.search_box .results li:last-child {\r\n    margin-bottom: -1px\r\n}\r\n.search_box .results a {\r\n    display: block;\r\n    position: relative;\r\n    margin: 0 -1px;\r\n    padding: 6px 40px 6px 10px;\r\n    color: #808394;\r\n    font-weight: 500;\r\n    text-shadow: 0 1px #fff;\r\n    border: 1px solid transparent;\r\n    border-radius: 3px;\r\n}\r\n.search_box .results a span {\r\n    font-weight: 200\r\n}\r\n.search_box .results a:before {\r\n    content: '';\r\n    width: 18px;\r\n    height: 18px;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 10px;\r\n    margin-top: -9px;\r\n}\r\n.search_box .results a:hover {\r\n    text-decoration: none;\r\n    color: #fff;\r\n    text-shadow: 0 -1px rgba(0, 0, 0, 0.3);\r\n    border-color: #2380dd #2179d5 #1a60aa;\r\n    background-color: #338cdf;\r\n    -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.2), 0 1px rgba(0, 0, 0, 0.08);\r\n    -ms-box-shadow: inset 0 1px rgba(255, 255, 255, 0.2), 0 1px rgba(0, 0, 0, 0.08);\r\n    -o-box-shadow: inset 0 1px rgba(255, 255, 255, 0.2), 0 1px rgba(0, 0, 0, 0.08);\r\n    box-shadow: inset 0 1px rgba(255, 255, 255, 0.2), 0 1px rgba(0, 0, 0, 0.08);\r\n}\r\n:-moz-placeholder {\r\n    color: #a7aabc;\r\n    font-weight: 200;\r\n}\r\n/*::-webkit-input-placeholder {\r\n    color: #a7aabc;\r\n    font-weight: 200;\r\n}*/\r\n.lt-ie9 .search_box input {\r\n    line-height: 26px\r\n}\r\n.custom-modal-container {\r\n    padding: 15px;\r\n}\r\n.custom-modal-header {\r\n    background-color: #219161;\r\n    color: #fff;\r\n    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\r\n    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\r\n    margin-top: -15px;\r\n    margin-bottom: 40px;\r\n}\r\n/*///////// image slider      */\r\n.dialogbox .body {\r\n    position: relative;\r\n    max-width: 300px;\r\n    height: auto;\r\n    margin: 20px 10px;\r\n    padding: 5px;\r\n    background-color: #DADADA;\r\n    border-radius: 3px;\r\n    border: 5px solid #ccc;\r\n}\r\n.body .message {\r\n    min-height: 30px;\r\n    border-radius: 3px;\r\n    font-family: Arial;\r\n    font-size: 14px;\r\n    line-height: 1.5;\r\n    color: #797979;\r\n}\r\ntextarea {\r\n    resize: none;\r\n    overflow: hidden;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-panel/main-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"warn\">\r\n\r\n  <span><h2>Traverous</h2></span>\r\n\r\n  <div class=\"search_box\">\r\n    <button mat-icon-button style=\"position:absolute;left:10px;top:2px;z-index:1;\">\r\n    <mat-icon>search</mat-icon>\r\n    </button>\r\n    <input placeholder=\"Search\" class=\"search\" (keyup)=\"searchUser($event)\">\r\n    <ul class=\"results\" *ngIf='this.listname.length > 0'>\r\n      <li><a *ngFor=\"let names of this.listname\" (click)=\"navigateProfile(names.name,names.id)\">{{names.name}}</a></li>\r\n    </ul>\r\n  </div>\r\n\r\n  <button mat-icon-button style=\"margin-left:100px;\" (click)=\"createPost()\">\r\n    <mat-icon>create</mat-icon>\r\n  </button>\r\n\r\n  <button mat-icon-button (click)=\"showNotification()\" tabindex><mat-icon>notifications</mat-icon></button>\r\n  <app-notification></app-notification>\r\n\r\n\r\n  <button mat-icon-button (click)=\"right.toggle();\">\r\n    <!--<mat-icon>message</mat-icon>-->\r\n    <i class=\"material-icons\">chat_bubble_outline</i>\r\n  </button>\r\n\r\n</mat-toolbar>\r\n\r\n\r\n<mat-sidenav-container>\r\n  <mat-sidenav #left (open)=\"mybutton.focus()\" [opened]=\"true\" mode=\"side\" style=\"background-color:#e2e1e0 ;border-right:1px solid lightgray\">\r\n    <mat-nav-list style=\"padding-top:0px; \">\r\n      <!--left sidenav -->\r\n      <div class=\"background-image\">\r\n\r\n        <img src={{this.coverImg}} width=\"260px\" height=\"124px\">\r\n        <mat-list-item class=\"profile-image\">\r\n          <img mat-list-avatar src={{this.profileImg}} style=\"width:50px;height:50px;\">\r\n          <!--profile pic-->\r\n\r\n\r\n        </mat-list-item>\r\n\r\n        <a href=\"javascript:void(0)\" (click)='navigateProfile(this.name,this.curuser_id)'> <b><h2 class=\"profile-name\">{{this.name}}</h2></b></a>\r\n\r\n      </div>\r\n\r\n\r\n      <mat-list-item (click)='travelfeed(0)'>\r\n        <!--left sidenav option in list-->\r\n        <span class='br' style=\"border-left:4px solid blue;width: 10px;height: 40px; position:absolute;left:0px \"></span>\r\n        <!--<mat-icon style=\"color:\t#696969; \">language</mat-icon>-->\r\n        <i class=\"fa fa-globe fa-lg\" style=\"color: #696969;\" aria-hidden=\"true\"></i>\r\n        <div style=\" margin-left:10%\" class=\"mat-list-item-text\">\r\n          <h5>Travel Feed</h5>\r\n        </div>\r\n\r\n      </mat-list-item>\r\n\r\n      <mat-list-item (click)='broadCast(1)'>\r\n        <span class='br' style=\"border-left:4px solid #e2e1e0;width: 10px;height: 40px; position:absolute;left:0px \"></span>\r\n        <mat-icon style=\"color:\t#696969;\">wifitethering</mat-icon>\r\n        <div style=\" margin-left:10%\" class=\"mat-list-item-text\">\r\n          <h5>Broadcast</h5>\r\n        </div>\r\n      </mat-list-item>\r\n\r\n      <mat-list-item (click)='journies(2)'>\r\n        <span class='br' style=\"border-left:4px solid #e2e1e0;width: 10px;height: 40px; position:absolute;left:0px \"></span>\r\n        <mat-icon style=\"color:\t#696969;\">flight</mat-icon>\r\n        <div style=\" margin-left:10%\" class=\"mat-list-item-text\">\r\n          <h5>Journeys</h5>\r\n        </div>\r\n\r\n      </mat-list-item>\r\n\r\n      <mat-divider></mat-divider>\r\n\r\n      <mat-list-item (click)='requests(3)'>\r\n        <span class='br' style=\"border-left:4px solid #e2e1e0;width: 10px;height: 40px; position:absolute;left:0px \"></span>\r\n        <!--<mat-icon style=\"color:\t#696969;\">info</mat-icon>-->\r\n        <!--<i class=\"material-icons\" style=\"color:#696969;\">info_outline</i>-->\r\n        <i class=\"material-icons\" style=\"color:#696969;\">group_add</i>\r\n         \r\n        <div style=\" margin-left:10%\" class=\"mat-list-item-text\">\r\n          <h5>Requests</h5>\r\n          \r\n        </div>\r\n       \r\n      </mat-list-item>\r\n\r\n      <mat-list-item (click)='help(4)'>\r\n        <span class='br' style=\"border-left:4px solid #e2e1e0;width: 10px;height: 40px; position:absolute;left:0px \"></span>\r\n        <!--<mat-icon style=\"color:\t#696969;\">help</mat-icon>-->\r\n        <i class=\"material-icons\" style=\"color: #696969;\">help_outline</i>\r\n        <div style=\" margin-left:10%\" class=\"mat-list-item-text\">\r\n          <h5>Help</h5>\r\n        </div>\r\n      </mat-list-item>\r\n      \r\n\r\n      <mat-list-item (click)='settings(5)'>\r\n        <span class='br' style=\"border-left:4px solid #e2e1e0;width: 10px;height: 40px; position:absolute;left:0px \"></span>\r\n        <mat-icon style=\"color:\t#696969;\">settings</mat-icon>\r\n        <div style=\" margin-left:10%\" class=\"mat-list-item-text\">\r\n          <h5>Settings</h5>\r\n        </div>\r\n      </mat-list-item>\r\n\r\n      <mat-list-item (click)=\"logout()\">\r\n        <!--<mat-icon style=\"color:\t#696969;\">power </mat-icon>-->\r\n        <i class=\"material-icons\" style=\"color:#696969;\">power_settings_new</i>\r\n        <div style=\" margin-left:10%\" class=\"mat-list-item-text\">\r\n          <h5>Log Out</h5>\r\n        </div>\r\n      </mat-list-item>\r\n\r\n    </mat-nav-list>\r\n\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav #right align=\"end\" class='right-sidenav' mode=\"side\">\r\n\r\n    <mat-tab-group>\r\n\r\n      <mat-tab label=\"Messages\" >\r\n        <!-- show inbox component here-->\r\n        <app-inbox (uploaded)=\"openbox($event)\"></app-inbox>\r\n      </mat-tab>\r\n\r\n      <mat-tab label=\"Following\">\r\n        <!-- show following-list component here-->\r\n        <app-following-list (uploaded)=\"openbox($event)\"></app-following-list>\r\n      </mat-tab>\r\n\r\n    </mat-tab-group>\r\n  </mat-sidenav>\r\n\r\n\r\n   \r\n<router-outlet><ng-content select='.background-card'></ng-content> </router-outlet>\r\n\r\n\r\n\r\n\r\n</mat-sidenav-container>\r\n<app-dynamic [componentData]=\"componentData\"></app-dynamic>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-panel/main-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__("../../../../../src/app/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_notification_component__ = __webpack_require__("../../../../../src/app/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inbox_inbox_component__ = __webpack_require__("../../../../../src/app/inbox/inbox.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Overlay, overlayConfigFactory } from 'angular2-modal';
//import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
// import { CustomModalContext, CreateComponent } from '../create/create.component';




var imagePath = '/assets/images/p2.png';
var MainPanelComponent = (function () {
    function MainPanelComponent(_service, parse, router, // overlay: Overlay, 
        vcRef
        //, public modal: Modal
    ) {
        var _this = this;
        this._service = _service;
        this.comment = false;
        this.view = 1;
        this.listname = [];
        this.postData = [];
        this.userarray = [];
        this.slideIndex = 1;
        this.messages = [];
        this.likeButton = [];
        this.componentData = null;
        this.leftSideNavdata = [{
                text: 'Travel Feed',
                icon: 'langauge'
            },
            {
                text: 'Broadcast',
                icon: 'wifitethering'
            },
            {
                text: 'Journies',
                icon: 'flight'
            },
            {
                text: 'Help',
                icon: 'help'
            },
            {
                text: 'About',
                icon: 'flight'
            },
        ];
        this.parse = parse.sdk();
        this._router = router;
        if (!this.parse.User.current()) {
            this.gotoLogin();
        }
        else {
            // go to the url
            this.gotoPage(this._router.url);
        }
        //overlay.defaultViewContainer = vcRef;
        var currentUser = this.parse.User.current();
        var query = new this.parse.Query(this.parse.User);
        var Post = this.parse.Object.extend('Post');
        var Connection = this.parse.Object.extend('Connection');
        this.curuser_id = currentUser.id;
        query.equalTo("username", currentUser.getUsername()); // 
        query.find({
            success: function (user) {
                // Do stuff
                for (var i = 0; i < user.length; i++) {
                    var object = user[i];
                    _this.name = object.get('username'); //getting username to display the profile name in the top left
                    __WEBPACK_IMPORTED_MODULE_4__util__["a" /* Util */].user = _this.name;
                    if (object.get('coverPic')) {
                        __WEBPACK_IMPORTED_MODULE_4__util__["a" /* Util */].coverImg = object.get('coverPic').url(); //getting cover image to display the image in the top left
                        _this.coverImg = __WEBPACK_IMPORTED_MODULE_4__util__["a" /* Util */].coverImg;
                    }
                    if (!object.get('profilePic')) {
                        __WEBPACK_IMPORTED_MODULE_4__util__["a" /* Util */].profileImg = imagePath;
                        _this.profileImg = __WEBPACK_IMPORTED_MODULE_4__util__["a" /* Util */].profileImg;
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_4__util__["a" /* Util */].profileImg = object.get('profilePic').url();
                        _this.profileImg = __WEBPACK_IMPORTED_MODULE_4__util__["a" /* Util */].profileImg;
                    }
                    //console.log(object.get('cover_pic_id').url());
                }
            }
        });
    }
    MainPanelComponent.prototype.ngAfterViewChecked = function () {
        if (__WEBPACK_IMPORTED_MODULE_4__util__["a" /* Util */].profileImg) {
            //this.profileImg=Util.profileImg;
        }
        // console.log('cg'); 
        if (__WEBPACK_IMPORTED_MODULE_4__util__["a" /* Util */].coverImg) {
            //this.coverImg=Util.coverImg;
        }
    };
    MainPanelComponent.prototype.gotoLogin = function () {
        this._router.navigate(['/login']);
    };
    MainPanelComponent.prototype.gotoHome = function () {
        this._router.navigate(['/home']);
    };
    MainPanelComponent.prototype.gotoPage = function (url) {
        this._router.navigate([url]);
    };
    MainPanelComponent.prototype.navigateProfile = function (username, userid) {
        this._router.navigate(['/profile/' + username + '/' + userid]);
    };
    /**
     * it gets called multiple times, each time a character is entered, it gets called
     * So, everytime the query resolves, clear the listname
     */
    MainPanelComponent.prototype.searchUser = function (event) {
        var _this = this;
        this.listname = [];
        if (event.target.value) {
            var query = new this.parse.Query(this.parse.User);
            //console.log(currentUser.getUsername());
            query.startsWith("username", event.target.value); // 
            query.find({
                success: function (users) {
                    // console.log('received: ' + users.length + ' matching names');
                    _this.listname = [];
                    for (var i = 0; i < users.length; i++) {
                        var object = users[i];
                        _this.user_id = object.id;
                        _this.listname.push({ id: _this.user_id, name: object.get('username') });
                        // console.log('Pushed: ', this.listname[i].name);
                        //this.coverImg=object.get('cover_pic_id').url();
                        //this.profileImg=object.get('profilePic').url();
                        //console.log(object.get('cover_pic_id').url());
                    }
                }
            });
        }
    };
    MainPanelComponent.prototype.createPost = function () {
        // return this.modal.open(CreateComponent, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
    };
    MainPanelComponent.prototype.openbox = function (chatname) {
        console.log(chatname);
        this.componentData = {
            component: __WEBPACK_IMPORTED_MODULE_6__chat_chat_component__["a" /* ChatComponent */],
            inputs: {
                showChatName: chatname
            }
        };
    };
    MainPanelComponent.prototype.logout = function () {
        this._service.logout();
    };
    MainPanelComponent.prototype.ngOnInit = function () {
        this.storeForVideo();
        // TODO set following
        // this.listentToRequestPushes();
    };
    /**
     * TODO improve this
     * stores currentUser's token to localStorage
     */
    MainPanelComponent.prototype.storeForVideo = function () {
        var user = this.parse.User.current();
        var userToken = user.get("sessionToken");
        console.log("sessionToken: ", userToken);
        localStorage.setItem("userToken", userToken);
    };
    /**
     * listens for change of localStorage key "numReqs"
     */
    MainPanelComponent.prototype.listentToRequestPushes = function () {
        // TODO improve this hack logic
        // after every 3 seconds
        setInterval(function () {
            var prevReqs = localStorage.getItem("numReqs");
            console.log('cron job for numReqs');
            console.log('prevReqs: ', prevReqs);
        }, 3000);
    };
    MainPanelComponent.prototype.showNotification = function () {
        console.log('show notification dropdown');
        this.notificationComponent.showNotification();
    };
    MainPanelComponent.prototype.travelfeed = function (index) {
        var l = document.getElementsByClassName('br');
        for (var i = 0; i < l.length; i++) {
            var ele = document.getElementsByClassName('br')[i];
            ele.style.borderLeftColor = '#e2e1e0';
        }
        console.log(l.length);
        var el = document.getElementsByClassName('br')[index];
        el.style.borderLeftColor = 'blue';
        this.gotoHome();
    };
    MainPanelComponent.prototype.broadCast = function (index) {
        var l = document.getElementsByClassName('br');
        for (var i = 0; i < l.length; i++) {
            var ele = document.getElementsByClassName('br')[i];
            ele.style.borderLeftColor = '#e2e1e0';
        }
        console.log(l.length);
        var el = document.getElementsByClassName('br')[index];
        el.style.borderLeftColor = 'blue';
        this._router.navigate(['/broadcast']);
    };
    MainPanelComponent.prototype.journies = function (index) {
        var l = document.getElementsByClassName('br');
        for (var i = 0; i < l.length; i++) {
            var ele = document.getElementsByClassName('br')[i];
            ele.style.borderLeftColor = '#e2e1e0';
        }
        console.log(l.length);
        var el = document.getElementsByClassName('br')[index];
        el.style.borderLeftColor = 'blue';
        this._router.navigate(['/myJournies']);
    };
    MainPanelComponent.prototype.help = function (index) {
        var l = document.getElementsByClassName('br');
        for (var i = 0; i < l.length; i++) {
            var ele = document.getElementsByClassName('br')[i];
            ele.style.borderLeftColor = '#e2e1e0';
        }
        console.log(l.length);
        var el = document.getElementsByClassName('br')[index];
        el.style.borderLeftColor = 'blue';
        this._router.navigate(['/help']);
    };
    /**
     * takes to Following Requests page
     */
    MainPanelComponent.prototype.requests = function (index) {
        var l = document.getElementsByClassName('br');
        for (var i = 0; i < l.length; i++) {
            var ele = document.getElementsByClassName('br')[i];
            ele.style.borderLeftColor = '#e2e1e0';
        }
        console.log(l.length);
        var el = document.getElementsByClassName('br')[index];
        el.style.borderLeftColor = 'blue';
        // go to requsts page
        this._router.navigate(['/requests']);
    };
    MainPanelComponent.prototype.settings = function (index) {
        var l = document.getElementsByClassName('br');
        for (var i = 0; i < l.length; i++) {
            var ele = document.getElementsByClassName('br')[i];
            ele.style.borderLeftColor = '#e2e1e0';
        }
        console.log(l.length);
        var el = document.getElementsByClassName('br')[index];
        el.style.borderLeftColor = 'blue';
        this._router.navigate(['/settings']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__notification_notification_component__["a" /* NotificationComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__notification_notification_component__["a" /* NotificationComponent */])
    ], MainPanelComponent.prototype, "notificationComponent", void 0);
    MainPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-panel',
            template: __webpack_require__("../../../../../src/app/main-panel/main-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-panel/main-panel.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_7__inbox_inbox_component__["a" /* InboxComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]
            //, public modal: Modal
        ])
    ], MainPanelComponent);
    return MainPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notification/notification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown {\r\n    margin-left: -30px;\r\n    display: inline-block;\r\n}\r\n\r\n.btn-group .btn+.dropdown-toggle,\r\n.btn-group-vertical .btn+.dropdown-toggle {\r\n    border-left: 1px solid rgba(0, 0, 0, 0.08) !important;\r\n}\r\n\r\n.bootstrap-select .dropdown-toggle:focus,\r\n.bootstrap-select .dropdown-toggle:active {\r\n    outline: none !important;\r\n}\r\n\r\n.material-icons {\r\n    position: relative;\r\n    top: 7px;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.label-count {\r\n    position: absolute;\r\n    top: 2px;\r\n    right: 6px;\r\n    font-size: 10px;\r\n    line-height: 15px;\r\n    background-color: #000;\r\n    padding: 0 4px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.dropdown-menu {\r\n    background-color: #fff;\r\n    position: fixed;\r\n    color: black;\r\n    display: none;\r\n    top: 65px;\r\n    left: 68%;\r\n    width: 380px;\r\n    margin-left: 0px;\r\n}\r\n\r\nmat-raised-button {\r\n    min-width: 30px;\r\n}\r\n\r\n.dropdown-menu:focus {\r\n    display: block;\r\n}\r\n\r\n.body {\r\n    background-color: #fff;\r\n    -webkit-transition: all 0.5s;\r\n    transition: all 0.5s;\r\n    font-family: 'Roboto', Arial, Tahoma, sans-serif;\r\n}\r\n\r\nul.dropdown-menu {\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.dropdown-menu li.selected a {\r\n    background-color: #eee !important;\r\n    color: #555 !important;\r\n}\r\n\r\n.dropdown-menu .active a {\r\n    background-color: transparent;\r\n    color: #333 !important;\r\n}\r\n\r\n.dropdown-menu .notify {\r\n    background-color: #F44336 !important;\r\n    color: #fff !important;\r\n    border: none !important;\r\n}\r\n\r\n.dropdown-menu .divider {\r\n    margin: 5px 0;\r\n}\r\n\r\n.header {\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n    min-width: 270px;\r\n    border-bottom: 1px solid #eee;\r\n    text-align: center;\r\n    padding: 4px 0 6px 0;\r\n}\r\n\r\n.menu {\r\n    padding-left: 0;\r\n}\r\n\r\n.menu.tasks h4 {\r\n    color: #333;\r\n    font-size: 13px;\r\n    margin: 0 0 8px 0;\r\n}\r\n\r\n.menu.tasks h4 small {\r\n    float: right;\r\n    margin-top: 6px;\r\n}\r\n\r\n.menu.tasks .progress {\r\n    height: 7px;\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.menu .icon-circle {\r\n    width: 36px;\r\n    height: 36px;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    text-align: center;\r\n    display: inline-block;\r\n}\r\n\r\n.menu .icon-circle i {\r\n    font-size: 18px;\r\n    line-height: 36px;\r\n}\r\n\r\n.menu li {\r\n    border-bottom: 1px solid #eee;\r\n}\r\n\r\n.menu li:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.menu li a {\r\n    padding: 7px 11px;\r\n    text-decoration: none;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n\r\n.menu li a:hover {\r\n    background-color: #e9e9e9;\r\n}\r\n\r\n.menu .menu-info {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 220px;\r\n    top: 3px;\r\n    left: 5px;\r\n}\r\n\r\n.menu .menu-info h4 {\r\n    font-size: 13px;\r\n    color: #333;\r\n}\r\n\r\n.time {\r\n    font-size: 2px;\r\n    color: #aaa;\r\n}\r\n\r\n.material-icons {\r\n    font-size: 10px;\r\n    color: #aaa;\r\n}\r\n\r\n.dropdown-menu .footer a {\r\n    text-align: center;\r\n    border-top: 1px solid #eee;\r\n    padding: 5px 0 5px 0;\r\n    font-size: 12px;\r\n    margin-bottom: -5px;\r\n}\r\n\r\n.dropdown-menu .footer a:hover {\r\n    background-color: transparent;\r\n}\r\n\r\n.dropdown-menu>li>a {\r\n    padding: 7px 18px;\r\n    color: #666;\r\n    -webkit-transition: all 0.5s;\r\n    transition: all 0.5s;\r\n    font-size: 14px;\r\n    line-height: 25px;\r\n}\r\n\r\n.dropdown-menu>li>a:hover {\r\n    background-color: rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.dropdown-menu>li>a i.material-icons {\r\n    float: left;\r\n    margin-right: 7px;\r\n    margin-top: 2px;\r\n    font-size: 20px;\r\n}\r\n\r\n.dropdown-animated {\r\n    -webkit-animation-duration: .3s !important;\r\n    animation-duration: .3s !important;\r\n}\r\n\r\n.bg-light-green {\r\n    background-color: #8BC34A !important;\r\n    color: #fff;\r\n}\r\n\r\n.bg-light-green .content .text,\r\n.bg-light-green .content .number {\r\n    color: #fff !important;\r\n}\r\n\r\n.navbar-nav>li>a {\r\n    padding: 3px 7px 2px 7px;\r\n    margin-top: 0px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.navbar-nav .dropdown-menu {\r\n    margin-top: 0px !important;\r\n}\r\n\r\n.navbar .navbar-nav {\r\n    margin-top: -12px;\r\n    margin-bottom: 1px;\r\n    margin-left: -7px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"dropdown-menu\" id='dropmenu'>\r\n    <li class=\"header\">NOTIFICATIONS</li>\r\n    <mat-list>\r\n        <mat-list-item *ngFor='let data of this.notifyData; let index=index;'>\r\n            <img mat-list-avatar src=\"{{data.actorImage}}\" alt=\"...\">\r\n            <div class=\"mat-list-item-text\" style=\"padding-left:2px;white-space: normal \">\r\n                <!--<h6 *ngIf=\"data.type=='Request'\" style=\"font-size:13px;  \">\r\n                    <a> <strong>{{data.actorName}} </strong></a> wants to follow you</h6>\r\n                <h6 *ngIf=\"data.type=='comment'\" style=\"font-size:13px;  \">\r\n                    <a> <strong>{{data.actorName}} </strong></a> commented on your post</h6>-->\r\n\r\n\r\n                <h6 style=\"font-size:13px;\">{{ data.sentence }}</h6>\r\n\r\n                <p class=\"time\" style=\"font-size:10px;\">\r\n                    {{data.time}} ago\r\n                </p>\r\n            </div>\r\n\r\n            <!-- remove buttons -->\r\n            <!--<button *ngIf=\"data.type=='Request'\" mat-raised-button color='warn' style=\"position:absolute;left:230px;top:25px;min-width:25px; height:25px; \"\r\n                (click)='allowFollowing(index,data.actorId,data.id)'>Allow</button>\r\n            <button *ngIf=\"data.type=='Request'\" mat-raised-button style=\"position:absolute;left:305px;top:25px;min-width:25px; height:25px;background-color:gray;\"\r\n                (click)='rejectFollowingRequest(index,data.id)'>Delete</button>-->\r\n        </mat-list-item>\r\n    </mat-list>\r\n    <li class=\"footer\">\r\n        <a href=\"javascript:void(0);\">View All Notifications</a>\r\n    </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("../../../../../src/app/util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var imagePath = '/assets/images/p2.png';
var NotificationComponent = (function () {
    function NotificationComponent(parse) {
        this.notifyData = [];
        this.parse = parse.sdk();
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this.getNotifications();
    };
    NotificationComponent.prototype.getNotifications = function () {
        // console.log('getting Notifications');
        var _this = this;
        // due to ACL, all Notifications that this user can access will be fetched
        var Notification = this.parse.Object.extend('Notification');
        var query = new this.parse.Query(Notification);
        query.descending('updatedAt');
        query.include('actor');
        query.find({
            success: function (notifications) {
                _this.processNotifications(notifications);
            },
            error: function (notifications, error) {
                console.error(error);
            }
        });
    };
    NotificationComponent.prototype.processNotifications = function (notifications) {
        var _this = this;
        // remove previous
        this.notifyData = [];
        notifications.forEach(function (noti) {
            var image;
            var millisec = new Date().getTime() - new Date(noti.get('updatedAt')).getTime();
            var time = _this.timeConversion(millisec);
            // get first actor's profilePic
            if (noti.get('actors')[0].get('profilePic')) {
                image = noti.get('actors')[0].get('profilePic').url();
            }
            else {
                image = imagePath;
            }
            var sentence = __WEBPACK_IMPORTED_MODULE_2__util__["a" /* Util */].getSentence(noti);
            // console.log(sentence);
            // set the notification data
            _this.notifyData.push({
                id: noti.id,
                actorImage: image,
                sentence: sentence,
                time: time
            });
        });
    };
    NotificationComponent.prototype.showNotification = function () {
        var el = document.getElementById('dropmenu');
        if (el.style.display == 'none') {
            el.style.display = 'block';
            // now also refresh the notifications
            this.getNotifications();
        }
        else {
            el.style.display = 'none';
        }
    };
    NotificationComponent.prototype.allowFollowing = function (index, userId, notifi_id) {
        var _this = this;
        var currentUser = this.parse.User.current();
        console.log(userId);
        var user = new this.parse.User();
        user.id = userId;
        var Connection = this.parse.Object.extend('Connection');
        var connection = new Connection();
        var Notification = this.parse.Object.extend('Notifications');
        var notification = new Notification();
        notification.id = notifi_id;
        connection.set('from', user);
        connection.set('to', currentUser);
        connection.save({
            success: function (gameScore) {
                _this.notifyData.splice(index, 1);
                notification.destroy();
                console.log('friend');
            },
            error: function (gameScore, error) {
                console.log('Failed to create new object, with error code: ', error);
            }
        });
    };
    NotificationComponent.prototype.rejectFollowingRequest = function (index, notifi_id) {
        var _this = this;
        var Notification = this.parse.Object.extend('Notifications');
        var notification = new Notification();
        notification.id = notifi_id;
        notification.destroy({
            success: function (data) {
                _this.notifyData.splice(index, 1);
            }
        });
    };
    NotificationComponent.prototype.timeConversion = function (millisec) {
        var seconds = (millisec / 1000).toFixed(1);
        var minutes = (millisec / (1000 * 60)).toFixed(1);
        var hours = (millisec / (1000 * 60 * 60)).toFixed(1);
        var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);
        if (seconds < 60) {
            return seconds + " Sec";
        }
        else if (minutes < 60) {
            return minutes + " Min";
        }
        else if (hours < 24) {
            return hours + " Hrs";
        }
        else {
            return days + " Days";
        }
    };
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__("../../../../../src/app/notification/notification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__parse_service__["a" /* ParseService */]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/parse.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__("../../../../../src/app/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse_dist_parse_js__ = __webpack_require__("../../../../parse/dist/parse.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse_dist_parse_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse_dist_parse_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// var ParseLibrary = require('parse/dist/parse.js');

var ParseService = (function () {
    function ParseService() {
        this.parse = __WEBPACK_IMPORTED_MODULE_2_parse_dist_parse_js__;
        this.init();
    }
    ParseService.prototype.init = function () {
        this.parse.initialize(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* Util */].PARSE_APP_ID);
        this.parse.serverURL = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* Util */].PARSE_SERVER_URL;
    };
    ParseService.prototype.sdk = function () {
        return this.parse;
    };
    ParseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ParseService);
    return ParseService;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".coverImg {\r\n    /*background: url(/assets/images/bg.jpg) bottom center;*/\r\n    \r\n    \r\n    padding: 0;\r\n    margin: 0 !important;\r\n    overflow-x: hidden;\r\n    background-repeat: no-repeat;\r\n    min-height: auto;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    max-height: 400px;\r\n    background-size: 100% 400px;\r\n    background-position: center center;\r\n}\r\n.background-card {\r\n    background: #e2e1e0;\r\n    height: 485px;\r\n    }\r\n.main{margin-top: 110px}\r\n.title h1{color: #fff; margin-top: 0px;}\r\n.title span, .location, .social {color: #f3f3f3}\r\n.title span {\r\n    color: #f3f3f3;\r\n    font-size: 14px;\r\n}\r\n.fullname {\r\n    color: #f3f3f3;\r\n    font-size: 30px;\r\n}\r\n.social {\r\n    font-size: 22px;\r\n}\r\n.content-row:after {\r\n    display: block;\r\n    content: \"\";\r\n    height: .4px;\r\n    background: #ccc;\r\n    width: 100%;\r\n    margin-top: 40px;\r\n}\r\n.counter-row {\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n}\r\n.row {\r\n    padding-left: 5px;\r\n}\r\n.profileImg {\r\n    border-radius: 100%;\r\n    width:70px;\r\n    height: 70px; \r\n}\r\n.follow-btn {\r\n    position: absolute;\r\n    top: 390px;\r\n}\r\n.mat-sidenav-content {\r\n    overflow: hidden !important;\r\n}\r\nbutton.follow-btn.mat-fab {\r\n    position: relative;\r\n    right: -90%;\r\n    top: -25px;\r\n}\r\n.stats {\r\n    font-size: 70%;\r\n}\r\nlabel.cabinet {\r\n    width: 79px;\r\n    position: absolute;\r\n    top:-80px;\r\n    left:-90px;\r\n    height: 50px;\r\n    margin-left: 2px;\r\n    background: url(\"/assets/images/photoIcon.png\") 0 0 no-repeat;\r\n    display: block;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\nlabel.cabinet input.file {\r\n    position: relative;\r\n    height: 100%;\r\n    width: auto;\r\n    opacity: 0;\r\n    -moz-opacity: 0;\r\n    filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);\r\n}\r\nlabel.cabinetp {\r\n    width: 79px;\r\n    height: 50px;\r\n    position: absolute;\r\n    top:0px;\r\n    margin-left: 2px;\r\n    background: url(\"/assets/images/photoIcon.png\") 0 0 no-repeat;\r\n    display: block;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\nlabel.cabinetp input.file {\r\n    position: absolute;\r\n    height: 80%;\r\n    width: auto;\r\n    opacity: 0;\r\n    -moz-opacity: 0;\r\n    filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background-card\">\r\n<div class=\"container coverImg\"  [ngStyle]=\"{'background-image': 'url(' + coverImgUser + ')'}\">\r\n    <div class=\"row main\">\r\n        <div class=\"col-mat-8 col-mat-offset-2 col-lg-8 col-lg-offset-2 col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-mat-8 col-lg-8 col-xs-12 col-sm-12 content-row\">\r\n                    <div class=\"row\">\r\n                        <ng-template [ngIf]='profileUserId == currentUser.id'>\r\n                        <label class=\"cabinet\"> \r\n                            <input type=\"file\"  class='file'  multiple  id=\"cover\" (change)=\"uploadCoverImg($event)\"/> </label><br/>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-xs-4\">\r\n                            <img class=\"profileImg\" id='img' src='{{profileImgUser}}'>\r\n                            <ng-template [ngIf]='profileUserId == currentUser.id'>\r\n                                <label class=\"cabinetp\"> \r\n                                    <input type=\"file\"  class='file'  multiple  id=\"profile\" (change)=\"uploadProfileImg($event)\"/> </label><br/>\r\n                            </ng-template>\r\n                        </div>\r\n\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"title\" *ngIf=\"profileUser\">\r\n                                <div class=\"fullname\">{{ profileUser.get(\"name\") || \"John Doe\" }}</div>\r\n                                <span class=\"tag\">@{{ profileUser.get(\"username\") }}</span>\r\n                            </div>\r\n                            <!--<div class=\"location\">\r\n                                <i class=\"fa fa-map-marker\"></i> Islamabad\r\n                            </div>\r\n                            <div class=\"social\">\r\n                                <span><i class=\"fa fa-twitter\"></i></span>\r\n                                <span><i class=\"fa fa-instagram\"></i></span>\r\n                            </div>-->\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row stats\">\r\n                <div class=\"col-mat-8 col-lg-8 col-xs-12 col-sm-12 counter-row\">\r\n                    <div class=\"row\">\r\n                        \r\n                        <div class=\"col-mat-2 col-lg-2 col-xs-2 col-sm-2\">\r\n                            <h3>2</h3>\r\n                            <p>Followers</p>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<button *ngIf=\"profileUserId != currentUser.id\" (click)=\"follow()\" (mouseover)=\"hover()\" (mouseleave)=\"unhover()\" class=\"follow-btn\"\r\n    mat-fab>\r\n\r\n    <i *ngIf=\"followButtonValue == 0\" class=\"material-icons\">done</i>\r\n    <i *ngIf=\"followButtonValue == 1\" class=\"material-icons\">cancel</i>\r\n    <i *ngIf=\"followButtonValue == 2\" class=\"material-icons\">watch_later</i>\r\n    <i *ngIf=\"followButtonValue == 3\" class=\"material-icons\">cancel</i>\r\n    <i *ngIf=\"followButtonValue == 4\" class=\"material-icons\">person_add</i>\r\n</button>\r\n\r\n<!-- Lower Part, posts, shares etc below -->\r\n<app-home></app-home>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__("../../../../../src/app/util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var imagePath = '/assets/images/p2.png';
var ProfileComponent = (function () {
    function ProfileComponent(_service, parse, router, activatedRoute) {
        this._service = _service;
        this.activatedRoute = activatedRoute;
        this.comment = false;
        this.view = 1;
        this.imagePath1 = '/assets/images/p2.png';
        this.imageCover = '/assets/images/backlogin.jpg';
        this.messages = [];
        this.postData = [];
        // related to followButton
        this.STATE_FOLLOWING = 'following';
        this.STATE_PENDING = 'pending';
        this.STATE_NONE = 'none';
        // sets the icon inside
        this.VALUE_FOLLOWING = 0;
        this.VALUE_FOLLOWING_HOVER = 1; // actually a prompt to cancel the connection
        this.VALUE_PENDING = 2;
        this.VALUE_PENDING_HOVER = 3; // actually a prompt to cancel the request
        this.VALUE_NONE = 4;
        this.followButtonState = this.STATE_NONE;
        this.followButtonValue = this.VALUE_NONE;
        this._router = router;
        this.parse = parse.sdk();
        this.followButton = 'Follow';
        this.currentUser = this.parse.User.current();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.profileUsername = params['username'];
            _this.profileUserId = params['userId'];
            // if profile is of current user, set data on view immediately
            if (_this.currentUser.id == _this.profileUserId) {
                _this.profileUser = _this.currentUser;
            }
            else {
                _this.fetchProfileUser();
            }
            _this.fetchProfileUserPosts();
            _this.updatePhotos();
            _this.setFollowButtonState();
        });
    };
    ProfileComponent.prototype.fetchProfileUser = function () {
        var _this = this;
        // TODO show spinner until loaded
        var query = new this.parse.Query(this.parse.User);
        query.get(this.profileUserId, {
            success: function (user) {
                _this.profileUser = user;
            },
            error: function (user, error) {
                console.error(error);
            }
        });
    };
    /**
     * updates the image paths on user profile
     */
    ProfileComponent.prototype.updatePhotos = function () {
        var _this = this;
        // Updating current user's attributes
        this.currentUser.fetch({
            success: function (user) {
                _this.currentUser = user;
                if (user.get('coverPic')) {
                    _this.coverImgUser = user.get('coverPic').url();
                }
                else {
                    _this.coverImgUser = _this.imageCover;
                    console.log('cover');
                }
                if (user.get('profilePic'))
                    _this.profileImgUser = user.get('profilePic').url();
                else {
                    _this.profileImgUser = _this.imagePath1;
                    console.log('else');
                }
            },
            error: function (user, err) {
                console.error(err);
            }
        });
    };
    /**
     * sets the text on Follow/Unfollow button according to connection
     */
    ProfileComponent.prototype.setFollowButtonState = function () {
        var _this = this;
        console.log('settin follow button state');
        // construct the Pointer to profileUser
        var profileUser = this.parse.User.createWithoutData(this.profileUserId);
        var Connection = new this.parse.Object('Connection');
        var query = new this.parse.Query(Connection);
        query.equalTo("from", this.currentUser);
        query.equalTo("to", profileUser);
        query.find({
            // ideally only one connection must exist in this direction, so one should be fetched
            success: function (conn) {
                if (conn.length === 0) {
                    // connection doesn't exist
                    _this.followButtonState = _this.STATE_NONE;
                    _this.followButtonValue = _this.VALUE_NONE;
                    console.log("setted state of follow to: ", _this.followButton);
                }
                else {
                    // the currentUser is already following this user, so
                    // this.followButton = 'Unfollow';
                    _this.followButtonState = _this.STATE_FOLLOWING;
                    _this.followButtonValue = _this.VALUE_FOLLOWING;
                    console.log("setted state of follow to: ", _this.followButton);
                }
            },
            error: function (err) {
                console.error(err);
            }
        });
    };
    ProfileComponent.prototype.hover = function () {
        console.log('hover');
        if (this.followButtonState == this.STATE_FOLLOWING) {
            this.followButtonValue = this.VALUE_FOLLOWING_HOVER;
        }
        else if (this.followButtonState == this.STATE_PENDING) {
            this.followButtonValue = this.VALUE_PENDING_HOVER;
        }
        else if (this.followButtonState == this.STATE_NONE) {
            this.followButtonValue = this.VALUE_NONE;
        }
    };
    ProfileComponent.prototype.unhover = function () {
        console.log('unhover');
        if (this.followButtonState == this.STATE_FOLLOWING) {
            this.followButtonValue = this.VALUE_FOLLOWING;
        }
        else if (this.followButtonState == this.STATE_PENDING) {
            this.followButtonValue = this.VALUE_PENDING;
        }
        else if (this.followButtonState == this.STATE_NONE) {
            this.followButtonValue = this.VALUE_NONE;
        }
    };
    ProfileComponent.prototype.fetchProfileUserPosts = function () {
        var _this = this;
        var Post = this.parse.Object.extend('Post');
        var query = new this.parse.Query(Post);
        query.equalTo("userId", this.profileUserId);
        query.descending('createdAt');
        query.find({
            success: function (posts) {
                for (var i = 0; i < posts.length; i++) {
                    var obj = posts[i];
                    var img = obj.get('media');
                    _this.postData.push({ name: _this.profileUser, profileImg: _this.profileImgUser, title: obj.get('title'), description: obj.get('body'), images: img });
                    console.log(obj.get('media'));
                }
            },
            error: function (posts, err) { console.error(err); }
        });
    };
    /**
     * Takes to the Page that shows create post form
     */
    ProfileComponent.prototype.gotoCreate = function () {
        this._router.navigate(['create']);
    };
    ProfileComponent.prototype.addComment = function (index, trackBy) {
        var _this = this;
        var e = document.getElementsByClassName('comment_box')[index];
        //console.log(e);
        var messages1 = [];
        this.messages = [];
        var Comment = this.parse.Object.extend('Comment');
        var query = new this.parse.Query(Comment);
        var queryU = new this.parse.Query(this.parse.User);
        if (e.style.display === "none") {
            e.style.display = "block";
            var u_id;
            query.equalTo("post_id", trackBy); // 
            query.ascending('createdAt');
            query.find().then(function (comment) {
                // Do stuff
                var promise = _this.parse.Promise.as();
                __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](comment, function (resultObj) {
                    var ob = resultObj;
                    console.log('h1', ob.get('userId'));
                    queryU.equalTo("objectId", ob.get('userId'));
                    //adList.push(ad);
                    return queryU.first().then(function (results) {
                        // adList.push(5);
                        console.log(ob.get('text'));
                        _this.messages.push({ from: results.get('username'), message: ob.get('text') });
                        console.log(_this.messages);
                    });
                });
                return promise;
            });
        }
        else {
            e.style.display = 'none';
        }
    };
    ProfileComponent.prototype.uploadProfileImg = function (event) {
        var _this = this;
        var el = document.getElementById('profile');
        var imgsrc = document.getElementById('img');
        var currentUser = this.parse.User.current();
        var profileImage = new this.parse.Parse.File('profile', event.target.files[0]);
        currentUser.set('profilePic', profileImage);
        currentUser.save({
            success: function (user) {
                currentUser = user;
                console.log(profileImage.url());
                console.log(currentUser.coverImage);
                console.log('saved profile img');
            },
            error: function (user, error) {
                console.log("upload failed. please try again!", error);
            }
        });
        if (event.target.files[0]) {
            var reader = new FileReader();
            console.log(reader);
            reader.onload = (function (e) {
                imgsrc.src = e.target.result; //display image when user upload it
                _this.profileImgUser = e.target.result;
                __WEBPACK_IMPORTED_MODULE_5__util__["a" /* Util */].profileImg = _this.profileImgUser;
                console.log('em.src');
            });
            reader.readAsDataURL(event.target.files[0]);
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }
    };
    ProfileComponent.prototype.uploadCoverImg = function (event) {
        var _this = this;
        var el = document.getElementById('cover');
        var imgsrc = document.getElementById('cov');
        var file = new this.parse.Parse.File('cover', event.target.files[0]);
        this.currentUser.set('coverPic', file);
        this.currentUser.save({
            success: function (user) {
                _this.currentUser = user;
                console.log('Uploaded coverImg: ', _this.currentUser.coverImage);
            },
            error: function (user, err) {
                console.error(err);
            }
        });
        if (event.target.files[0]) {
            var reader = new FileReader();
            console.log(reader);
            reader.onload = (function (e) {
                //display image when user upload it
                _this.coverImgUser = e.target.result;
                __WEBPACK_IMPORTED_MODULE_5__util__["a" /* Util */].coverImg = _this.coverImgUser;
                console.log('em.src');
            });
            reader.readAsDataURL(event.target.files[0]);
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }
    };
    /**
     * Gets called when "Follow" button is clicked
     */
    ProfileComponent.prototype.follow = function () {
        // make pointer to profile user
        var profileUser = this.parse.User.createWithoutData(this.profileUserId);
        // save as Request object
        var Request = this.parse.Object.extend("Request");
        var req = new Request();
        req.set("to", profileUser)
            .set("from", this.currentUser)
            .set("state", "sent")
            .save();
    };
    ProfileComponent.prototype.saveComment = function (event, post_id) {
        if (event.keyCode == 13) {
            var Comment = this.parse.Object.extend('Comment');
            var comment = new Comment();
            comment.set('userId', this.parse.User.current().id);
            comment.set('post_id', post_id);
            comment.set('text', event.target.value);
            // for now
            comment.set('type', 'plain_comment');
            comment.save({
                success: function (comment) {
                    console.log('Comment Saved.');
                },
                error: function (gameScore, error) {
                    console.error(error);
                }
            });
            event.target.value = "";
        }
    };
    /**
     * Set object id to each post
     * @param index
     * @param item
     */
    ProfileComponent.prototype.identity = function (index, item) {
        return item.id;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pusher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PusherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PusherService = (function () {
    function PusherService(parseService) {
        // VAPID publicKey. Private key is used by server to authenticate
        this.applicationServerPublicKey = 'BIyT9ekomwwAfsuCwz4K9Mg7rylzwtNJnALhn-RiWd2CJZ0MThkmrNedztqsR8mDZJV3dGoQhzXULbOm66cAv2A';
        this.isSubscribed = false;
        this.swRegistration = null;
        this.parse = parseService.sdk();
    }
    /**
     * gets permission to show notifications
     * calls subscribeUser to get subscription
     * which calls updateSubscriptionOnServer to save subscription
     * @param doneCallback Callback pass to subscribeUser
     */
    PusherService.prototype.registerSW = function (doneCallback) {
        var _this = this;
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            console.log('Service Worker and Push are supported');
            navigator.serviceWorker.register('sw.js', { scope: '' })
                .then(function (swReg) {
                if ('pushManager' in swReg) {
                    console.log('The service worker supports push');
                }
                else {
                    console.log('The service worker doesnt support push');
                }
                _this.swRegistration = swReg;
                _this.subscribeUser(doneCallback);
            })
                .catch(function (error) {
                console.error(error);
            });
        }
        else {
            console.warn('Push messaging is not supported');
        }
    };
    /**
     * Gets the subscription for push notification
     * @param doneCallback Callback passed to updateSubscriptionOnServer
     */
    PusherService.prototype.subscribeUser = function (doneCallback) {
        var _this = this;
        var applicationServerKey = this.urlB64ToUint8Array(this.applicationServerPublicKey);
        navigator.serviceWorker.ready.then(function (swReg) {
            swReg.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: applicationServerKey
            })
                .then(function (subscription) {
                console.log('User is subscribed.');
                console.log(JSON.stringify(subscription));
                // TODO
                _this.updateSubscriptionOnServer(subscription, doneCallback);
                _this.isSubscribed = true;
            })
                .catch(function (err) {
                console.error('Failed to subscribe the user: ', err);
            });
        });
    };
    /**
     * as appeared here
     * https://github.com/web-push-libs/web-push
     * &
     * https://github.com/GoogleChrome/push-notifications/blob/master/completed/08-push-subscription-change/scripts/main.js
     */
    PusherService.prototype.urlB64ToUint8Array = function (base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');
        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);
        for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    };
    /**
     * saves unsubscription detail on server
     * @param doneCallback Callback
     */
    PusherService.prototype.unsubscribeUser = function (doneCallback) {
        this.updateSubscriptionOnServer(null, doneCallback);
    };
    /**
     * Saves this user's subscription to the server
     * @param subscription Object having subscription detail
     * @param doneCallback called when operation is done
     */
    PusherService.prototype.updateSubscriptionOnServer = function (subscription, doneCallback) {
        var currentUser = this.parse.User.current();
        // subscription is provided
        if (subscription) {
            currentUser.set("askedPush", true)
                .set("canPush", true)
                .set("pushSubscription", JSON.stringify(subscription));
        }
        else {
            // unsubscribe the user
            currentUser.set("askedPush", true)
                .set("canPush", false)
                .set("pushSubscription", null);
        }
        currentUser.save({
            success: function (user) {
                doneCallback(true);
            },
            error: function (user, err) {
                console.error(err);
                doneCallback(false);
            }
        });
    };
    PusherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__parse_service__["a" /* ParseService */]])
    ], PusherService);
    return PusherService;
}());



/***/ }),

/***/ "../../../../../src/app/requests/requests.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nmat-list-item {\r\n    background: white;\r\n    margin: 10px;\r\n    border-radius: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/requests/requests.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list>\r\n  <h2 mat-subheader>Follow Requests</h2>\r\n  <mat-list-item *ngFor=\"let req of requests; let i = index\">\r\n    <mat-icon mat-list-icon>folder</mat-icon>\r\n    <h4 mat-line>{{ req.get('from').get('name') }}</h4>\r\n    <p mat-line> {{ req.get('from').get('username') }} </p>\r\n    <p mat-line> {{ req.get('createdAt') | date}} </p>\r\n\r\n    <button mat-fab  \r\n      (click)=\"acceptReq(i)\"\r\n      [disabled]=\"buttonDisabled[i]\">\r\n      <i class=\"material-icons\">{{ buttonIcons[i] }}</i>\r\n    </button>\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n</mat-list>"

/***/ }),

/***/ "../../../../../src/app/requests/requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestsComponent = (function () {
    function RequestsComponent(_parse) {
        // instances of Parse Object Request
        this.requests = [];
        this.buttonDisabled = [];
        this.buttonIcons = [];
        this.Parse = _parse.sdk();
    }
    RequestsComponent.prototype.ngOnInit = function () {
        this.fetchFollowRequests();
    };
    /**
     * Fetches Follow requests to current user
     */
    RequestsComponent.prototype.fetchFollowRequests = function () {
        var _this = this;
        var Request = this.Parse.Object.extend("Request");
        var query = new this.Parse.Query(Request);
        query.equalTo('to', this.Parse.User.current())
            .include('from');
        query.find({
            success: function (reqs) {
                _this.requests = reqs;
                _this.constructDisabledArray();
            },
            error: function (reqs, err) {
                console.error(err);
            }
        });
    };
    /**
     * Sets state of accept buttons corresponding to request objects
     */
    RequestsComponent.prototype.constructDisabledArray = function () {
        for (var i = 0; i < this.requests.length; i++) {
            this.buttonDisabled.push(false);
            this.buttonIcons.push('person_add');
        }
    };
    /**
     * Accept the Requests of ith index
     * Called by button click
     */
    RequestsComponent.prototype.acceptReq = function (i) {
        var _this = this;
        if (i >= this.requests.length)
            return;
        // disable this button
        this.buttonDisabled[i] = true;
        var req = this.requests[i];
        // save connection
        var Connection = this.Parse.Object.extend("Connection");
        var conn = new Connection();
        conn.set("to", req.get("to"))
            .set("from", req.get("from"))
            .set("affinity", 1)
            .save(null, {
            success: function (conn) {
                // change button's icon to accepted
                _this.buttonIcons[i] = 'done';
                // del this request
                _this.deleteRequest(i);
            },
            error: function (conn, err) {
                console.error(err);
            }
        });
    };
    /**
     * Deletes ith Request object from Parse as well as
     * from dels ith obj from this.requests, this.buttonDisabled, this.buttonIcons arrays
     */
    RequestsComponent.prototype.deleteRequest = function (i) {
        var _this = this;
        var req = this.requests[i];
        req.destroy({
            success: function (r) {
                // delete corresponding array items
                _this.requests.splice(i, 1);
                _this.buttonDisabled.splice(i, 1);
                _this.buttonIcons.splice(i, 1);
            },
            error: function (r, error) {
                console.log(error);
            }
        });
    };
    RequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-requests',
            template: __webpack_require__("../../../../../src/app/requests/requests.component.html"),
            styles: [__webpack_require__("../../../../../src/app/requests/requests.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__parse_service__["a" /* ParseService */]])
    ], RequestsComponent);
    return RequestsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background{\r\n\r\n    height: 505px;\r\n    \r\n}\r\nmat-list-item {\r\n    background: white;\r\n    margin: 10px;\r\n    border-radius: 3px;\r\n}\r\n.tabs {\r\n    margin-left: 105px;\r\n    margin-right: 50px;\r\n    height: 500px;\r\n    margin-top: 20px;\r\n    border-top: 2px solid gray;\r\n    border-left: 2px solid gray;\r\n    border-right: 2px solid gray;\r\n}\r\nmat-tabs mat-ink-bar {\r\n    background-color: black;\r\n}\r\n:host .mat-tab.mat-tab-header {\r\n    margin-left: 30px !important;\r\n    padding-left: 30px;\r\n}\r\n.list-item{\r\n    position:relative;\r\n    width:100% ; \r\n     left:10%\r\n}\r\n.name{\r\n    position:absolute; \r\n    top:-10px;\r\n    left:23%;\r\n    color: cadetblue ;\r\n    width:180px; \r\n}\r\n.nameEdit-icon{\r\n    position:absolute;\r\n    top:-15px;\r\n    left:60%;\r\n\r\n}\r\n.email{\r\n    position:absolute;\r\n    top:-10px;\r\n    left:23%;\r\n    color: cadetblue\r\n}\r\n.username{\r\n    position:absolute; \r\n    top:-10px;\r\n    left:23%;\r\n    color:cadetblue \r\n\r\n}\r\n.password{\r\n    position:absolute; top:-10px;\r\n    left:23%;\r\n}\r\n.passwordEditIcon{\r\n    position:absolute;\r\n    top:-15px;\r\n    left:60%; \r\n}\r\n.changenametext{\r\n    position:absolute;\r\n     top:-10px;\r\n}\r\n.savebutton{\r\n    position:absolute;top:-15px;\r\n    left:60%;\r\n    background-color:red\r\n}\r\n.cancelButton{\r\n    position:absolute;\r\n    top:-15px;\r\n    left:72%;\r\n    background-color:red\r\n}\r\n.repasswordtext{\r\n    position:absolute; \r\n    top:-10px;\r\n    left:30%;\r\n}\r\n.text{\r\n    position:absolute; top:-10px;\r\n}\r\n.push{\r\n    position:absolute; top:0px;\r\n    left:23%;\r\n    color: cadetblue ;\r\n    width:100px; \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n<h2 style=\"margin-left:30% \">\r\n  Settings\r\n</h2>\r\n  <mat-divider></mat-divider>\r\n<mat-list>\r\n  <h2 mat-subheader>General Settings</h2>\r\n  <mat-divider></mat-divider>\r\n        <mat-list-item>\r\n          <div class=\"list-item\">\r\n            <strong><h5 class=\"text\">Push</h5></strong>\r\n            <mat-slide-toggle \r\n              [(ngModel)]=\"pushToggleChecked\"\r\n              [checked]=\"pushToggleChecked\"\r\n              [disabled]=\"pushToggleDisabled\"\r\n              (change)=\"pushSlideToggleEvent()\"\r\n            class=\"push\">\r\n              {{ this.pushSlideText }}\r\n            </mat-slide-toggle>\r\n          </div>\r\n        </mat-list-item>\r\n        \r\n        <mat-list-item>\r\n          <div class=\"list-item\">\r\n            <strong><h5 class=\"text\">Name</h5></strong>\r\n            <h5 class=\"name\">{{this.name}}</h5>\r\n            <button mat-icon-button class=\"nameEdit-icon\" (click)='changeName()'><mat-icon>mode_edit</mat-icon></button>\r\n          </div>\r\n        </mat-list-item>\r\n\r\n        \r\n        <mat-list-item *ngIf='changename'>\r\n          <div class=\"list-item\">\r\n            <input  type='text' id='newname' [(ngModel)]=\"newName\" class=\"changenametext\" placeholder=\"Enter New Name\">\r\n            <button mat-button class=\"savebutton\" (click)='updateName()'>Save</button>\r\n            <button mat-button class=\"cancelButton\" (click)='changeName()'>Cancel</button>\r\n          </div>\r\n        </mat-list-item>\r\n\r\n        \r\n\r\n        <mat-list-item>\r\n          <div class=\"list-item\">\r\n            <strong> <h5 class=\"text\">username</h5></strong>\r\n            <h5 class=\"username\">{{this.username}}</h5>\r\n            \r\n          </div>\r\n        </mat-list-item>\r\n\r\n        \r\n\r\n        <mat-list-item >\r\n          <div class=\"list-item\">\r\n            <strong><h5 class=\"text\">Email</h5></strong>\r\n            <h5 class=\"email\">{{this.email}}</h5>\r\n           \r\n          </div>\r\n        </mat-list-item>\r\n\r\n        \r\n\r\n        <mat-list-item>\r\n          <div class=\"list-item\">\r\n            <h5 class=\"text\">Password</h5>\r\n            <h5 class=\"password\">******</h5>\r\n            <button mat-icon-button class=\"passwordEditIcon\" (click)='changePassword()'><mat-icon>mode_edit</mat-icon></button>\r\n          </div>\r\n        </mat-list-item>\r\n\r\n        \r\n\r\n        <mat-list-item *ngIf='change'>\r\n          <div class=\"list-item\">\r\n            <input id='pass' type='password'[(ngModel)]=\"newPassword\" class=\"changenametext\" placeholder=\"New Password\">\r\n            <input id='re' type='password' [(ngModel)]=\"rePassword\" class=\"repasswordtext\" placeholder=\"Re Enter Password\">\r\n            <button mat-button class=\"savebutton\" (click)='updatePassword()'>Save</button>\r\n            <button mat-button class=\"cancelButton\" (click)='changePassword()'>Cancel</button>\r\n          </div>\r\n        </mat-list-item>\r\n\r\n        <mat-divider></mat-divider>\r\n        <h2 mat-subheader>Account Settings</h2>\r\n        <mat-divider></mat-divider>\r\n        <mat-list-item>\r\n         <div class=\"list-item\">\r\n            <strong><h5 style=\"position:absolute; top:-15px;width:250px; \">DeActivate Your Account</h5></strong>\r\n            <button mat-button  class=\"savebutton\">Send Request</button>\r\n          </div>\r\n        </mat-list-item>\r\n        <mat-divider></mat-divider>\r\n</mat-list>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__("../../../../angular2-modal/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pusher_service__ = __webpack_require__("../../../../../src/app/pusher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = (function () {
    function SettingsComponent(parse, pusher, overlay, vcRef) {
        var _this = this;
        this.pusher = pusher;
        this.change = false;
        this.changename = false;
        this.newName = '';
        this.newPassword = '';
        this.rePassword = '';
        this.pushToggleChecked = false;
        this.pushToggleDisabled = true;
        overlay.defaultViewContainer = vcRef;
        this.parse = parse.sdk();
        this.currentUser = this.parse.User.current();
        var query = new this.parse.Query(this.parse.User);
        query.equalTo("username", this.currentUser.getUsername());
        query.find({
            success: function (user) {
                for (var i = 0; i < user.length; i++) {
                    var object = user[i];
                    _this.name = object.get('name'); //getting username to display the profile name in the top left
                    _this.username = object.get('username');
                    _this.email = object.get('email');
                }
            }
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // at start disable it
        this.disablePushToggle(true);
        this.refreshUser(this.onOpenUpdatePushSettings());
    };
    SettingsComponent.prototype.refreshUser = function (callback) {
        this.currentUser = this.parse.User.current();
        this.currentUser.fetch({
            success: function (user) {
                this.currentUser = user;
                // enables push settings
                callback();
            },
            error: function (user, err) {
                console.error(err);
            }
        });
    };
    /**
     * is passed as callback,
     * When this method gets called, the currentUser has been fetched &
     * we can check its attributes to enable/disable push settings
     */
    SettingsComponent.prototype.onOpenUpdatePushSettings = function () {
        if (!this.currentUser.get("askedPush")) {
            // we haven't asked for Push Permission
            this.pushToggleChecked = false;
        }
        else if (this.currentUser.get("askedPush") && this.currentUser.get("canPush")) {
            // push were enabled previously
            this.pushToggleChecked = true;
            if (!this.currentUser.get("pushSubscription")) {
                // for some reason susbcrition is not set, so get it & save to server
                this.pusher.registerSW(function (done) {
                    //
                });
            }
        }
        else {
            // we asked previously but they denied
            // TODO set button to "Turn on" & also show information about 
            // how to Unblock our site in settings
        }
        // now checking/unchecking slideToggle is done, so enable it
        this.disablePushToggle(false);
    };
    /**
     * When the slideToggle is toggled this method is called
     */
    SettingsComponent.prototype.pushSlideToggleEvent = function () {
        var _this = this;
        console.log('pushSlideToggleEvent', 'pushToggleChecked: ', this.pushToggleChecked);
        if (this.pushToggleChecked) {
            this.disablePushToggle(true);
            // user has checked it, so lets enable push
            console.log('Registering Push');
            this.pusher.registerSW(function (done) {
                if (done) {
                    // TODO show it up on UI
                    console.log('Saved Subscription to server');
                    _this.disablePushToggle(false);
                }
                else {
                    console.log('Failed to save');
                }
            });
        }
        else {
            this.disablePushToggle(true);
            this.pusher.unsubscribeUser(function (done) {
                if (done) {
                    // TODO show it up on UI
                    console.log('Unsubscribed');
                    _this.disablePushToggle(false);
                }
                else {
                    console.log('Failed to save');
                }
            });
        }
    };
    /**
     * disables slideToggle so user cannot click again & again
     * @param what boolean
     */
    SettingsComponent.prototype.disablePushToggle = function (what) {
        this.pushToggleDisabled = what;
        // TODO show/hide spinner
    };
    SettingsComponent.prototype.changePassword = function () {
        if (!this.change)
            this.change = true;
        else
            this.change = false;
    };
    SettingsComponent.prototype.changeName = function () {
        if (!this.changename)
            this.changename = true;
        else
            this.changename = false;
    };
    /**
     * on clicking enable / disable push button, does the corresponding action
     */
    SettingsComponent.prototype.togglePush = function () {
    };
    SettingsComponent.prototype.updateName = function () {
        var _this = this;
        if (this.newName.length > 0) {
            this.currentUser.set('name', this.newName);
            this.currentUser.save({
                success: function (user) {
                    _this.name = _this.newName;
                    _this.newName = '';
                    _this.changename = false;
                },
                error: function (user, err) {
                    console.error(err);
                }
            });
        }
        else {
            var el = document.getElementById('newname');
            el.style.borderColor = 'red';
        }
    };
    SettingsComponent.prototype.updatePassword = function () {
        var _this = this;
        if (this.newPassword.length > 0 && this.rePassword.length > 0) {
            console.log(this.newPassword);
            this.currentUser.set('password', this.newPassword);
            this.currentUser.save({
                success: function (user) {
                    //this.name=this.newName;
                    _this.newPassword = '';
                    _this.change = false;
                },
                error: function (user, err) {
                    console.error(err);
                }
            });
        }
        else {
            var el = document.getElementById('pass');
            var em = document.getElementById('re');
            el.style.borderColor = 'red';
            em.style.borderColor = 'red';
        }
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_3__pusher_service__["a" /* PusherService */], __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["h" /* Overlay */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = (function () {
    function SharedService() {
        this.caseNumber = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        // Observable string streams
        this.caseNumber$ = this.caseNumber.asObservable();
    }
    SharedService_1 = SharedService;
    // Service message commands
    SharedService.prototype.publishData = function (data) {
        console.log(data);
        SharedService_1.no = data;
        this.caseNumber.next(data);
    };
    SharedService.prototype.getData = function () {
        return SharedService_1.no;
    };
    SharedService = SharedService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
    var SharedService_1;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font: 16px Helvetica;\r\n}\r\n\r\nsection {\r\n    width: 300px;\r\n    height: 600px;\r\n    background: #800000;\r\n    padding: 0 30px 30px 30px;\r\n    margin: 60px auto;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n}\r\n\r\nspan {\r\n    display: block;\r\n    position: relative;\r\n    margin: 0 auto;\r\n    top: -40px;\r\n    height: 80px;\r\n    width: 80px;\r\n    background: url('/assets/images/t1.png') center center no-repeat, #f39c12;\r\n    border-radius: 50%;\r\n    -webkit-box-shadow: 1px 1px 2px rgba(0, 0, 0, .3);\r\n            box-shadow: 1px 1px 2px rgba(0, 0, 0, .3);\r\n}\r\n\r\nh1 {\r\n    font-size: 24px;\r\n    font-weight: 100;\r\n    margin-bottom: 30px;\r\n}\r\n\r\ninput {\r\n    width: 100%;\r\n    background: #bdc3c7;\r\n    border: none;\r\n    height: 30px;\r\n    margin-bottom: 15px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    color: #7f8c8d;\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n}\r\n\r\nbutton {\r\n    width: 100%;\r\n    height: 30px;\r\n    border: none;\r\n    background: #3498db;\r\n    color: #ecf0f1;\r\n    font-weight: 100;\r\n    margin-bottom: 15px;\r\n    border-radius: 5px;\r\n    -webkit-transition: all ease-in-out .2s;\r\n    transition: all ease-in-out .2s;\r\n    border-bottom: 3px solid #2980b9;\r\n}\r\n\r\nbutton:focus {\r\n    outline: none;\r\n}\r\n\r\nbutton:hover {\r\n    background: #2980b9;\r\n}\r\n\r\nh2 {\r\n    font-size: .75em;\r\n}\r\n\r\na {\r\n    color: #e74c3c;\r\n    text-decoration: none;\r\n    -webkit-transition: all ease-in-out .2s;\r\n    transition: all ease-in-out .2s;\r\n}\r\n\r\na:hover {\r\n    color: #c0392b;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n    /* Chrome/Opera/Safari */\r\n    color: black;\r\n}\r\n\r\ninput::-moz-placeholder {\r\n    /* Firefox 19+ */\r\n    color: black;\r\n}\r\n\r\ninput:-ms-input-placeholder {\r\n    /* IE 10+ */\r\n    color: black;\r\n}\r\n\r\ninput:-moz-placeholder {\r\n    /* Firefox 18- */\r\n    color: black;\r\n}\r\n\r\nbody,html {\r\n    height: 535px;\r\n    margin:0px;\r\n\r\n}\r\n\r\n.bg{\r\n         background-image: url('/assets/images/map1.jpeg');\r\n\r\n    /* Full height */\r\n    height: 535px; \r\n\r\n    /* Center and scale the image nicely */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.logo {\r\n    width: 213px;\r\n    height: 36px;\r\n  /*  background: url('/assets/images/log.png') no-repeat;*/\r\n    margin: 30px auto;\r\n}\r\n\r\n.login-block {\r\n    position: relative;\r\n    width: 320px;\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    border-top: 5px solid #ff656c;\r\n    margin: 10px auto;\r\n}\r\n\r\n.login-block h1 {\r\n    text-align: center;\r\n    color: #000;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.login-block input {\r\n    width: 100%;\r\n    height: 42px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    border-radius: 5px;\r\n    border: 1px solid #ccc;\r\n    margin-bottom: 20px;\r\n    font-size: 14px;\r\n    font-family: Montserrat;\r\n    padding: 0 20px 0 50px;\r\n    outline: none;\r\n}\r\n\r\n.login-block input#uname {\r\n    background: #fff url('/assets/images/user1.png') 20px top no-repeat;\r\n    background-size: 16px 80px;\r\n}\r\n\r\n.login-block input#uname:focus {\r\n    background: #fff url('/assets/images/user1.png') 20px bottom no-repeat;\r\n    background-size: 16px 80px;\r\n}\r\n\r\n.login-block input#name {\r\n    background: #fff url('/assets/images/user1.png') 20px top no-repeat;\r\n    background-size: 16px 80px;\r\n}\r\n\r\n.login-block input#name:focus {\r\n    background: #fff url('/assets/images/user1.png') 20px bottom no-repeat;\r\n    background-size: 16px 80px;\r\n}\r\n\r\n.login-block input#email {\r\n    background: #fff url('/assets/images/user1.png') 20px top no-repeat;\r\n    background-size: 16px 80px;\r\n}\r\n\r\n.login-block input#email:focus {\r\n    background: #fff url('/assets/images/user1.png') 20px bottom no-repeat;\r\n    background-size: 16px 80px;\r\n}\r\n\r\n.login-block input#password {\r\n    background: #fff url('/assets/images/password.png') 20px top no-repeat;\r\n    background-size: 16px 80px;\r\n}\r\n\r\n.login-block input#password:focus {\r\n    background: #fff url('/assets/images/password.png') 20px bottom no-repeat;\r\n    background-size: 16px 80px;\r\n}\r\n\r\n.login-block input#repassword {\r\n    background: #fff url('/assets/images/password.png') 20px top no-repeat;\r\n    background-size: 16px 80px;\r\n}\r\n\r\n.login-block input#repassword:focus {\r\n    background: #fff url('/assets/images/password.png') 20px bottom no-repeat;\r\n    background-size: 16px 80px;\r\n}\r\n\r\n.login-block input:active, .login-block input:focus {\r\n    border: 1px solid #ff656c;\r\n}\r\n\r\n.login-block button {\r\n    width: 100%;\r\n    height: 40px;\r\n    background: #ff656c;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    border-radius: 5px;\r\n    border: 1px solid #e15960;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    font-family: Montserrat;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.login-block button:hover {\r\n    background: #ff7b81;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"bg\">\r\n\r\n\r\n<div class=\"login-block\">\r\n    <h1>SignUp</h1>\r\n    <input placeholder='User Name' type='text' [(ngModel)]=\"username\" id=\"uname\" class=\"validate\">\r\n    <input placeholder='Name' type='text' [(ngModel)]=\"name\" id=\"name\" class=\"validate\">\r\n    <input placeholder='Email' type='email' [(ngModel)]=\"email\" id=\"email\" class=\"validate\">\r\n    <input placeholder='Password' type='password' [(ngModel)]=\"password\" id=\"password\" class=\"validate\">\r\n    <input placeholder='Re Password' type='password' [(ngModel)]=\"repassword\" id=\"repassword\" class=\"validate\">\r\n    <mat-spinner *ngIf=\"spin\" id=\"spinner-signup\"></mat-spinner>\r\n      <button (click)=\"register()\">SignUp</button>\r\n      <button [routerLink]=\"['/login']\" >Goto Login</button>\r\n</div>\r\n  </div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(parse, _router) {
        this._router = _router;
        this.spin = false;
        this.success = false;
        this.parse = parse.sdk();
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.register = function () {
        var _this = this;
        // start the wait spinner
        this.spin = true;
        var user = new this.parse.User();
        user.set("username", this.username);
        user.set("password", this.password);
        user.set("email", this.email);
        user.set("name", this.name);
        user.signUp(null, {
            success: function (response) {
                _this.spin = false; // stop
                // Hooray! Let them use the app now.
                console.log('success');
                _this._router.navigate(['home']);
            },
            error: function (error) {
                _this.spin = false; // stop
                // Show the error message somewhere and let the user try again.
                console.error(error);
            }
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/slide/slide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlideComponent = (function () {
    function SlideComponent(carousel) {
        this.carousel = carousel;
        this.addClass = true;
    }
    SlideComponent.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    SlideComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], SlideComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], SlideComponent.prototype, "direction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.active'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], SlideComponent.prototype, "active", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.item'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.carousel-item'),
        __metadata("design:type", Boolean)
    ], SlideComponent.prototype, "addClass", void 0);
    SlideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slide',
            template: "\n    <div [class.active]=\"active\" class=\"item text-center\">\n      <ng-content></ng-content>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__carousel_carousel_component__["a" /* CarouselComponent */]])
    ], SlideComponent);
    return SlideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-journies/user-journies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background-card {\r\n    background: #e2e1e0;\r\n    height: 485px;\r\n    }\r\n.mat-card\r\n    {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    padding-bottom: 0px;\r\n    width: 520px;\r\n    margin: 5% 10% 5% 9%;\r\n    }\r\n.showlike-icon\r\n    {\r\n    color:red;\r\n    position:absolute;\r\n    left:250px;\r\n    top:25px \r\n    }\r\n.showNoLike{\r\n    background-color: transparent;\r\n    color: white;\r\n    position:absolute;\r\n    left:270px;\r\n    top:25px\r\n}\r\n.showShare-icon{\r\n    width:24px;\r\n    height:24px;\r\n     color:red; \r\n     position:absolute;\r\n     left:320px;\r\n     top:25px\r\n}\r\n.showNoShare{\r\n    background-color: transparent;\r\n    color: white;\r\n    position:absolute;\r\n    left:345px;\r\n    top:25px\r\n}\r\n.card-content\r\n    {\r\n     height: 60px;\r\n    padding-left:24px;\r\n    padding-right:24px;\r\n    text-overflow: ellipsis;\r\n    overflow:hidden;\r\n    text-align: justify; \r\n    \r\n    }\r\n.viewmore{\r\n        padding-left:20px;\r\n        padding-bottom:0px; \r\n        margin:0px; \r\n        display: none;\r\n    }\r\n/* //////////////////////////////////*/\r\n.card-header\r\n\r\n    {\r\n        padding-left:14px;\r\n        padding-right:24px;\r\n    }\r\n.card-action{\r\n    margin-left:5px;\r\n    height:15px;    \r\n    padding-bottom:40px;\r\n    position:relative;\r\n   \r\n\r\n}\r\n.card-title-group{\r\n    margin-left:10%;\r\n    padding-left:24px;\r\n    padding-right:24px;\r\n}\r\n.icon-miles{\r\n    color:#4682B4;\r\n}\r\n.icon-card-time{\r\n    margin-left:100px;\r\n    color:#4682B4;\r\n}\r\n.icon-media{\r\n    margin-left:78px;\r\n    color:#4682B4;\r\n}\r\n.icon-miles-span{\r\n    position:absolute;\r\n    left:20%;\r\n    top:85px;\r\n}\r\n.icon-card-time-span{\r\n    position:absolute;\r\n    left:44%;\r\n    top:85px;\r\n}\r\n.icon-media-span{\r\n    position:absolute;\r\n    left:66%;\r\n    top:85px;\r\n}\r\n.showjourney-icon{\r\n    position:absolute;\r\n    left:480px;\r\n}\r\n:-moz-placeholder {\r\n    color: #a7aabc;\r\n    font-weight: 200;\r\n}\r\n/*::-webkit-input-placeholder {\r\n    color: #a7aabc;\r\n    font-weight: 200;\r\n}*/\r\n.lt-ie9 .search_box input {\r\n    line-height: 26px\r\n}\r\n.custom-modal-container {\r\n    padding: 15px;\r\n}\r\n.custom-modal-header {\r\n    background-color: #219161;\r\n    color: #fff;\r\n    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\r\n    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\r\n    margin-top: -15px;\r\n    margin-bottom: 40px;\r\n}\r\n/*///////// image slider      */\r\n.dialogbox .body {\r\n    position: relative;\r\n    max-width: 300px;\r\n    height: auto;\r\n    margin: 20px 10px;\r\n    padding: 5px;\r\n    background-color: #DADADA;\r\n    border-radius: 3px;\r\n    border: 5px solid #ccc;\r\n}\r\n.body .message {\r\n    min-height: 30px;\r\n    border-radius: 3px;\r\n    font-family: Arial;\r\n    font-size: 14px;\r\n    line-height: 1.5;\r\n    color: #797979;\r\n}\r\n.likeButton{\r\n    width:30px;\r\n    border-bottom: 4px solid red;\r\n    border-radius:0%;\r\n}\r\n.shareButton{\r\nwidth:30px;\r\nborder-bottom: 4px solid  #62C2F9;\r\nborder-radius:0%;\r\n\r\n}\r\n.commentButton{\r\nwidth:30px;\r\nborder-bottom: 4px solid #ADD8E6;\r\nborder-radius:0%;\r\n\r\n}\r\n.icon-view{\r\n    margin-left:63%;\r\n    color:gray;\r\n}\r\n.icon-view-span{\r\n    font-size:small; \r\n    position:absolute;\r\n    left:460px;\r\n    top:12px;\r\n    color:gray;\r\n}\r\ntextarea {\r\n    resize: none;\r\n    overflow: hidden;\r\n}\r\n.comment_box {\r\n    border: 1px solid;\r\n    background-color: #f1f1f1;\r\n    margin-top: 0px;\r\n    color: #e2e1e0;\r\n    display: none;\r\n    \r\n}\r\n.video{\r\n    width: 520px;\r\n     height:180px;\r\n      -o-object-fit:cover;\r\n         object-fit:cover;\r\n      color:black;\r\n}\r\n.playpause {\r\n    background-image:url(/assets/images/play.png);\r\n    background-repeat: no-repeat;\r\n    width: 30%;\r\n    height: 30%;\r\n    position: absolute;\r\n    left: 0%;\r\n    right: 0%;\r\n    top: 0%;\r\n    bottom: 0%;\r\n    margin: auto;\r\n    background-size: contain;\r\n    background-position: center;\r\n    opacity: 1;\r\n}\r\n.wrapper {\r\n    display: table;\r\n    width: auto;\r\n    width: 520px;\r\n    height: 180px;\r\n}\r\n.spinner{\r\n    position:absolute;\r\n    left:40%;\r\n    top:5\r\n}\r\n.time {\r\n    position:absolute;\r\n    left:88%;\r\n    top:1px;  \r\n    font-size: 10px;\r\n    color: #aaa;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-journies/user-journies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background-card\">\r\n  <div>\r\n    <!--main card content-->\r\n    <mat-card class=\"card\" *ngFor=\"let items of this.journeyData;trackBy:identity;let index=index\" layout-fill (click)='incrementView(index,this.identity(index,items),items.type)'>\r\n      <mat-card-header class=\"card-header\">\r\n        <p class=\"time\">\r\n          {{items.posttime}} ago\r\n        </p>\r\n        <img mat-card-avatar src=\"{{this.profileImg}}\">\r\n        <mat-card-title>{{this.name}}</mat-card-title>\r\n\r\n        <mat-card-subtitle>published journey <strong>{{items.title}}</strong></mat-card-subtitle>\r\n        <button mat-icon-button class=\"showjourney-icon\" (click)=\"showJourney(this.identity(index,items),items.polyline)\"><img src='/assets/images/import.png'></button>\r\n\r\n      </mat-card-header>\r\n\r\n\r\n      <mat-card-title-group class=\"card-title-group\">\r\n        <mat-card-subtitle>\r\n          <mat-icon class=\"icon-miles\">directions_walk</mat-icon><span class=\"icon-miles-span\">{{items.distance}} miles</span>\r\n          <mat-icon class=\"icon-card-time\">watch</mat-icon><span class=\"icon-card-time-span\">{{items.time}}</span>\r\n          <mat-icon class=\"icon-media\">perm_media</mat-icon> <span class=\"icon-media-span\">{{items.numMedia}} photos and media</span>\r\n        </mat-card-subtitle>\r\n      </mat-card-title-group>\r\n\r\n      <mat-card-content style=\"padding-left:24px;padding-right:24px;\">\r\n        <p [id]=\"'contentOverflow-'+index\" class=\"card-content\">\r\n          {{items.description}}\r\n          <br>\r\n\r\n        </p>\r\n\r\n        <a [id]=\"'viewmore-'+index\" class='viewmore' (click)='more(index)' href=\"javascript:void(0)\">view more</a>\r\n        <a target=\"_blank\" href=\"/video\">Generate Video</a>\r\n      </mat-card-content>\r\n\r\n\r\n\r\n\r\n      <carousel style=\"padding-bottom:24px; \" (mouseenter)=\"displayArrow(index,items.length)\" (mouseleave)=\"hideArrow(index)\">\r\n        <slide *ngFor=\"let slidez of items.polyline;\">\r\n\r\n          <!--    <ng-template [ngIf]=\"slidez.type=='image'\">-->\r\n          <img src=\"https://maps.googleapis.com/maps/api/staticmap?size=615x185&markers=size:mid%7C{{items.startLocation}}&markers=size:mid%7C{{items.endLocation}}&path=weight:7%7Ccolor:red%7Cenc:{{slidez}}&key=AIzaSyCW8ZlZzbtQWtn1LN6FM7JwZ6F28COCQjI\"\r\n            class=\"mat-card-image\" alt=\"Grass\" width=\"520px\" height=\"185px\">\r\n\r\n          <div class=\"carousel-caption\" style=\"left:100px;top:125px;right:0px; \">\r\n            <mat-icon class=\"showlike-icon\">favorite</mat-icon>\r\n            <h5 class=\"showNoLike\"><strong>{{items.numLikes}} likes</strong></h5>\r\n            <img src=\"/assets/images/share1.png\" class=\"showShare-icon\">\r\n            <h5 class=\"showNoShare\"><strong>4k Shares</strong></h5>\r\n          </div>\r\n          <!--   </ng-template>\r\n                            <ng-template [ngIf]=\"slidez.type=='video'\">\r\n\r\n                              <div class=\"wrapper\">\r\n                               <video class='video' style=\"width: 615px; height:180px; object-fit: initial;color:black;\" controls  >\r\n                                <source src=\"{{slidez.url}}\">\r\n                                Your browser does not support the video tag.\r\n                                </video>\r\n                                <div class=\"playpause\" (click)=\"playPauseVideo(index)\"></div></div>\r\n                            </ng-template>-->\r\n        </slide>\r\n\r\n        <slide *ngIf='items.video'>\r\n          <div class=\"wrapper\">\r\n            <video class='video' [id]=\"'vid-'+index\" controls>\r\n              <source src=\"{{items.video}}\"> Your browser does not support the video tag.\r\n            </video>\r\n            <div class=\"playpause\" [id]=\"'play-'+index\" (click)=\"playPauseVideo(index)\"></div>\r\n          </div>\r\n        </slide>\r\n      </carousel>\r\n\r\n\r\n\r\n      <mat-card-actions class=\"card-action\">\r\n\r\n        <button mat-icon-button (click)=\"this.showComments(index,this.identity(index,items),items.type)\" class=\"commentButton\"> <img src=\"/assets/images/comment.png\"style=\"width:28px;height28px;\" ></button>\r\n        <mat-icon class=\"icon-view\">remove_red_eye</mat-icon><span class=\"icon-view-span\">{{items.view}} views</span>\r\n      </mat-card-actions>\r\n\r\n      <div class='comment_box'>\r\n        <mat-list>\r\n          <mat-list-item *ngFor=\"let message of messages[index]\">\r\n            <img mat-list-avatar src={{message.image}} alt=\"...\">\r\n            <h6 style=\"padding-left:5px; \">\r\n              <a> <strong>{{message.from}}</strong></a> {{message.message}}</h6>\r\n            <p>\r\n\r\n\r\n            </p>\r\n          </mat-list-item>\r\n          <mat-list-item>\r\n            <img mat-list-avatar src={{this.profileImg}} alt=\"...\"> <textarea type=text placeholder=\"comment\" style=\"width:500px;height:40px;margin-left:5px; \"\r\n              (keypress)='saveComment($event,this.identity(index,items),index,items.type)'></textarea>\r\n          </mat-list-item>\r\n        </mat-list>\r\n\r\n\r\n\r\n      </div>\r\n    </mat-card>\r\n\r\n    <mat-list *ngIf='this.journeyData.length == 0'>\r\n      <mat-list-item style=\"margin-left:30% \">\r\n        <div class=\"mat-list-item-text\" style=\"padding-left:2px; \">\r\n          <h6 style=\"font-size:13px;  \">\r\n            You have not done any Journey uptill now</h6>\r\n        </div>\r\n      </mat-list-item>\r\n      <mat-divider></mat-divider>\r\n    </mat-list>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-journies/user-journies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserJourniesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_service__ = __webpack_require__("../../../../../src/app/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_modal__ = __webpack_require__("../../../../angular2-modal/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util__ = __webpack_require__("../../../../../src/app/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var imagePath = '/assets/images/p2.png';
var UserJourniesComponent = (function () {
    function UserJourniesComponent(_service, parse, router, vcRef, overlay) {
        var _this = this;
        this._service = _service;
        this.listname = [];
        this.journeyData = [];
        this.userarray = [];
        this.slideIndex = 1;
        this.messages = [];
        this.likeButton = [];
        this.componentData = null;
        this._router = router;
        overlay.defaultViewContainer = vcRef;
        this.parse = parse.sdk();
        var currentUser = this.parse.User.current();
        var query = new this.parse.Query(this.parse.User);
        var Journey = this.parse.Object.extend('Journeys');
        this.name = __WEBPACK_IMPORTED_MODULE_6__util__["a" /* Util */].user;
        this.profileImg = __WEBPACK_IMPORTED_MODULE_6__util__["a" /* Util */].profileImg;
        this.curuser_id = currentUser.id;
        console.log(currentUser.getUsername());
        var query = new this.parse.Query(Journey);
        query.equalTo("createdBy", currentUser);
        query.descending('createdAt');
        query.find(function (journey) {
            for (var j = 0; j < journey.length; j++) {
                var objt = journey[j];
                var videoUrl;
                var length;
                var dis = Math.floor(objt.get('distance'));
                if (objt.get('videoUrl')) {
                    videoUrl = objt.get('videoUrl');
                    length = 2;
                }
                else {
                    videoUrl = false;
                    length = 1;
                }
                var ms = new Date().getTime() - new Date(objt.get('createdAt')).getTime();
                var time = _this.timeConversion(ms);
                var millisec = new Date(objt.get('endDate')).getTime() - new Date(objt.get('startDate')).getTime();
                var timejourneytake = _this.timeConversion(millisec);
                _this.journeyData.push({
                    id: objt.id, description: objt.get('description'), posttime: time,
                    polyline: objt.get('polylines'), numMedia: objt.get('numOfMedia'),
                    distance: dis, title: objt.get('name'), view: objt.get('views'), numLikes: objt.get('likesCounter'),
                    video: videoUrl, length: length, startLocation: objt.get('startLocation'),
                    endLocation: objt.get('endLocation'), time: timejourneytake
                });
            }
            console.log(_this.journeyData);
        });
        var user_name;
        var user_Profimg;
    }
    UserJourniesComponent.prototype.ngOnInit = function () {
    };
    UserJourniesComponent.prototype.ngAfterViewChecked = function () {
        this.checkOverflowContent();
    };
    UserJourniesComponent.prototype.showComments = function (index, trackBy) {
        var _this = this;
        var e = document.getElementsByClassName('comment_box')[index];
        console.log('comment');
        console.log(__WEBPACK_IMPORTED_MODULE_6__util__["a" /* Util */].profileImg);
        this.profileImg = __WEBPACK_IMPORTED_MODULE_6__util__["a" /* Util */].profileImg;
        var messages1 = [];
        var Journey = this.parse.Object.extend('Journeys');
        var journey = new Journey();
        journey.id = trackBy;
        var Comment = this.parse.Object.extend('CommentJourney');
        var query = new this.parse.Query(Comment);
        query.equalTo("journey", journey);
        if (e.style.display === "none") {
            e.style.display = "block";
            var u_id;
            // 
            query.ascending('createdAt');
            query.include('user');
            query.find().then(function (comment) {
                // Do stuff
                var promise = _this.parse.Promise.as();
                __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](comment, function (resultObj) {
                    promise = promise.then(function (abc) {
                        var ob = resultObj;
                        console.log(ob.get('text'));
                        if (!ob.get('user').get('profilePic')) {
                            messages1.push({ from: ob.get('user').get('username'), image: imagePath, message: ob.get('text') });
                            console.log(_this.messages);
                        }
                        else {
                            messages1.push({ from: ob.get('user').get('username'), image: ob.get('user').get('profilePic').url(), message: ob.get('text') });
                        }
                    });
                });
                return promise;
            });
            this.messages[index] = messages1;
        }
        else {
            e.style.display = 'none';
        }
    };
    UserJourniesComponent.prototype.saveComment = function (event, post_id, index, type) {
        var _this = this;
        if (event.keyCode == 13) {
            var image = __WEBPACK_IMPORTED_MODULE_6__util__["a" /* Util */].profileImg;
            var currentUser = this.parse.User.current();
            var Journey = this.parse.Object.extend('Journeys');
            var journey = new Journey();
            journey.id = post_id;
            var Comment = this.parse.Object.extend('CommentJourney');
            var comment = new Comment();
            comment.set('user', currentUser);
            comment.set('journey', journey);
            comment.set('text', event.target.value);
            // for now
            comment.set('type', 'plain_comment');
            comment.save({
                success: function (comment) {
                    _this.messages[index].push({ from: _this.name, image: image, message: comment.get('text') });
                    // this.notifyComment(post);
                    console.log(comment);
                },
                error: function (comment, error) {
                    console.error(error);
                }
            });
            console.log(post_id);
            console.log(this.curuser_id);
            event.target.value = "";
        }
    };
    UserJourniesComponent.prototype.identity = function (index, item) {
        //  console.log(index);
        // console.log(item.id);
        return item.id;
    };
    UserJourniesComponent.prototype.displayArrow = function (index, length) {
        console.log(index);
        this.carouselComponent.displayArrow(index, length); //calling displayArrow func in carouselComponent to show arrow on card
    };
    UserJourniesComponent.prototype.hideArrow = function (index) {
        console.log('leave');
        this.carouselComponent.hideArrow(index); //calling hideArrow func in carouselComponent to hide arrow on card
    };
    UserJourniesComponent.prototype.playPauseVideo = function (index) {
        console.log('play');
        var el = document.getElementsByClassName('video')[index];
        var em = document.getElementsByClassName('playpause')[index];
        if (el.paused) {
            console.log('play2');
            el.play();
            em.style.opacity = '0';
        }
        else {
            el.pause();
            em.style.opacity = '1';
        }
    };
    UserJourniesComponent.prototype.showJourney = function (id, polyline) {
        console.log(polyline[0]);
        this._router.navigate(['journey/' + id + '/' + polyline[0]]);
    };
    UserJourniesComponent.prototype.incrementView = function (index, id, type) {
        if (type == 'post') {
            console.log('view incr');
            var Post = this.parse.Object.extend('Post');
            var post = new Post();
            post.id = id;
            post.increment('views');
            post.save();
        }
        else {
            /*  var Journey = this.parse.Object.extend('JourneyTest');
              var journeys = new Journey();
              journeys.id = id;
              journeys.increment('views');
              journeys.save();*/
        }
    };
    UserJourniesComponent.prototype.checkOverflowContent = function () {
        for (var i = 0; i < this.journeyData.length; i++) {
            var el = document.getElementById('contentOverflow-' + i);
            var em = document.getElementById('viewmore-' + i);
            if (el && em) {
                if (el.clientHeight < el.scrollHeight) {
                    em.style.display = 'block';
                }
                else {
                    el.style.height = '100%';
                }
            }
        }
    };
    UserJourniesComponent.prototype.timeConversion = function (millisec) {
        var seconds = (millisec / 1000).toFixed();
        var minutes = (millisec / (1000 * 60)).toFixed();
        var hours = (millisec / (1000 * 60 * 60)).toFixed();
        var days = (millisec / (1000 * 60 * 60 * 24)).toFixed();
        if (seconds < 60) {
            return seconds + " Sec";
        }
        else if (minutes < 60) {
            return minutes + " Min";
        }
        else if (hours < 24) {
            return hours + " Hrs";
        }
        else {
            return days + " Days";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__carousel_carousel_component__["a" /* CarouselComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_component__["a" /* CarouselComponent */])
    ], UserJourniesComponent.prototype, "carouselComponent", void 0);
    UserJourniesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-journies',
            template: __webpack_require__("../../../../../src/app/user-journies/user-journies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-journies/user-journies.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_modal__["h" /* Overlay */]])
    ], UserJourniesComponent);
    return UserJourniesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
/**
 * Constants and Holders
 */
var Util = (function () {
    function Util() {
    }
    /**
     * Logs error
     */
    Util.logErr = function (e, from) {
        console.error('Error at Place: ' + from, e);
    };
    /**
     * Constructs the sentence that appears in Notification Area
     * @param noti Parse Class Notification
     */
    Util.getSentence = function (noti) {
        var sentence = '';
        var actors = noti.get('actors');
        actors.forEach(function (actor, i) {
            if (i < actors.length - 1) {
                sentence += actor.get('name') + ', ';
            }
            else {
                // for last item
                sentence += actor.get('name') + ' ';
            }
        });
        // if count is greater than actors, then also mention the difference as others
        var diff = noti.get('count') - actors.length;
        if (diff > 0) {
            sentence += 'and ' + diff + ' others';
        }
        sentence += noti.get('verb') + ' on your ' + noti.get('affectedObjectType'); // + noti.get('meta.affectedObjectName'); 
        return sentence;
    };
    // static PARSE_SERVER_URL = 'http://localhost:1337/parse';
    Util.PARSE_SERVER_URL = 'http://xt1.westeurope.cloudapp.azure.com:1337/parse';
    // static PARSE_LIVE_QUERY_URL = 'ws://localhost:1337/parse/live/';
    Util.PARSE_LIVE_QUERY_URL = 'ws://xt1.westeurope.cloudapp.azure.com:1337/parse/live/';
    Util.PARSE_APP_ID = 'MY_APP_ID';
    return Util;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map