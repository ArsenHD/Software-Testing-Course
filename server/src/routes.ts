import { Express, Response } from 'express';
import StarsController from "./controller/StarsController";

const starsController = new StarsController()

export function setupRoutes(app: Express): void {
  app.get("/stars", (req, res) => starsController.getAll(req, res));
  app.get("/stars/:id", (req, res) => starsController.getById(req, res));
  app.post("/stars", (req, res) => starsController.insert(req, res));
  app.all('*',
    (_, res: Response) =>
      res.sendStatus(404)
  );
}
