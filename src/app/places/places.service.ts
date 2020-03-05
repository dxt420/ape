import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { DataStore } from '../shell/data-store';

import { PlacesListingModel } from './listing/places-listing.model';
import { PlacesDetailsModel } from './details/places-details.model';

@Injectable()
export class PlacesService {
  private listingDataStore: DataStore<PlacesListingModel>;
  private detailsDataStore: DataStore<PlacesDetailsModel>;

  constructor(private http: HttpClient) { }

  public getListingDataSource(): Observable<PlacesListingModel> {
    return this.http.get<PlacesListingModel>('./assets/sample-data/places/listing.json');
  }

  public getListingStore(dataSource: Observable<PlacesListingModel>): DataStore<PlacesListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: PlacesListingModel = new PlacesListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(): Observable<PlacesDetailsModel> {
    return this.http.get<PlacesDetailsModel>('./assets/sample-data/places/details.json');
  }

  public getDetailsStore(dataSource: Observable<PlacesDetailsModel>): DataStore<PlacesDetailsModel> {
    // Use cache if available
    if (!this.detailsDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: PlacesDetailsModel = new PlacesDetailsModel();
      this.detailsDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.detailsDataStore.load(dataSource);
    }
    return this.detailsDataStore;
  }

}
