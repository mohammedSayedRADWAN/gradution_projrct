"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prodcutInfo = void 0;
var database_1 = __importDefault(require("../database"));
var prodcutInfo = /** @class */ (function () {
    function prodcutInfo() {
    }
    prodcutInfo.prototype.BlackBox = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var price, review_score, product_category_name, connect, sql, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        price = product.price, review_score = product.review_score, product_category_name = product.product_category_name;
                        console.log('price=' + price);
                        console.log('review_score=' + review_score);
                        console.log('product_category_name=' + product_category_name);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "select m.product_id,product_category_name,review_score,price,counts\n      from(select product_id,count( product_id) as counts \n      from products\n      where product_category_name=$3\n      and price between 1 and $1\n      and review_score= $2\n      and order_approved_at between '2017-10-2' and '2018-08-6'\n      group by product_id )m\n       , (select  product_id,product_category_name,price,review_score,order_approved_at\n      from(select row_number() over(PARTITION BY product_id order by order_approved_at desc)as ranks,product_id,product_category_name,price,review_score,order_approved_at\n      from products\n      where product_category_name=$3\n      and price between 1 and $1\n      and review_score= $2\n      and order_approved_at between '2017-10-2' and '2018-08-6')s\n      where ranks=1 )u\n      where m.product_id=u.product_id \n       order by counts desc";
                        return [4 /*yield*/, connect.query(sql, [price, review_score, product_category_name])];
                    case 2:
                        res = _a.sent();
                        connect.release();
                        return [2 /*return*/, res.rows[0]];
                    case 3:
                        error_1 = _a.sent();
                        console.log('error=>>' + error_1);
                        throw new Error("can not predict prodcut".concat(error_1));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    prodcutInfo.prototype.Trend = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var price, review_score, product_category_name, connect, sql, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        price = product.price, review_score = product.review_score, product_category_name = product.product_category_name;
                        console.log('price=' + price);
                        console.log('review_score=' + review_score);
                        console.log('product_category_name=' + product_category_name);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "";
                        return [4 /*yield*/, connect.query(sql, [price, review_score, product_category_name])
                            //console.log(res);
                        ];
                    case 2:
                        res = _a.sent();
                        //console.log(res);
                        connect.release();
                        return [2 /*return*/, res.rows[0]];
                    case 3:
                        error_2 = _a.sent();
                        console.log('error=>>' + error_2);
                        throw new Error("can not predict prodcut".concat(error_2));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    prodcutInfo.prototype.Expect = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var price, review_score, product_category_name, connect, sql, res, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        price = product.price, review_score = product.review_score, product_category_name = product.product_category_name;
                        console.log('price=' + price);
                        console.log('review_score=' + review_score);
                        console.log('product_category_name=' + product_category_name);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "";
                        return [4 /*yield*/, connect.query(sql, [price, review_score, product_category_name])
                            //console.log(res);
                        ];
                    case 2:
                        res = _a.sent();
                        //console.log(res);
                        connect.release();
                        return [2 /*return*/, res.rows[0]];
                    case 3:
                        error_3 = _a.sent();
                        console.log('error=>>' + error_3);
                        throw new Error("can not predict prodcut".concat(error_3));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    prodcutInfo.prototype.FuzzyTrend1 = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var order_approved_at_start, order_approved_at_End, connect, sql, res, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        order_approved_at_start = product.order_approved_at_start, order_approved_at_End = product.order_approved_at_End;
                        console.log('order_approved_at=' + order_approved_at_start);
                        console.log('order_approved_at=' + order_approved_at_End);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "select  product_category_name,count(product_id) as counts\n      from products \n       where order_approved_at between $1 and $2\n        group by product_category_name \t\n        order by counts desc";
                        return [4 /*yield*/, connect.query(sql, [order_approved_at_start, order_approved_at_End])
                            //console.log(res);
                        ];
                    case 2:
                        res = _a.sent();
                        //console.log(res);
                        connect.release();
                        return [2 /*return*/, res.rows];
                    case 3:
                        error_4 = _a.sent();
                        console.log('error=>>' + error_4);
                        throw new Error("can not predict prodcut".concat(error_4));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    prodcutInfo.prototype.FuzzyTrend2 = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var order_approved_at_start, order_approved_at_End, connect, sql, res, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        order_approved_at_start = product.order_approved_at_start, order_approved_at_End = product.order_approved_at_End;
                        console.log('order_approved_at_start=' + order_approved_at_start);
                        console.log('order_approved_at_End=' + order_approved_at_End);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "select product_id,count(product_id) as counts\n      from products \n       where order_approved_at between $1 and $2\n        group by product_id\t\n        order by counts desc";
                        return [4 /*yield*/, connect.query(sql, [order_approved_at_start, order_approved_at_End])
                            //console.log(res);
                        ];
                    case 2:
                        res = _a.sent();
                        //console.log(res);
                        connect.release();
                        return [2 /*return*/, res.rows];
                    case 3:
                        error_5 = _a.sent();
                        console.log('error=>>' + error_5);
                        throw new Error("can not predict prodcut".concat(error_5));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    prodcutInfo.prototype.FuzzyTrend3 = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var order_approved_at_start, order_approved_at_End, product_category_name, connect, sql, res, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        order_approved_at_start = product.order_approved_at_start, order_approved_at_End = product.order_approved_at_End, product_category_name = product.product_category_name;
                        console.log('order_approved_at_start=' + order_approved_at_start);
                        console.log('order_approved_at_End=' + order_approved_at_End);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "select  product_id,count(product_id) as counts\n      from products \n       where order_approved_at between $1 and $2\n       and product_category_name =$3\n        group by product_id\t\n        order by counts desc";
                        return [4 /*yield*/, connect.query(sql, [order_approved_at_start, order_approved_at_End, product_category_name])
                            //console.log(res);
                        ];
                    case 2:
                        res = _a.sent();
                        //console.log(res);
                        connect.release();
                        return [2 /*return*/, res.rows[0]];
                    case 3:
                        error_6 = _a.sent();
                        console.log('error=>>' + error_6);
                        throw new Error("can not predict prodcut".concat(error_6));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    prodcutInfo.prototype.GoldenPattern = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var price, review_score, product_category_name, connect, sql, res, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        price = product.price, review_score = product.review_score, product_category_name = product.product_category_name;
                        console.log('price=' + price);
                        console.log('review_score=' + review_score);
                        console.log('product_category_name=' + product_category_name);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "";
                        return [4 /*yield*/, connect.query(sql, [price, review_score, product_category_name])
                            //console.log(res);
                        ];
                    case 2:
                        res = _a.sent();
                        //console.log(res);
                        connect.release();
                        return [2 /*return*/, res.rows[0]];
                    case 3:
                        error_7 = _a.sent();
                        console.log('error=>>' + error_7);
                        throw new Error("can not predict prodcut".concat(error_7));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return prodcutInfo;
}());
exports.prodcutInfo = prodcutInfo;
