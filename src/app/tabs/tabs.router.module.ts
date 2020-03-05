import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          },
          {
            path: 'wiki',
            loadChildren: () => import('../wiki/listing/wiki-listing.module').then(m => m.WikiPageModule)
          },
          {
            path: 'wiki/:wikiId',
            loadChildren: () => import('../wiki/details/wiki-details.module').then(m => m.WikiDetailsPageModule)
          },
          {
            path: 'places',
            loadChildren: () => import('../places/listing/places-listing.module').then(m => m.PlacesListingPageModule)
          },
          {
            path: 'places/:placeId',
            loadChildren: () => import('../places/details/places-details.module').then(m => m.PlacesDetailsPageModule)
          }
        ]
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: () => import('../user/profile/user-profile.module').then(m => m.UserProfilePageModule)
          },
          {
            path: 'friends',
            loadChildren: () => import('../user/friends/user-friends.module').then(m => m.UserFriendsPageModule)
          }
        ]
      }
    ]
  },
  // /app/ redirect
  {
    path: '',
    redirectTo: 'app/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [ ]
})
export class TabsPageRoutingModule {}
