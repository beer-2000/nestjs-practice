import { AuthCredentialDto } from './dto/auth-credential.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
export declare class AuthService {
    private userRepository;
    private logger;
    constructor(userRepository: UserRepository);
    signUp(authCredentialDto: AuthCredentialDto): Promise<User>;
    signIn(authCredentialDto: AuthCredentialDto): Promise<string>;
}
