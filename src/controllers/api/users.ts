import jwt, { Secret } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../../models/user';
import { RequestHandler, Response, Request } from "express";

interface SignUpBody {
  username: string,
  email: string,
  password: string,
};

export const create: RequestHandler<unknown, unknown, SignUpBody, unknown> = async (req, res) => {
  try {
    const user = await UserModel.create(req.body)
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    res.status(400).json
  };
};

export const login: RequestHandler = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.params });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    res.status(400).json('Bad Credentials');
  };
};

/*--- Helper Functions --*/

const SECRET: Secret = `${process.env.SECRET}`

const createJWT = (user: any) => {
  return jwt.sign(
    // data payload
    { user },
    SECRET,
    { expiresIn: '24h' }
  );
};