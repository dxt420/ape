import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { HomePage } from './home.page';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(homeRoutes),
    ComponentsModule
  ],
  declarations: [ HomePage ]
})
export class HomePageModule {}
