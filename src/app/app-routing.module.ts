import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DocumentaryListComponent } from './pages/documentary-list/documentary-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'contact', component: ContactComponent },
  { path: 'documentariesList', component: DocumentaryListComponent },
  { path: 'documentariesList/:item', component: DocumentaryListComponent },
  { path: 'documentariesList/summary/:article', component: SummaryComponent }, 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
