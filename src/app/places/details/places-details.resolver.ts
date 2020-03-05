import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PlacesService } from '../places.service';
import { PlacesDetailsModel } from '../details/places-details.model';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';

@Injectable()
export class PlacesDetailsResolver implements Resolve<any> {

  constructor(private placesService: PlacesService) {}

  resolve() {
    const dataSource: Observable<PlacesDetailsModel> = this.placesService.getDetailsDataSource();
    const dataStore: DataStore<PlacesDetailsModel> = this.placesService.getDetailsStore(dataSource);

    return dataStore;
  }
}
