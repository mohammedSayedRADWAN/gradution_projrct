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
exports.orderInfo = void 0;
var database_1 = __importDefault(require("../database"));
var orderInfo = /** @class */ (function () {
    function orderInfo() {
        this.table = 'orders';
    }
    orderInfo.prototype.getOrders = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "SELECT * FROM orders WHERE user_id=$1";
                        return [4 /*yield*/, connect.query(sql, [userId])];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        err_1 = _a.sent();
                        throw new Error("Could not get all orders of user. Error: ".concat(err_1));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    orderInfo.prototype.showCrruntOrder = function (user_id) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, connect, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        sql = 'SELECT * FROM orders WHERE user_id=$1 ORDER BY id DESC LIMIT 1';
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        return [4 /*yield*/, connect.query(sql, [user_id])];
                    case 2:
                        res = _a.sent();
                        connect.release();
                        return [2 /*return*/, res.rows[0]];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("can not get user".concat(error_1));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    orderInfo.prototype.getActiveOrdersByUserId = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var status_1, connect, sql, result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        status_1 = 'active';
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = 'SELECT * FROM orders WHERE user_id = $1 AND status_order = $2';
                        return [4 /*yield*/, connect.query(sql, [userId, status_1])];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        err_2 = _a.sent();
                        throw new Error("Could not get active order. Error: ".concat(err_2));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // select completed order by user id
    orderInfo.prototype.getCompletedOrdersByUserId = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var status_2, connect, sql, result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        status_2 = 'complete';
                        return [4 /*yield*/, database_1.default.connect()
                            //const sql = `SELECT * FROM ${this.table} WHERE user_id = ${userId} AND status_order = $1`;
                            // const result = await connect.query(sql, [status]);
                        ];
                    case 1:
                        connect = _a.sent();
                        sql = 'SELECT * FROM orders WHERE user_id = $1 AND status_order = $2';
                        return [4 /*yield*/, connect.query(sql, [userId, status_2])];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        //console.log(result.rows);
                        return [2 /*return*/, result.rows];
                    case 3:
                        err_3 = _a.sent();
                        throw new Error("Could not get completed orders. Error: ".concat(err_3));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    orderInfo.prototype.createOrder = function (user_id, status_order) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, result, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = 'INSERT INTO orders (user_id, status_order) VALUES($1, $2) RETURNING *';
                        return [4 /*yield*/, connect.query(sql, [user_id, status_order])];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_4 = _a.sent();
                        throw new Error("Could not create order. Error: ".concat(err_4));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    orderInfo.prototype.addProduct = function (product_id, order_id, quantity) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, result, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = 'INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *';
                        return [4 /*yield*/, connect.query(sql, [quantity, order_id, product_id])];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_5 = _a.sent();
                        throw new Error("Could not add product to order. Error: ".concat(err_5));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    orderInfo.prototype.updateOrderStatus = function (status, orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, result, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()
                            //id of order
                        ];
                    case 1:
                        connect = _a.sent();
                        sql = 'UPDATE orders SET status_order = $1 WHERE id = $2 RETURNING *';
                        return [4 /*yield*/, connect.query(sql, [status, orderId])];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        //console.log(result.rows[0]);
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_6 = _a.sent();
                        throw new Error("Could not update order status. Error: ".concat(err_6));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    orderInfo.prototype.deleteOrder = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, result, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = 'DELETE FROM orders WHERE id= $1 RETURNING *';
                        return [4 /*yield*/, connect.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_7 = _a.sent();
                        throw new Error("Could not delete order ".concat(id, ". Error: ").concat(err_7));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return orderInfo;
}());
exports.orderInfo = orderInfo;
