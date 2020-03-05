import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PlacesService } from '../places.service';
import { PlacesListingModel } from './places-listing.model';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';

@Injectable()
export class PlacesListingResolver implements Resolve<any> {

  constructor(private placesService: PlacesService) {}

  resolve() {
    const dataSource: Observable<PlacesListingModel> = this.placesService.getListingDataSource();
    const dataStore: DataStore<PlacesListingModel> = this.placesService.getListingStore(dataSource);

    return dataStore;
  }
}
