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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const authentication_service_1 = require("./authentication.service");
let AuthenticationComponent = class AuthenticationComponent {
    constructor(authenticationService, route, router) {
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    login(username, password, error) {
        this.authenticationService.login(username, password)
            .subscribe(res => {
            document.location.href = "/";
        }, err => {
            console.log(err);
            const error = JSON.parse(err.body);
        });
    }
};
AuthenticationComponent = __decorate([
    core_1.Component({
        selector: 'my-authentication',
        templateUrl: './authentication/authentication.component.html',
        providers: [authentication_service_1.AuthenticationService]
        // styleUrls : ['src/client/login.component.css']
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        router_1.ActivatedRoute,
        router_1.Router])
], AuthenticationComponent);
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=authentication.component.js.map