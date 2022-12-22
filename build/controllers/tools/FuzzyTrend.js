"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuzzyTrend3 = exports.FuzzyTrend2 = exports.FuzzyTrend1 = void 0;
var product_1 = require("../../models/product");
var info = new product_1.prodcutInfo();
var FuzzyTrend1 = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, FuzzyTrend, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                product = {
                    order_approved_at_start: req.body.order_approved_at_start,
                    order_approved_at_End: req.body.order_approved_at_End
                };
                return [4 /*yield*/, info.FuzzyTrend1(product)];
            case 1:
                FuzzyTrend = _a.sent();
                console.log(FuzzyTrend);
                return [2 /*return*/, res.json({
                        status: 'success',
                        message: 'FuzzyTrend successed',
                        data: __assign({}, FuzzyTrend)
                    })];
            case 2:
                err_1 = _a.sent();
                res.status(500);
                res.json(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.FuzzyTrend1 = FuzzyTrend1;
var FuzzyTrend2 = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, FuzzyTrend, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                product = {
                    order_approved_at_start: req.body.order_approved_at_start,
                    order_approved_at_End: req.body.order_approved_at_End
                };
                return [4 /*yield*/, info.FuzzyTrend2(product)];
            case 1:
                FuzzyTrend = _a.sent();
                return [2 /*return*/, res.json({
                        status: 'success',
                        message: 'FuzzyTrend successed',
                        data: __assign({}, FuzzyTrend)
                    })];
            case 2:
                err_2 = _a.sent();
                res.status(500);
                res.json(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.FuzzyTrend2 = FuzzyTrend2;
var FuzzyTrend3 = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, FuzzyTrend, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                product = {
                    order_approved_at_start: req.body.order_approved_at_start,
                    order_approved_at_End: req.body.order_approved_at_End,
                    product_category_name: req.body.product_category_name
                };
                return [4 /*yield*/, info.FuzzyTrend3(product)];
            case 1:
                FuzzyTrend = _a.sent();
                return [2 /*return*/, res.json({
                        status: 'success',
                        message: 'FuzzyTrend successed',
                        data: __assign({}, FuzzyTrend)
                    })];
            case 2:
                err_3 = _a.sent();
                res.status(500);
                res.json(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.FuzzyTrend3 = FuzzyTrend3;
