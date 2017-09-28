import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coords2: any;
  accuracy2: any;
  error2: any;
  position: Position;


  constructor(private geolocation: Geolocation) {
    this.coords2 = '';
    this.accuracy2 = '';

  }

  watch() {
    this.geolocation.getCurrentPosition().then((resp) => {
        this.position = resp;
        this.accuracy2 = resp.coords.accuracy;
        this.coords2 = resp.coords.latitude + ' ' + resp.coords.longitude;
      alert('Latitude: '          + resp.coords.latitude          + '\n' +
        'Longitude: '         + resp.coords.longitude         + '\n' +
        'Altitude: '          + resp.coords.altitude          + '\n' +
        'Accuracy: '          + resp.coords.accuracy          + '\n' +
        'Altitude Accuracy: ' + resp.coords.altitudeAccuracy  + '\n' +
        'Heading: '           + resp.coords.heading           + '\n' +
        'Speed: '             + resp.coords.speed             + '\n' +
        'Timestamp: '         + resp.timestamp               + '\n');
      }).catch((error) => {
      alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
        this.error2 = 'Error getting location: ' + error;
      });
  }


}
