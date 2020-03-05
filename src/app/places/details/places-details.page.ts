import { ImageModalPage } from '../../image-modal/image-modal.page';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PlacesDetailsModel } from './places-details.model';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-places-details',
  templateUrl: './places-details.page.html',
  styleUrls: [
    './styles/places-details.page.scss',
    './styles/places-details.shell.scss'
  ]
})
export class PlacesDetailsPage implements OnInit {
  // details: PlacesDetailsModel;
  details;
  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };

  @HostBinding('class.is-shell') get isShell() {
    return (this.details && this.details.isShell) ? true : false;
  }




  constructor(private route: ActivatedRoute, private router: Router,private modalController: ModalController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.details = this.router.getCurrentNavigation().extras.state.item;
        console.log(this.router.getCurrentNavigation().extras.state.item);

      }
    });
  }
 
  openPreview(img) {
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img: img
      }
    }).then(modal => {
      modal.present();
    });
  }

  ngOnInit(): void {
    // this.route.data.subscribe((resolvedRouteData) => {
    //   const detailsDataStore = resolvedRouteData['data'];

    //   detailsDataStore.state.subscribe(
    //     (state) => {
    //       this.details = state;
    //     },
    //     (error) => {}
    //   );
    // },
    // (error) => {});
  }
}
