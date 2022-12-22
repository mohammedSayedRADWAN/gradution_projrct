"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var verifyRoles = function () {
    var allowedRoles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedRoles[_i] = arguments[_i];
    }
    return function (req, res, next) {
        if (!(req === null || req === void 0 ? void 0 : req.body.roles))
            return res.sendStatus(401);
        var rolesArray = __spreadArray([], allowedRoles, true);
        var result = req.body.roles.map(function (role) { return rolesArray.includes(role); }).find(function (val) { return val === true; });
        if (!result)
            return res.sendStatus(401);
        next();
    };
};
module.exports = verifyRoles;
