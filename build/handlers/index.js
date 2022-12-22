"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_1 = __importDefault(require("./api/user"));
var admin_1 = __importDefault(require("./api/admin"));
var tools_1 = __importDefault(require("./api/tools"));
var routes = (0, express_1.default)();
routes.use('/Tools', tools_1.default);
routes.use('/users', user_1.default);
routes.use('/admin', admin_1.default);
exports.default = routes;
