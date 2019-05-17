import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

const routes: Routes = [
  {
    path : 'restaurants',
    component : RestaurantsComponent
  },
  {
    path : 'reviews',
    component : ReviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
