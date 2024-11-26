import { Request } from "express";
import { CreateUsersDTO } from "../Dtos/create/CreateUsersDTO.dto";
import { UpdateUserDTO } from "../Dtos/update/UpdateUserDTO.dto";
import { UserRepository } from "../Repositories/Users.repository";
import { encryptPassword } from "../utils/encryptPassword.utils";
import * as jose from "jose";

export class UsersService {
  private _userRepository = new UserRepository();

  async getAllUsers(req: Request) {
    const token = req.headers.authorization;

    if (!token) {
      throw new Error("Authorization token is missing");
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    try {
      const { payload } = await jose.jwtVerify(token, secret, {
        issuer: "localhost://3001",
        subject: "user",
      });

      const user = await this.getUserByIdForAuthenticateToken(
        Number(payload.id)
      );

      if (user?.role !== "ADMIN") {
        throw Error("Operation not allowed");
      }

      const data = await this._userRepository.findMany();

      const newData = data.map((user) => {
        let { likedPosts, likedThreads, ...result } = user;
        let parsedLikedPosts = JSON.parse(likedPosts || "[]");
        let parsedLikedThreads = JSON.parse(likedThreads || "[]");

        return {
          ...result,
          likedPosts: parsedLikedPosts,
          likedThreads: parsedLikedThreads,
        };
      });

      return newData;
    } catch (error) {
      throw new Error("Invalid or expired token");
    }
  }

  async getUserById(id: number, req: Request) {
    // const user = req.user;
    const data = await this._userRepository.findById(id);

    // if (user?.role !== "ADMIN") {
    //   throw Error("Operation not allowed");
    // }
    if (!data) {
      throw Error("User not found");
    }
    let parsedLikedPosts = JSON.parse(data?.likedPosts || "[]");
    let parsedLikedThreads = JSON.parse(data?.likedThreads || "[]");

    return {
      ...data,
      likedPosts: parsedLikedPosts,
      likedThreads: parsedLikedThreads,
    };
  }

  async getUserByEmail(email: string) {
    const data = await this._userRepository.findByEmail(email);
    let parsedLikedPosts = JSON.parse(data?.likedPosts || "[]");
    let parsedLikedThreads = JSON.parse(data?.likedThreads || "[]");
    return {
      ...data,
      likedPosts: parsedLikedPosts,
      likedThreads: parsedLikedThreads,
    };
  }

  async createUser(data: CreateUsersDTO) {
    const { likedPosts, likedThreads } = data;
    const user = await this.getUserByEmail(data.email);

    data.password = await encryptPassword(data.password);

    if (user.email) {
      throw Error("Email já cadastrado");
    }

    const newData: CreateUsersDTO = {
      ...data,
      likedPosts: JSON.stringify(likedPosts) || "",
      likedThreads: JSON.stringify(likedThreads) || "",
    };

    const { password: undefined, ...created } =
      await this._userRepository.create(newData);
    return created;
  }

  async updateUser(data: UpdateUserDTO) {
    const user = await this._userRepository.findById(data.id);

    if (!user) {
      throw Error("User not found");
    }

    if (data.password) {
      data.password = await encryptPassword(data.password);
    }

    const { password: undefined, ...updated } =
      await this._userRepository.update(data);
    return updated;
  }

  async deleteUser(req: Request) {
    const userId = Number(req.params.id);
    const userFromToken = req.user;

    const user = await this._userRepository.findById(userId);

    if (user?.status === "inactive") {
      throw Error("User is already inactive");
    }
    if (
      !userFromToken?.role ||
      (userFromToken?.role !== "ADMIN" && userId !== userFromToken?.id)
    ) {
      throw Error("Operation not allowed");
    }

    const deleteUser = await this._userRepository.delete(userId, "inactive");

    return deleteUser;
  }

  async getUserByIdForAuthenticateToken(id: number) {
    return await this._userRepository.findById(id);
  }
}
