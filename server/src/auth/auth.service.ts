import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserInput } from './dto/login-user.input';

@Injectable()
export class AuthService {
  async login(loginUserInput: LoginUserInput) {
    const user = await this.userService.findOne(loginUserInput.username);

    if (typeof user === 'string' && user === 'Users not found') {
      throw new UnauthorizedException();
    }

    if (user instanceof Error) {
      throw new UnauthorizedException();
    }

    if (typeof user !== 'string' && user.password !== loginUserInput.password) {
      throw new UnauthorizedException();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;

    return {
      access_token: '',
      user: result,
    };
  }
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);

    if (typeof user === 'string' && user === 'Users not found') {
      throw new UnauthorizedException();
    }

    if (user instanceof Error) {
      throw new UnauthorizedException();
    }

    if (typeof user !== 'string' && user.password !== pass) {
      throw new UnauthorizedException();
    }

    if (typeof user !== 'string') {
      const payload = { sub: user.id, username: user.name };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
  }
}
