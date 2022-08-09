import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { User } from './user.entity';
export declare class AuthController {
    private authService;
    private logger;
    constructor(authService: AuthService);
    signUp(authCredentialDto: AuthCredentialDto): Promise<User>;
    sighIn(authCredentialDto: AuthCredentialDto): Promise<string>;
}
