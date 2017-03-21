import { Injectable } from '@angular/core';
import { stores } from './mock-data';

@Injectable()
export class StoreLocationService {

  /*
   *  @function getStores
   *
   *  Get stores any[] from imported module
   *  and return as a Promise.
   */
  getStores(): Promise<any> {
    return Promise.resolve(stores);
  }

}
