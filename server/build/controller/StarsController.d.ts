import { Request, Response } from "express";
export default class StarsController {
    private starsList;
    private lastId;
    getAll(_: Request, response: Response): Promise<void>;
    getById(request: Request, response: Response): Promise<void>;
    insert(request: Request, response: Response): Promise<void>;
}
