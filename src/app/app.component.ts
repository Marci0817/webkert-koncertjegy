import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConcertCardComponent } from './components/concert-card/concert-card.component';
import Concert from './models/concert.model';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form/auth-form.component';
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

  userIsLoggedIn = false;

  onUserLoggedIn() {
    this.userIsLoggedIn = true;
    console.log('A felhasználó be van jelentkezve!');
  }

  concerts: Concert[] = [
    {
      id: 1,
      name: 'Metallica',
      date: new Date('2023-10-01'),
      location: {
        name: 'Papp László Budapest Sportaréna',
        address: '1143 Budapest, Stefánia út 2.',
        city: 'Budapest',
      },
      artistName: 'Metallica',
      price: 12000,
      availableTickets: 100,
    },
    {
      id: 2,
      name: 'Edda Művek',
      date: new Date('2023-11-15'),
      location: {
        name: 'MVM Dome',
        address: '1146 Budapest, Istvánmezei út 3-5.',
        city: 'Budapest',
      },
      artistName: 'Edda Művek',
      price: 8000,
      availableTickets: 50,
    },
    {
      id: 3,
      name: 'Quimby',
      date: new Date('2023-12-20'),
      location: {
        name: 'Barba Negra',
        address: '1117 Budapest, Prielle Kornélia utca 4.',
        city: 'Budapest',
      },
      artistName: 'Quimby',
      price: 9000,
      availableTickets: 30,
    },
    {
      id: 4,
      name: 'Kispál és a Borz',
      date: new Date('2024-01-10'),
      location: {
        name: 'A38 Hajó',
        address: '1117 Budapest, Petőfi híd, budai hídfő',
        city: 'Budapest',
      },
      artistName: 'Kispál és a Borz',
      price: 7000,
      availableTickets: 20,
    },
    {
      id: 5,
      name: 'Tankcsapda',
      date: new Date('2024-02-05'),
      location: {
        name: 'Főnix Csarnok',
        address: '4028 Debrecen, Kassai út 26.',
        city: 'Debrecen',
      },
      artistName: 'Tankcsapda',
      price: 10000,
      availableTickets: 80,
    },
  ];
}
