import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = MapPage;
  tab4Root: any = AboutPage;
  mySelectedIndex: number;
  login: any;

  constructor(navParams: NavParams,
    public storage: Storage) {
    this.login = this.storage.get('hasSeenTutorial');
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
