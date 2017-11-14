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
const login_service_1 = require("./login.service");
let LoginComponent = class LoginComponent {
    constructor(loginService) {
        this.loginService = loginService;
    }
    authenticate(username, password, error) {
        this.loginService.authenticate(username, password)
            .subscribe(res => {
            document.location.href = "/";
        }, err => {
            console.log(err);
            const error = JSON.parse(err.body);
        });
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: 'my-login',
        templateUrl: './login/login.component.html',
        providers: [login_service_1.LoginService]
        // styleUrls : ['src/client/login.component.css']
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=login.component.js.map