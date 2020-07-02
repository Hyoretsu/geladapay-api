import { Request, Response } from 'express';

export default class ExamplesController {
 public async create(req: Request, res: Response): Promise<Response> {
  return res.json({ message: 'Hello World' });
 }
}
