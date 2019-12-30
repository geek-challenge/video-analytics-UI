export interface LoginJwtModel {
  user: {
    id: number,
    name: string,
    email: string,
    password?: string;
    pin: number
  },
  access_token: string,
  expires_in: number
}
