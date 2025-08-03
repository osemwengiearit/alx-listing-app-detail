export interface PropertyProps {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  description: string;
  address: {
    city: string;
    country: string;
  };
  category: string[];
}
