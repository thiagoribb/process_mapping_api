import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export class SchemaValidation {
  constructor(private schema: Joi.ObjectSchema) {
    this.execute = this.execute.bind(this);
  }
  execute(req: Request, res: Response, next: NextFunction) {
    const validation = this.schema.validate(req.body, { abortEarly: false });
    console.log(this.schema);
    if (validation.error) {
      const errors = validation.error.details.map(
        (detail: { message: string }) => detail.message
      );
      return res
        .status(400)
        .json({ error: "Validation Error", details: errors });
    }

    next();
  }
}