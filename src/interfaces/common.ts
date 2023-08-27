import { type Router } from 'express';

export interface Routes {
  url: string
  router: Router
};

export default interface ServiceResponse {
  code: number
  message: string | null
  data?: any
}
