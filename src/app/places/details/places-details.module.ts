import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';

import { PlacesDetailsPage } from './places-details.page';
import { PlacesDetailsResolver } from './places-details.resolver';
import { PlacesService } from '../places.service';

const routes: Routes = [
  {
    path: '',
    component: PlacesDetailsPage,
    resolve: {
      data: PlacesDetailsResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    HttpClientModule
  ],
  declarations: [
    PlacesDetailsPage
  ],
  providers: [
    PlacesDetailsResolver,
    PlacesService
  ]
})
export class PlacesDetailsPageModule {}
