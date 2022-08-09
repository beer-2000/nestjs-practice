import { Repository } from "typeorm";
import { AuthCredentialDto } from "./dto/auth-credential.dto";
import { User } from "./user.entity";
export declare class UserRepository extends Repository<User> {
    private logger;
    createUser(authCredentialDto: AuthCredentialDto): Promise<User>;
}
