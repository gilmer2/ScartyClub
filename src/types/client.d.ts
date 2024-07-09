export interface client {
  _id: string;
  firstName: string;
  lastName: string;
  mobilePhone: string;
  address: string;
  email: string;
  city: string;
  state: string;
  points: number;
  role: string;
}

export interface UpdateClient {
  firstName?: string;
  lastName?: string;
  mobilePhone?: string;
  address?: string;
  email?: string;
  city?: string;
  state?: string;
  points?: number;
  role?: string;
}

export interface user {
  username: string;
  role: string;
}
