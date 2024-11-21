import * as jose from "jose";

export async function validadeAuthToken() {
  const token = localStorage.getItem("auth-token");
  if (!token) {
    return {
      value: false,
      message: "Token not found",
    };
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const data = await jose.jwtVerify(token, secret);

    if (!data) {
      return {
        value: false,
        message: "Unauthenticated",
      };
    }

    return {
      value: true,
      message: "Authenticated",
    };
  } catch (error) {
    return {
      value: false,
      message: error,
    };
  }
}
