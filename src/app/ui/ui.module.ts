import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DocumentaryPreviewComponent } from './documentary-preview/documentary-preview.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    SearchbarComponent,
    DocumentaryPreviewComponent,
    NavbarComponent,
    FooterComponent,
    TagComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    SearchbarComponent,
    DocumentaryPreviewComponent,
    NavbarComponent,
    FooterComponent,
    TagComponent
  ]
})
export class UiModule { }
