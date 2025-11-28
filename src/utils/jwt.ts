import envVars from '@/config/env.config';
import jwt, { JwtPayload } from 'jsonwebtoken';

const verifyToken = (accessToken: string): JwtPayload | string => {
  return jwt.verify(accessToken, envVars.jwt.accessSecret as string);
};

export { verifyToken };
