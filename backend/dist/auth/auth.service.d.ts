import { User } from 'src/user.entity';
import { Response, Request } from 'express';
import { Repository } from 'typeorm';
export declare class AuthService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    registerUser(user: User, resp: Response): Promise<Response<any, Record<string, any>>>;
    loginUser(user: User, resp: Response): Promise<Response<any, Record<string, any>>>;
    authUser(req: Request, resp: Response): Promise<Response<any, Record<string, any>>>;
    refreshUser(req: Request, resp: Response): Promise<Response<any, Record<string, any>>>;
    logoutUser(req: Request, resp: Response): Promise<Response<any, Record<string, any>>>;
}
