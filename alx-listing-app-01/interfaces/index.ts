export interface Address {
  city: string;
  country: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  address: Address;
  image: string;
  price: number;
  description: string;
  category: string[];
}
