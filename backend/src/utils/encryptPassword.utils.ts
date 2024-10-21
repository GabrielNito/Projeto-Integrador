import bcrypt from 'bcrypt';

const HASH = 1024;

export async function encryptPassword(password: string) {
  return await bcrypt.hash(password, HASH);
}
