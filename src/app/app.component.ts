import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConcertCardComponent } from './components/concert-card/concert-card.component';
import Concert from './models/concert.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConcertCardComponent, CommonModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'webkert-koncertjegy';

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
  ];
}
