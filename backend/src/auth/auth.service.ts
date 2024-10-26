import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user.entity';
import { Response, Request } from 'express';
import { QueryFailedError, Repository } from 'typeorm';
import * as bcryptjs from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // Register a new user
  async registerUser(user: User, resp: Response) {
    const { name, email, password } = user;

    // Check for required fiels
    if (!name?.trim() || !email?.trim() || !password?.trim()) {
      return resp.status(400).send({ msg: 'Please enter all fields' });
    }

    try {
      return await this.userRepository.save({
        name,
        email,
        password: await bcryptjs.hash(password, 12),
      });
    } catch (error) {
      console.error(error);
      if (error instanceof QueryFailedError) {
        if ((error as any).code === '23505') {
          console.error('Unique constraint failed');
          return resp
            .status(500)
            .send({ msg: 'There is already an account with this email' });
        }
      }
      return resp.status(500).send({ msg: error });
    }
  }

  // Login a user
  async loginUser(user: User, resp: Response) {
    const { email, password } = user;

    // Check for required fields
    if (!email?.trim() || !password?.trim()) {
      return resp.status(400).send({ msg: 'Please enter all fields' });
    }

    const userDB = await this.userRepository.findOne({ where: { email } });
    if (!user || !(await bcryptjs.compare(password, userDB.password))) {
      return resp.status(400).send({ msg: 'Invalid credentials' });
    }

    const accessToken = sign({ id: userDB.id }, 'access_secret', {
      expiresIn: 60 * 60,
    });

    const refreshToken = sign({ id: userDB.id }, 'refresh_secret', {
      expiresIn: 24 * 60 * 60,
    });

    resp.cookie('accessToken', accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000 * 24, // 1 Day
    });

    resp.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 * 7, // 7 Days
    });

    resp.status(200).send({ msg: 'Logged in' });
  }
  // AUTH USER
  async authUser(req: Request, resp: Response) {
    try {
      const accessToken = req.cookies['accessToken'];

      const payload: any = verify(accessToken, 'access_secret');

      if (!payload) {
        return resp.status(401).send({ msg: 'Unauthorized' });
      }

      const user = await this.userRepository.findOne(payload.id);

      if (!user) {
        return resp.status(404).send({ msg: 'User not found' });
      }

      return resp.status(200).send({ user });
    } catch (error) {
      console.error(error);
      return resp.status(500).send({ msg: error });
    }
  }

  async refreshUser(req: Request, resp: Response) {
    try {
      const refreshToken = req.cookies['refreshToken'];

      const payload: any = verify(refreshToken, 'refresh_secret');

      if (!payload) {
        return resp.status(401).send({ msg: 'Unauthorized' });
      }

      const accessToken = sign({ id: payload.id }, 'access_secret', {
        expiresIn: 60 * 60,
      });

      resp.cookie('accessToken', accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000 * 24,
      });

      return resp.status(200).send({ msg: 'Token refreshed' });
    } catch (error) {
      console.log(error);
      return resp.status(500).send({ msg: error });
    }
  }

  async logoutUser(req: Request, resp: Response) {
    resp.clearCookie('accessToken');
    resp.clearCookie('refreshToken');
    return resp.status(200).send({ msg: 'Logged out' });
  }
}
