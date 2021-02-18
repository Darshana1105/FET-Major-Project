import { Address } from "./address";
import { Food } from "./food";

export interface Restaurant {
    restaurantName:string
    restaurantLocation:Address
    workingHours:{start:number,end:number}
    activityStatus:boolean
    restaurantImages:Array<string>
    restaurantCategory:Array<string>
    restaurantRatings:Array<string>
    rating_avg:number
    userId:string
    menuDetails:Array<Food>
}
