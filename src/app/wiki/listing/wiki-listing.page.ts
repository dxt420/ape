


import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { WikiListingModel } from './wiki-listing.model';

@Component({
  selector: 'app-home',
  templateUrl: './wiki-listing.page.html',
  styleUrls: [
    './styles/wiki-listing.page.scss',
    './styles/wiki-listing.shell.scss',
    './styles/wiki-listing.responsive.scss'
  ]
})
export class WikiListingPage implements OnInit {
  listing: WikiListingModel;

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

    // if(a.slug=="Behaviour"){
    //   this.router.navigate(['/app/home/wiki/'], navigationExtras);
    // }else{
    //   this.router.navigate(['/app/home/wiki/'+ a.slug], navigationExtras);
    // }
    
    this.router.navigate(['/app/home/wiki/'+ a.slug], navigationExtras);
  }
}


