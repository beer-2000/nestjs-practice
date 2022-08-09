import { ConflictException, InternalServerErrorException, Logger } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialDto } from "./dto/auth-credential.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcryptjs';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    private logger = new Logger('UserRepository');
    async createUser(authCredentialDto: AuthCredentialDto): Promise<User> {
        const{ username, password } = authCredentialDto;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await this.create({ username, password: hashedPassword })
        
        try {
            await this.save(user);
            return user;
        } catch (error) {
            if (error.errno === 1062) {
                throw new ConflictException('Existing username');
            }
            throw new InternalServerErrorException;
        }
    }
}
