import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { RestaurantService } from 'src/app/utilities/restaurant.service';


@Component({
  selector: 'app-landing-main',
  templateUrl: './landing-main.component.html',
  styleUrls: ['./landing-main.component.scss']
})
export class LandingMainComponent implements OnInit {
  topRestaurants:any;
  topFoods:any;

  constructor(private _restaurantService:RestaurantService) {
    this.topRestaurants=[]
    this.topFoods=[]
   }

  ngOnInit(): void {
    this._restaurantService.getTopRestaurants().subscribe(data=>{
      console.log(data);
      if(data!=undefined)
      {
        this.topRestaurants=data;
      }
    });
    this._restaurantService.getTopFoods().subscribe(data=>{
      console.log(data);
      
      if(data!=undefined){
        this.topFoods=data;
      }
    })

  }

}
