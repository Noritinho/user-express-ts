import AppError from '../utils/AppError';
import { Request, Response } from 'express';

export default class UsersController {
    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;

        try {
            return res.status(201).json();
        } catch (e) {
            throw new AppError(`${e}`, 404);
        }
    }
}
