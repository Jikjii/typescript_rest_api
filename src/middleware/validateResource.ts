import { Request, Response, NextFunction } from "express";
import { request } from "http";
import { AnyZodObject } from "zod";

// this middleware will make sure to validate the user with the given schema for example
// it wll validat if an email and password and both of them are strings
// also will make sure that the email is actually a email using ZOD

const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
    } catch (e: any) {
      return res.status(400).send(e.errors);
    }
  };

export default validate;
