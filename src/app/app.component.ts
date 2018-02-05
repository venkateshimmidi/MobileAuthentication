import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import firebase from 'firebase';
import * as firebase from 'firebase';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    const firebaseConfig = {
    apiKey: "AIzaSyAyboYO1Uu0dK3m_E3aMU_0846J-cqigm4",
    authDomain: "fir-finaltest-c9021.firebaseapp.com",
    databaseURL: "https://fir-finaltest-c9021.firebaseio.com",
    projectId: "fir-finaltest-c9021",
    storageBucket: "fir-finaltest-c9021.appspot.com",
    messagingSenderId: "513620985796"
    };
    firebase.initializeApp(firebaseConfig);

    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if (user){
        this.rootPage = HomePage;
        unsubscribe();
      } else {
        this.rootPage = 'LoginPage';
        unsubscribe();
      }
    });

    //noinspection TypeScriptUnresolvedFunction
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

