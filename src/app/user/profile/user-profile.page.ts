import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserProfileModel } from './user-profile.model';
import { AlertController } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: [
    './styles/user-profile.page.scss',
    './styles/user-profile.shell.scss',
    './styles/user-profile.ios.scss',
    './styles/user-profile.md.scss'
  ],
})
export class UserProfilePage implements OnInit {
  profile: UserProfileModel;
  available_languages = [];
  translations;
  articles;

  API_KEY = '9e5b4620eac74cdbb8548e1a5966ed2f';

  @HostBinding('class.is-shell') get isShell() {
    return (this.profile && this.profile.isShell) ? true : false;
  }

  constructor(
    private route: ActivatedRoute,
    public translate: TranslateService,
    public alertController: AlertController,
    private httpClient: HttpClient
  ) { }

  getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/everything?qInTitle=gorillas&apiKey=${this.API_KEY}`);
  }


  ionViewDidEnter(){

    this.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }



  ngOnInit(): void {
   
  }


}
