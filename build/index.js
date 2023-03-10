"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var handlers_1 = __importDefault(require("./handlers"));
var morgan_1 = __importDefault(require("morgan"));
var dotenv = __importStar(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
//import db from './database'
//import client from './database'
dotenv.config();
//console.log(dotenv.config())
var PORT = process.env.PORT || 3000;
// create an instance server
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// HTTP request logger middleware
app.use((0, morgan_1.default)('common'));
app.use('/api', handlers_1.default);
// add routing for / path
app.get('/', function (req, res) {
    res.json({
        message: 'Hello World from app🌍'
    });
});
// start express server
app.listen(PORT, function () {
    console.log("Server is starting at prot:".concat(PORT));
});
exports.default = app;
