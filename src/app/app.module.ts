import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { ReviewsComponent } from './components/reviews/reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    RestaurantsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
