import bcrypt from 'bcrypt';

export function hashing (password: string) {
  return bcrypt.hashSync(password, 10);
}
