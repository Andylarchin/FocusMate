import { Request, Response } from 'express';
import { User } from 'src/user.entity';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerUser(user: User, resp: Response): Promise<Response<any, Record<string, any>> | ({
        name: string;
        email: string;
        password: string;
    } & User)>;
    loginUser(user: User, resp: Response): Promise<Response<any, Record<string, any>>>;
    authUser(req: Request, resp: Response): Promise<Response<any, Record<string, any>>>;
    refreshUser(req: Request, resp: Response): Promise<Response<any, Record<string, any>>>;
    logoutUser(req: Request, resp: Response): Promise<Response<any, Record<string, any>>>;
}
