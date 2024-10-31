import * as jose from 'jose';
import bcrypt from 'bcrypt';
import { UsersService } from './Users.service';

export class LoginService {
  private _userService = new UsersService();

  async authenticate(email: string, password: string) {
    const user = await this._userService.getUserByEmail(email);

    if (!user) {
      throw Error('User not found');
    }

    if (!user.password) {
      throw Error('Invalid password');
    }
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw Error('Invalid passoword');
    }

    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
      username: user.username,
      status: user.status,
    };
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const alg = 'HS256';

    const token = await new jose.SignJWT(payload)
      .setProtectedHeader({ alg })
      .setExpirationTime('30d')
      .setIssuedAt()
      .setIssuer('localhost://3001')
      .setSubject('user')
      .sign(secret);

    return token;
  }
}
