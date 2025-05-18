import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  CollectionReference,
} from '@angular/fire/firestore';
import { from, map, Observable } from 'rxjs';
import Concert from '../models/concert.model';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private concertCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.concertCollection = collection(this.firestore, 'concerts');
  }

  getTotalConcerts(): Observable<number> {
    return from(getDocs(this.concertCollection)).pipe(
      map((snapshot) => snapshot.size)
    );
  }

  getTotalAvailableTickets(): Observable<number> {
    return from(getDocs(this.concertCollection)).pipe(
      map((snapshot) => {
        let total = 0;
        snapshot.docs.forEach((doc) => {
          const concert = doc.data() as Concert;
          total += concert.availableTickets || 0;
        });
        return total;
      })
    );
  }

  getMostExpensiveConcertPrice(): Observable<number> {
    const q = query(this.concertCollection, orderBy('price', 'desc'), limit(1));
    return from(getDocs(q)).pipe(
      map((snapshot) => {
        if (snapshot.empty) return 0;
        return (snapshot.docs[0].data() as Concert).price || 0;
      })
    );
  }

  getNextConcertDate(): Observable<Date | null> {
    const now = new Date();
    const q = query(this.concertCollection, orderBy('date', 'asc'));
    return from(getDocs(q)).pipe(
      map((snapshot) => {
        for (const doc of snapshot.docs) {
          const concert = doc.data() as Concert;
          if (concert.date.toDate() > now) {
            return concert.date.toDate();
          }
        }
        return null;
      })
    );
  }
}
