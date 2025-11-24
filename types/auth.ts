export interface User {
    id: string;
    email: string;
    name: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    user: User;
    accessToken: string;
    refreshToken: string;
  }

  export interface SignupRequest {
    name: string;
    email: string;
    password: string;
  }