import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WikiDetailsModel } from './wiki-details.model';
import * as dayjs from 'dayjs';
import { WikiListingModel } from '../listing/wiki-listing.model';

@Component({
  selector: 'app-wiki-details',
  templateUrl: './wiki-details.page.html',
  styleUrls: [
    './styles/wiki-details.page.scss',
    './styles/wiki-details.shell.scss'
  ]
})
export class WikiDetailsPage implements OnInit {
  // details: WikiDetailsModel;
  listing: WikiListingModel;
  details;
  expirationDate: string = dayjs().subtract(3, 'day').format('MM/DD/YYYY HH:mm:ss') as string;
  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };

  @HostBinding('class.is-shell') get isShell() {
    return (this.details && this.details.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.details = this.router.getCurrentNavigation().extras.state.item;
        console.log(this.router.getCurrentNavigation().extras.state.item);

      }
    });
  }

  // ngOnInit(): void {
  //   this.route.data.subscribe((resolvedRouteData) => {
  //     const detailsDataStore = resolvedRouteData['data'];

  //     detailsDataStore.state.subscribe(
  //       (state) => {
  //         this.details = state;
  //       },
  //       (error) => {}
  //     );
  //   },
  //   (error) => {});
  // }

  ngOnInit(): void {
    // this.route.data.subscribe((resolvedRouteData) => {
    //   const listingDataStore = resolvedRouteData['data'];
    //   // console.log(resolvedRouteData);
    //   listingDataStore.state.subscribe(
    //     (state) => {
    //       this.listing = state;
    //     },
    //     (error) => {}
    //   );
    // },
    // (error) => {});


  
  }
}
