import {NextFunction, Request, Response} from 'express';

export function ErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  return res.status(500).json({message: err.message});
}
