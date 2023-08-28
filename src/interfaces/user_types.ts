export interface User {
  user_id: string
  email: string
  fullname: string
  password: string
  role: string
}

export interface RegisterUserPayload {
  fullname: string
  email: string
  password: string
}

export interface AuthUserPayload {
  email: string
  password: string
}

export interface RefreshSessionPayload {
  refresh_token: string
}
