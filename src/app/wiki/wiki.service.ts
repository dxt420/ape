import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { WikiListingModel } from './listing/wiki-listing.model';

import { DataStore } from '../shell/data-store';
import { WikiDetailsModel } from './details/wiki-details.model';

@Injectable()
export class WikiService {
  private listingDataStore: DataStore<WikiListingModel>;
  private detailsDataStore: DataStore<WikiDetailsModel>;

  constructor(private http: HttpClient) { }

  public getListingDataSource(): Observable<WikiListingModel> {
    return this.http.get<WikiListingModel>('./assets/sample-data/wiki/listing.json');
  }

  public getListingStore(dataSource: Observable<WikiListingModel>): DataStore<WikiListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: WikiListingModel = new WikiListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(): Observable<WikiDetailsModel> {
    // return this.http.get<WikiDetailsModel>('./assets/sample-data/wiki/details.json');
    return this.http.get<WikiDetailsModel>('./assets/sample-data/wiki/listing.json');
  }

  public getDetailsStore(dataSource: Observable<WikiDetailsModel>): DataStore<WikiDetailsModel> {
    // Use cache if available
    if (!this.detailsDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: WikiDetailsModel = new WikiDetailsModel();
      this.detailsDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.detailsDataStore.load(dataSource);
    }
    return this.detailsDataStore;
  }
}
