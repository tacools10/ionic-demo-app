import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coords2: string;
  accuracy2: string;
  error2: any;

// onSuccess Callback
  // This method accepts a Position object, which contains the
  // current GPS coordinates
  //
  onSuccess (position: any): void {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
      'Longitude: '         + position.coords.longitude         + '\n' +
      'Altitude: '          + position.coords.altitude          + '\n' +
      'Accuracy: '          + position.coords.accuracy          + '\n' +
      'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
      'Heading: '           + position.coords.heading           + '\n' +
      'Speed: '             + position.coords.speed             + '\n' +
      'Timestamp: '         + position.timestamp                + '\n');
      this.coords2 = position.coords.latitude + ' ' + position.coords.longitude;
      this.accuracy2 = position.coords.accuracy;
  }

  // onError Callback receives a PositionError object
  //
  onError(error: any): void {
    alert('code: '    + error.code    + '\n' +
      'message: ' + error.message + '\n');
    this.error2 = 'Error getting location: ' + error;
  }

  constructor() {
    this.coords2 = '';
    this.accuracy2 = '';

  }

  watch() {
    navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
  }

}
