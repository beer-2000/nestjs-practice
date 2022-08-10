import { Repository } from "typeorm";
import { AuthCredentialDto } from "./dto/auth-credential.dto";
import { User } from "./user.entity";
import { Board } from "src/boards/board.entity";
export declare class UserRepository extends Repository<User> {
    private logger;
    createUser(authCredentialDto: AuthCredentialDto): Promise<User>;
    saveBoardInUser(user: User, board: Board): Promise<void>;
}
