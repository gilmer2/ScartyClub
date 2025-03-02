export interface Premios {
  _id: string;
  name: string;
  description: string;
  points: number;
  image: string;
}

export interface UpdatePremios {
    name?: string;
    description?: string;
    points?: number;
    image?: string;
}