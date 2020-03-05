import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import { PlacesListingModel } from './places-listing.model';

@Component({
  selector: 'app-places-listing',
  templateUrl: './places-listing.page.html',
  styleUrls: [
    './styles/places-listing.page.scss',
    './styles/places-listing.shell.scss'
  ]
})
export class PlacesListingPage implements OnInit {
  listing: PlacesListingModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.listing && this.listing.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe((resolvedRouteData) => {
      const listingDataStore = resolvedRouteData['data'];

      listingDataStore.state.subscribe(
        (state) => {
          this.listing = state;
        },
        (error) => {}
      );
    },
    (error) => {});
  }


  openDetailsWithState(a) {
    let navigationExtras: NavigationExtras = {
      state: {
        item: a
      }
    };
    
    this.router.navigate(['/app/home/places/'+ a.slug], navigationExtras);
  }
}
