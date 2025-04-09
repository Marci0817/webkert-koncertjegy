import { Component, Input } from '@angular/core';
import Concert from '../../models/concert.model';
import { MatCardModule } from '@angular/material/card';
import { MatCardActions } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardSubtitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { PriceFormatterPipe } from '../../pipes/price-formatter.pipe';
@Component({
  selector: 'app-concert-card',
  templateUrl: './concert-card.component.html',
  styleUrls: ['./concert-card.component.css'],
  imports: [
    MatCardModule,
    MatCardActions,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    PriceFormatterPipe,
  ],
})
export class ConcertCardComponent {
  @Input() concert!: Concert;

  buyTicket() {
    console.log(`Jegy vásárlása: ${this.concert.name}`);
  }
}
