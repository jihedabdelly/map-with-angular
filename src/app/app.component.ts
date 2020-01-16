import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  latitude = 53.05370;
  longitude = -0.14;
  locationChosen = false;
  defaultAddress = "roma";
  searchedAddress = ""

  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  onUpdateAddress(event) {
    this.defaultAddress = event.target.value;
  }
 
  onAddAddress() {
    this.searchedAddress = this.defaultAddress
  }

}
