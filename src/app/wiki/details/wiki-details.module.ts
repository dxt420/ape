import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';

import { WikiDetailsPage } from './wiki-details.page';
import { WikiDetailsResolver } from './wiki-details.resolver';
import { WikiService } from '../wiki.service';
import { WikiListingResolver } from '../listing/wiki-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: WikiDetailsPage,
    resolve: {
      data: WikiListingResolver
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
    WikiDetailsPage
  ],
  providers: [
    WikiDetailsResolver,
    WikiListingResolver,
    WikiService
  ]
})
export class WikiDetailsPageModule {}
