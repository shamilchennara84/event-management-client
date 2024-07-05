  export interface Event {
    _id: string; 
    title: string;
    description: string;
    date: Date; 
    location: string;
    time: string;
    mapLink: string;
    rsvps?: string[]; 
  }
