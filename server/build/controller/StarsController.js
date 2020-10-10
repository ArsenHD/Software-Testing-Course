"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Star_1 = tslib_1.__importDefault(require("../model/Star"));
class StarsController {
    constructor() {
        this.starsList = [
            new Star_1.default("Sun", 0, 4.6, 1, "http://localhost:3000/Sun.jpg", 0),
            new Star_1.default("Betelgeuse", 642.5, 0.008, 11.6, "http://localhost:3000/Betelgeuse.jpg", 1),
            new Star_1.default("Sirius", 8.6, 0.242, 2.06, "http://localhost:3000/Sirius.jpg", 2),
            new Star_1.default("Alpha Centauri A", 4.37, 5, 1.1, "http://localhost:3000/AlphaCentauriA.jpg", 3),
            new Star_1.default("Alpha Centauri B", 4.37, 5.3, 0.907, "http://localhost:3000/AlphaCentauriB.jpg", 4),
            new Star_1.default("Arcturus", 36.7, 7.1, 1.08, "http://localhost:3000/Arcturus.png", 5),
        ];
        this.lastId = 5;
    }
    async getAll(_, response) {
        response.send(this.starsList);
    }
    async getById(request, response) {
        const id = Number.parseInt(request.params.id);
        response.send(this.starsList.find(star => star.id === id));
    }
    async insert(request, response) {
        const star = { ...request.body, id: ++this.lastId };
        this.starsList.push(star);
        response.send(star);
    }
}
exports.default = StarsController;
//# sourceMappingURL=StarsController.js.map