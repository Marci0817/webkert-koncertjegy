import { Timestamp } from 'firebase/firestore';

interface Concert {
  id?: string;
  name: string;
  date: Timestamp;
  location: Location;
  artistName: string;
  price: number;
  availableTickets: number;
}

interface Location {
  name: string;
  address: string;
  city: string;
}

export default Concert;
