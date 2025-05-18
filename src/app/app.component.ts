import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConcertCardComponent } from './components/concert-card/concert-card.component';
import Concert from './models/concert.model';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { inject } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  Timestamp,
} from '@angular/fire/firestore';
import { ConcertService } from './services/concert.service';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ConcertCardComponent,
    CommonModule,
    AuthFormComponent,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'webkert-koncertjegy';

  onTicketPurchased(concert: Concert) {
    alert(`Vettél egy jegyet erre: ${concert.name}`);
  }
  constructor(private concertService: ConcertService) {}

  userIsLoggedIn = false;

  onUserLoggedIn() {
    this.userIsLoggedIn = true;
    console.log('A felhasználó be van jelentkezve!');
  }
  ngOnInit(): void {
    this.initConcerts();
  }

  concerts: Concert[] = [];
  initConcerts(): void {
    this.concertService
      .getNextConcerts(new Timestamp(new Date('2025.06.10').getSeconds(), 0))
      .subscribe((concerts) => {
        this.concerts = concerts;
      });
  }

  loadAllConcerts(): void {
    this.concertService.getConcerts().subscribe((concerts) => {
      this.concerts = concerts;
    });
  }
}
