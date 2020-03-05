import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { WikiService } from '../wiki.service';
import { WikiListingModel } from './wiki-listing.model';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';

@Injectable()
export class WikiListingResolver implements Resolve<any> {

  constructor(private realStateService: WikiService) {}

  resolve() {
    const dataSource: Observable<WikiListingModel> = this.realStateService.getListingDataSource();
    const dataStore: DataStore<WikiListingModel> = this.realStateService.getListingStore(dataSource);

    return dataStore;
  }
}
