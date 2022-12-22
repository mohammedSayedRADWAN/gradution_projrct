"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var BlackBox_1 = require("../../controllers/tools/BlackBox");
var Expect_1 = require("../../controllers/tools/Expect");
var FuzzyTrend_1 = require("../../controllers/tools/FuzzyTrend");
var GoldenPattern_1 = require("../../controllers/tools/GoldenPattern");
var Trend_1 = require("../../controllers/tools/Trend");
var authintication_1 = require("../../midellware/authintication");
var routes = (0, express_1.Router)();
routes.post('/BlackBox', authintication_1.verifyUser, BlackBox_1.BlackBox);
routes.post('/Expect', authintication_1.verifyUser, Expect_1.Expect);
routes.post('/FuzzyTrend1', authintication_1.verifyUser, FuzzyTrend_1.FuzzyTrend1);
routes.post('/FuzzyTrend2', authintication_1.verifyUser, FuzzyTrend_1.FuzzyTrend2);
routes.post('/FuzzyTrend3', authintication_1.verifyUser, FuzzyTrend_1.FuzzyTrend3);
routes.post('/GoldenPattern', authintication_1.verifyUser, GoldenPattern_1.GoldenPattern);
routes.post('/Trend', authintication_1.verifyUser, Trend_1.Trend);
routes.use('/', function (req, res) {
    res.send('<a href="/BlackBox">BlackBox link</a><br><a href="/Expect">expect link</a><br><a href="/FuzzyTrend1">fuzzyTrend1 link</a><br><a href="/FuzzyTrend2">fuzzyTrend2 link</a><br><a href="/FuzzyTrend3">fuzzyTrend3 link</a><br><a href="/GoldenPattern">goldenPattren link</a><br><a href="/Trend">trend link</a>');
});
exports.default = routes;
