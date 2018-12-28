import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment.prod';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { ShowmapComponent } from './showmap/showmap.component';
import { AgmCoreModule } from '@agm/core'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServicesComponent,
    ShowmapComponent
  ],
  imports: [
    BrowserModule,
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule ,
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyDaIwOMyM_ktCpJxJFQMD_ORmVtI9ycgoU'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
