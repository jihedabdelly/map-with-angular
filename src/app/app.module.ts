import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD-SZ0uidEWLTdm0Q7_cHE5dBNFrrLhxOo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
