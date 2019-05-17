import { Component, OnInit } from '@angular/core';
import { LuffleService } from '../../services/luffle.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  public restaurants;

  constructor(private luffleService : LuffleService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(){
    this.luffleService.getRestaurants().subscribe(
      data => { this.restaurants = data },
      err => console.error(err),
      () => console.log("Restaurants loaded...")
    );
  }

}
