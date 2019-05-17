import { Component, OnInit } from '@angular/core';
import { RestaurantService }from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  public restaurants;

  constructor(private restaurantService : RestaurantService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(){
    this.restaurantService.getRestaurants().subscribe(
      data => { this.restaurants = data },
      err => console.error(err),
      () => console.log("Restaurants loaded...")
    );
  }

}
