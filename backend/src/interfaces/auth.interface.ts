/* eslint-disable prettier/prettier */
export interface GoogleUser {
    googleId: string;
    email: string;
    firstName: string;
    lastName: string;
    picture: string;
    accessToken: string;
  }
  
  export interface JwtPayload {
    email: string;
    sub: string;
    role: 'admin' | 'organisateur';
  }