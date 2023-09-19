import { NextFunction, Request, Response } from 'express';

const createBook = (req: Request, res: Response, next: NextFunction) => {};

const readBook = (req: Request, res: Response, next: NextFunction) => {};

const readAll = (req: Request, res: Response, next: NextFunction) => {};

const updateBook = (req: Request, res: Response, next: NextFunction) => {};

const deleteBook = (req: Request, res: Response, next: NextFunction) => {};

export default {
  createBook,
  readAll,
  readBook,
  updateBook,
  deleteBook
};
