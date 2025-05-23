import { Component, EventEmitter, Input, Output } from '@angular/core';
import Concert from '../../models/concert.model';
import { MatCardModule } from '@angular/material/card';
import { MatCardActions } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardSubtitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { CapitalizePipe } from '../../pipes//capitalize.pipe';
import { PriceFormatterPipe } from '../../pipes/price-formatter.pipe';
import { Timestamp } from '@angular/fire/firestore';
import { ConcertService } from '../../services/concert.service';
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
    CapitalizePipe,
  ],
})
export class ConcertCardComponent {
  @Input() concert!: Concert;

  @Output() ticketPurchased = new EventEmitter<Concert>();

  buyTicket() {
    console.log(`Jegy vásárlása: ${this.concert.name}`);
    this.ticketPurchased.emit(this.concert);
  }
  constructor(private concertService: ConcertService) {}
  ngOnChanges(changes: any) {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      //console.log(inputValues.currentValue);
    }
  }
  concertDate!: Date;
  ngOnInit() {
    if (this.concert?.date) {
      const ts = this.concert.date;
      let date = new Timestamp(ts.seconds, ts.nanoseconds);
      this.concertDate = date.toDate();
    }
  }
}
