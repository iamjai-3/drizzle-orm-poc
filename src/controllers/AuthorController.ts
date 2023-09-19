import { NextFunction, Request, Response } from 'express';

const createAuthor = (req: Request, res: Response, next: NextFunction) => {};

const readAuthor = (req: Request, res: Response, next: NextFunction) => {};

const readAll = (req: Request, res: Response, next: NextFunction) => {};

const updateAuthor = (req: Request, res: Response, next: NextFunction) => {};

const deleteAuthor = (req: Request, res: Response, next: NextFunction) => {};

export default {
  createAuthor,
  readAll,
  readAuthor,
  updateAuthor,
  deleteAuthor
};
