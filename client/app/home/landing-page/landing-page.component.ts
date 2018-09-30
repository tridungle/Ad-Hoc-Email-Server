import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {DeviceService} from '../../core/device.service';
import {ApiService} from '../../core/api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  properties: any;

  constructor(public apiService: ApiService, public deviceService: DeviceService, titleService: Title, metaService: Meta) {
    titleService.setTitle('AHEM - an Ad-Hoc Disposable Temporary Email Address');
    metaService.updateTag({ name: 'description', content: 'AHEM - an Ad-Hoc Disposable Temporary Email Address. ' +
      'Ad-hoc - created on demand. Disposable - ' +
      'you can throw it away. ' +
      'Temporary - your emails will be delete automatically. Don\'t expose your real E-mail. Use AHEM to fight SPAM.' });
    this.properties = this.apiService.getProperties();
  }

  ngOnInit() {
  }
}