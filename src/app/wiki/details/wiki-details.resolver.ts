import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { WikiService } from '../wiki.service';
import { WikiDetailsModel } from './wiki-details.model';
import { DataStore } from '../../shell/data-store';
import { Observable } from 'rxjs';
import { WikiListingModel } from '../listing/wiki-listing.model';

@Injectable()
export class WikiDetailsResolver implements Resolve<any> {

  constructor(private realStateService: WikiService) {}

  // resolve() {
  //   const dataSource: Observable<WikiDetailsModel> = this.realStateService.getDetailsDataSource();
  //   const dataStore: DataStore<WikiDetailsModel> = this.realStateService.getDetailsStore(dataSource);

  //   return dataStore;
  // }
  resolve() {
    const dataSource: Observable<WikiListingModel> = this.realStateService.getListingDataSource();
    const dataStore: DataStore<WikiListingModel> = this.realStateService.getListingStore(dataSource);

    return dataStore;
  }
}
