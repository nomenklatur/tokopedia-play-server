import bcrypt from 'bcrypt';

export function hashing (password: string) {
  return bcrypt.hashSync(password, 10);
}

export function validatePassword (userPassword: string, payloadPassword: string) {
  return bcrypt.compareSync(payloadPassword, userPassword);
}
