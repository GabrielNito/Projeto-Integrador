import * as jose from "jose";
import bcrypt from "bcrypt";
import { UsersService } from "./Users.service";

export class LoginService {
  private _userService = new UsersService();

  async authenticate(email: string, password: string) {
    const user = await this._userService.getUserByEmail(email);

    if (!user) {
      throw Error("User not found");
    }

    if (!user.password) {
      throw Error("Invalid password");
    }
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw Error("Invalid passoword");
    }

    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
      username: user.username,
      status: user.status,
    };
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const alg = "HS256";

    const token = await new jose.SignJWT(payload)
      .setProtectedHeader({ alg })
      .setExpirationTime("30d")
      .setIssuedAt()
      .setIssuer("localhost://3001")
      .setSubject("user")
      .sign(secret);

    return token;
  }

  async authenticateByToken(token: string) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);

      const { payload } = await jose.jwtVerify(token, secret, {
        issuer: "localhost://3001",
        subject: "user",
      });

      const user = await this._userService.getUserByIdForAuthenticateToken(
        Number(payload.id)
      );
      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      const data = {
        logado: true,
        admin: user.role === "ADMIN",
        dados: user,
      };

      return data;
    } catch (error) {
      throw new Error("Token inválido ou expirado");
    }
  }
}
