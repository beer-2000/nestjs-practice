import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/^[a-zA-Z\d`~!@#$%^&*()-_=+]*$/, {
        message: 'password only accepts english, number, and special character on number keypad'
    })
    password: string;
}
