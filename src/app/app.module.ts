import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from "../environments/environment";

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { AngularFirestoreModule } from "@angular/fire/firestore";

// Pages
import { AboutComponent } from './pages/about/about.component';

// Modules
import { UiModule } from './ui/ui.module';
import { HomeModule } from './pages/home/home.module';
import { DocumentaryListModule } from './pages/documentary-list/documentary-list.module';
import { ContactModule } from './pages/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Component Modules
    UiModule,
    HomeModule,
    DocumentaryListModule,
    ContactModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
