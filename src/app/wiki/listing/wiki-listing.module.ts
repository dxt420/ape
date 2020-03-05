import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../../components/components.module';

import { WikiListingPage } from './wiki-listing.page';
import { WikiListingResolver } from './wiki-listing.resolver';
import { WikiService } from '../wiki.service';



const wikiRoutes: Routes = [
  {
    path: '',
    component: WikiListingPage,
    resolve: {
      data: WikiListingResolver
    }
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(wikiRoutes),
    ComponentsModule
  ],
  declarations: [ WikiListingPage ],
  providers: [
    WikiListingResolver,
    WikiService
  ]
})
export class WikiPageModule {}
