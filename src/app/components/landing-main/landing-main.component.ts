import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { RestaurantService } from 'src/app/utilities/restaurant.service';


@Component({
  selector: 'app-landing-main',
  templateUrl: './landing-main.component.html',
  styleUrls: ['./landing-main.component.scss']
})
export class LandingMainComponent implements OnInit {
  restaurants:any;
  constructor(private _restaurantService:RestaurantService) {this.restaurants=[] }

  ngOnInit(): void {
    this._restaurantService.getTopRestaurant().subscribe(data=>{
      console.log(data);
      if(data!=undefined)
      {
        this.restaurants=data;

      }
    })
  }

}
