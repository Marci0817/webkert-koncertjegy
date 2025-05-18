import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'webkert-207f0',
        appId: '1:997727825029:web:7e74957c9ddedc68f78dec',
        databaseURL: 'https://webkert-207f0-default-rtdb.firebaseio.com',
        storageBucket: 'webkert-207f0.firebasestorage.app',
        apiKey: 'AIzaSyAumbEpNfQfdP8Q22Ji1-tqRv0lLuzsAwc',
        authDomain: 'webkert-207f0.firebaseapp.com',
        messagingSenderId: '997727825029',
        measurementId: 'G-NPLJ6Q79EM',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
