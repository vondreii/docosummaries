import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { HomeComponent } from './home.component';
import { BrowseByTagsComponent } from './browse-by-tags/browse-by-tags.component';
import { BrowseByCategoriesComponent } from './browse-by-categories/browse-by-categories.component';
import { UiModule } from 'src/app/ui/ui.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    JumbotronComponent,
    HomeComponent,
    BrowseByTagsComponent,
    BrowseByCategoriesComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    AppRoutingModule
  ],
  exports: [
    JumbotronComponent,
    HomeComponent,
    BrowseByTagsComponent,
    BrowseByCategoriesComponent
  ]
})
export class HomeModule { }
