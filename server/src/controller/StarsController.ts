import Star from "../model/Star";
import {Request, Response} from "express";

export default class StarsController {
    private starsList: Star[] = [
        new Star("Sun", 0, 4.6, 1, "http://localhost:3000/Sun.jpg", 0),
        new Star("Betelgeuse", 642.5, 0.008, 11.6, "http://localhost:3000/Betelgeuse.jpg", 1),
        new Star("Sirius", 8.6, 0.242, 2.06, "http://localhost:3000/Sirius.jpg", 2),
        new Star("Alpha Centauri A", 4.37, 5, 1.1, "http://localhost:3000/AlphaCentauriA.jpg", 3),
        new Star("Alpha Centauri B", 4.37, 5.3, 0.907, "http://localhost:3000/AlphaCentauriB.jpg", 4),
        new Star("Arcturus", 36.7, 7.1, 1.08, "http://localhost:3000/Arcturus.png", 5),
    ];
    private lastId: number = 5;

    async getAll(_: Request, response: Response) {
        response.send(this.starsList);
    }

    async getById(request: Request, response: Response) {
        const id = Number.parseInt(request.params.id);
        response.send(
            this.starsList.find(star => star.id === id)
        );
    }

    async insert(request: Request, response: Response) {
        const star = {...request.body, id: ++this.lastId} as Star;
        this.starsList.push(star);
        response.send(star);
    }
}
