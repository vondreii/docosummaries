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
import { SecurityContext } from '@angular/core';
import { UiModule } from './ui/ui.module';
import { HomeModule } from './pages/home/home.module';
import { DocumentaryListModule } from './pages/documentary-list/documentary-list.module';
import { ContactModule } from './pages/contact/contact.module';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SafePipe, SummaryComponent } from './pages/summary/summary.component';

// Searchbar
// import { HighlightDirective } from './ui/searchbar/highlight.directive';
// import { FilterPipe } from './ui/searchbar/filter.pipe';
// import { SearchComponent } from './ui/searchbar/searchbar.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SummaryComponent,
    SafePipe,
    // Searchbar
    // HighlightDirective,
    // FilterPipe,
    // SearchComponent,
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
    AngularFirestoreModule,
    // Markdown
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
