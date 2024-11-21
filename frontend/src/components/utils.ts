export const API_URL =
  import.meta.env.VITE_FETCH_URL || "http://localhost:3001";

export async function fetchUserToken(): Promise<User> {
  try {
    const response = await fetch(
      "http://localhost:3001/api/login/authenticateByToken",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: localStorage.getItem("auth-token") }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = (await response.json()) as User;

    if (!("logado" in result) || !("admin" in result) || !("dados" in result)) {
      throw new Error("Invalid response structure");
    }

    return result;
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error("An unknown error occurred");
  }
}

interface UserData {
  allowedNotifications: any[];
  avatar: null | string;
  badges: any[];
  createdAt: string;
  createdPosts: any[];
  createdThreads: any[];
  email: string;
  id: number;
  likedPosts: string;
  likedThreads: string;
  password: string;
  role: "STUDENT" | string;
  status: "active" | string;
  updatedAt: string;
  username: string;
  visits: any[];
}

interface User {
  logado: boolean;
  admin: boolean;
  dados: UserData;
}

export type { User, UserData };
