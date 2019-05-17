import { Component, OnInit } from '@angular/core';
import { LuffleService } from '../../services/luffle.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  public reviews;

  constructor(private luffleService : LuffleService) { }

  ngOnInit() {
    this.getReviews();
  }

  getReviews(){
    this.luffleService.getReviews().subscribe(
      data => { this.reviews = data },
      err => console.error(err),
      () => console.log("Restaurants loaded...")
    );
  }

}
