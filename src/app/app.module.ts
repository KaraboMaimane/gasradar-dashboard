import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import * as firebase from 'firebase'
import { DatabaseService } from './database.service';

var config = {
  apiKey: "AIzaSyDJdLBi-paptMqqNpIc6c5jHvIM6jOrb6s",
  authDomain: "fuelapp-6050c.firebaseapp.com",
  databaseURL: "https://fuelapp-6050c.firebaseio.com",
  projectId: "fuelapp-6050c",
  storageBucket: "fuelapp-6050c.appspot.com",
  messagingSenderId: "955542967293"
};
firebase.initializeApp(config);

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
