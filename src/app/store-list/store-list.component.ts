import { Component, OnInit } from '@angular/core';

// services
import { StoreLocationService } from './store-location.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {

  constructor(
    private storeLocationService: StoreLocationService
  ) {}

  stores: any[];
  position: any;
  geolocationPermissionGranted: number = 0;

  /*
   *  @function getStores
   *
   *  Get store location data from StoreLocationService.
   *  Return it as a Promise.
   */
  getStores(): Promise<any> {
    return this.storeLocationService.getStores();
  }

  /*
   *  @function getPosition
   *
   *  Get user current geographical location
   *  from HTML5 Geolocation API. Return it as 
   *  a Promise.
   */
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
  }

  /*
   *  @function getDistanceFromCurrentLocation
   *
   *  For each store in stores any[] calculate
   *  the distance between stores[i].location and
   *  provided coordinates. Return it as a Promise.
   */
  getDistanceFromCurrentLocation(stores: any[], latitude: number, longitude: number): Promise<any> {
    for(let i = 0; i < stores.length; i ++) {
      stores[i].distanceFromCurrentLocation = this.calculateDistanceBetweenPoints(latitude, longitude, stores[i].location[0], stores[i].location[1]);
    }
    return Promise.resolve(stores);
  }

  /*
   *  @function calculateDistanceBetweenPoints
   *
   *  Uses the haversine formula to calculate the distance between
   *  two points on a perfect sphere. Does not consider that
   *  earth is a spheroid but is a decent approximation.
   *
   *  Returns distance in km.
   *
   *  https://en.wikipedia.org/wiki/Haversine_formula
   */
  calculateDistanceBetweenPoints(latitude1, longitude1, latitude2, longitude2) {
    var pi = 0.017453292519943295; // pi / 180, used to mathematically convert degrees to radians
    // calculate the spherical angle between the points
    var angle = 
      0.5 - Math.cos((latitude2 - latitude1) * pi) / 2 + 
      Math.cos(latitude1 * pi) * Math.cos(latitude2 * pi) * 
      (1 - Math.cos((longitude2 - longitude1) * pi)) / 2;
    // multiply angle by radius
    return 12742 * Math.asin(Math.sqrt(angle)); // 6,371 km(mean radius of earth) * 2
  }

  ngOnInit() {
    /*
     *  Get store locations from storeLocationService
     */
    this.getStores().then(stores => {
      /*
       *  Get current position from HTML5 Geolocation API
       */
      this.getPosition().then(position => {
        this.position = position;
        /*
         *  For each store Object in this.stores any[], 
         *  calculate the distance between current position 
         *  and store location
         */
        this.getDistanceFromCurrentLocation(stores, position.coords.latitude, position.coords.longitude).then(stores => { 
          /*
           *  Sort the array in ascending order, filter top 5 results 
           *
           *  StoreListComponent will update to display results once these 
           *  values have been set.
           *  
           */
          this.geolocationPermissionGranted = 2;
          this.stores = stores.sort((a, b) => a.distanceFromCurrentLocation - b.distanceFromCurrentLocation).slice(0, 5);
        });
      /*
       *  If promise fails to resolve permission was not granted
       *  to the browser to use HTML5 Geolocation API.
       *
       *  StoreListComponent will update once this.geolocationPermissionGranted 
       *  is set. Displays error message.
       */
      }).catch(rejection => this.geolocationPermissionGranted = 1);
    });
  }

}
