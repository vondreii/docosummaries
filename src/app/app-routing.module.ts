import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DocumentaryListComponent } from './components/documentary-list/documentary-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'contact', component: ContactComponent },
  { path: 'documentaries', component: DocumentaryListComponent },
  { path: 'documentaries/:item', component: DocumentaryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
