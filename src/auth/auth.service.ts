import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    private logger = new Logger('BoardsController');
	constructor(
		@InjectRepository(UserRepository)
		private userRepository: UserRepository,
	) {};

    async signUp(authCredentialDto: AuthCredentialDto): Promise<User> {
        return this.userRepository.createUser(authCredentialDto);
    }

    async signIn(authCredentialDto: AuthCredentialDto): Promise<string> {
        const { username, password } = authCredentialDto;
        const user = await this.userRepository.findOne({ username });
        
        if(user && (await bcrypt.compare(password, user.password))) {
            return 'login success';
        } else {
            throw new UnauthorizedException('Login failed');
        }
    }
}
