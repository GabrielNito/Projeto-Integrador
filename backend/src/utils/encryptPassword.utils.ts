import bcrypt from 'bcrypt';

const HASH = 1024;

export async function encryptPassword(password: string) {
  try {
    return await bcrypt.hash(password, HASH);
  } catch (error) {
    throw Error('unkown error');
  }
}
