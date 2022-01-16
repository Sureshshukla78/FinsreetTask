const express = require("express");
const app = express();
const route = express.Router();
const services = require('../services/services');

/**
 * @description Root Route
 * @method GET/
 */
route.get("/", services.homeRoutes);

module.exports = route;