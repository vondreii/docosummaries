import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { DocumentaryPreviewComponent } from './documentary-preview/documentary-preview.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { TagComponent } from './tag/tag.component';
import { FormsModule } from '@angular/forms';

// Searchbar
import { HighlightDirective } from './searchbar/highlight.directive';
import { FilterPipe } from './searchbar/filter.pipe';
import { SearchComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    DocumentaryPreviewComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    TagComponent,
    // Searchbar
    HighlightDirective,
    FilterPipe,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    DocumentaryPreviewComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    TagComponent
  ]
})
export class UiModule { }
