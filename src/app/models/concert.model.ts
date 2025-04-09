interface Concert {
  id: number;
  name: string;
  date: Date;
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
