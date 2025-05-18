import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  addDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  DocumentData,
  CollectionReference,
} from '@angular/fire/firestore';
import { from, map, Observable } from 'rxjs';
import { Timestamp } from '@angular/fire/firestore';
import Concert from '../models/concert.model';

@Injectable({
  providedIn: 'root',
})
export class ConcertService {
  private concertCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.concertCollection = collection(this.firestore, 'concerts');
  }

  getFirestore() {
    return this.firestore;
  }

  addConcert(concert: Concert): Promise<any> {
    return addDoc(this.concertCollection, concert);
  }

  getConcerts(): Observable<Concert[]> {
    return from(getDocs(this.concertCollection)).pipe(
      map((snapshot) =>
        snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as Concert)
        )
      )
    );
  }

  getConcertById(id: string): Promise<Concert | undefined> {
    const docRef = doc(this.firestore, 'concerts', id);
    return getDoc(docRef).then((docSnap) =>
      docSnap.exists()
        ? ({ id: docSnap.id, ...docSnap.data() } as Concert)
        : undefined
    );
  }

  updateConcert(id: string, data: Partial<Concert>): Promise<void> {
    const docRef = doc(this.firestore, 'concerts', id);
    return updateDoc(docRef, data);
  }

  deleteConcert(id: string): Promise<void> {
    const docRef = doc(this.firestore, 'concerts', id);
    return deleteDoc(docRef);
  }

  /* INNEN KEZDŐDNEK A KOMPLEX LEKÉRDEZÉSEK!!!!!!! CSINÁLTAM!!!  */
  getConcertsByCity(city: string): Observable<Concert[]> {
    const q = query(this.concertCollection, where('location.city', '==', city));
    return from(getDocs(q)).pipe(
      map((snapshot) =>
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Concert))
      )
    );
  }
  getUpcomingConcerts(): Observable<Concert[]> {
    const q = query(this.concertCollection, orderBy('date', 'asc'));
    return from(getDocs(q)).pipe(
      map((snapshot) =>
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Concert))
      )
    );
  }

  getTop5Concerts(): Observable<Concert[]> {
    const q = query(this.concertCollection, orderBy('date', 'asc'), limit(5));
    return from(getDocs(q)).pipe(
      map((snapshot) =>
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Concert))
      )
    );
  }
  getNextConcerts(lastDate: Timestamp): Observable<Concert[]> {
    const q = query(
      this.concertCollection,
      orderBy('date'),
      startAfter(lastDate),
      limit(5)
    );
    return from(getDocs(q)).pipe(
      map((snapshot) =>
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Concert))
      )
    );
  }
}
