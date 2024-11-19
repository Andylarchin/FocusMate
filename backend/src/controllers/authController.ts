import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const registerUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { email, password, username, cognitoId } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
      },
    });
    res.status(201).json(newUser);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error registering user: ${error.message}` });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });
    res.json({ token });
  } catch (error: any) {
    res.status(500).json({ message: `Error logging in: ${error.message}` });
  }
};
