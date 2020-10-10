"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AnimeController {
    constructor() {
        this.animeList = [];
        this.lastId = 0;
    }
    async getAll(_, response) {
        response.send(this.animeList);
    }
    async getById(request, response) {
        const id = Number.parseInt(request.params.id);
        response.send(this.animeList.find(anime => anime.id === id));
    }
    async insert(request, response) {
        const anime = { ...request.body, id: this.lastId++ };
        this.animeList.push(anime);
        response.send(anime);
    }
}
exports.default = AnimeController;
//# sourceMappingURL=StarsController.js.map