import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {
 
  @Input() restaurant:any;

  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.restaurant);

  }

}
