"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const StarsController_1 = tslib_1.__importDefault(require("./controller/StarsController"));
const starsController = new StarsController_1.default();
function setupRoutes(app) {
    app.get("/stars", (req, res) => starsController.getAll(req, res));
    app.get("/stars/:id", (req, res) => starsController.getById(req, res));
    app.post("/stars", (req, res) => starsController.insert(req, res));
    app.all('*', (_, res) => res.sendStatus(404));
}
exports.setupRoutes = setupRoutes;
//# sourceMappingURL=routes.js.map