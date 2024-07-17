"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const readingController_1 = require("../controllers/readingController");
const router = (0, express_1.Router)();
router.post('/getReading', readingController_1.getReading);
exports.default = router;
