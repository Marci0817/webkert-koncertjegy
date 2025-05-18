import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../services/stats.service';
import { PriceFormatterPipe } from '../../pipes/price-formatter.pipe';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  imports: [PriceFormatterPipe],
})
export class StatsComponent implements OnInit {
  totalConcerts = 0;
  totalTickets = 0;
  maxPrice = 0;
  nextConcertDate: Date | null = null;

  loading = true;

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats() {
    this.loading = true;

    this.statsService
      .getTotalConcerts()
      .subscribe((count) => (this.totalConcerts = count));
    this.statsService
      .getTotalAvailableTickets()
      .subscribe((total) => (this.totalTickets = total));
    this.statsService
      .getMostExpensiveConcertPrice()
      .subscribe((price) => (this.maxPrice = price));
    this.statsService.getNextConcertDate().subscribe((date) => {
      this.nextConcertDate = date;
      this.loading = false;
    });
  }
}
