export interface JwtUser {
  userId: string;
  email: string;
  role: string;
  name: string;
}

export interface JwtPayload {
  sub: string;
  email: string;
  role: string;
}
