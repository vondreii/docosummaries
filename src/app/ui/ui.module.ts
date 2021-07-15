import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DocumentaryPreviewComponent } from './documentary-preview/documentary-preview.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    SearchbarComponent,
    DocumentaryPreviewComponent,
    NavbarComponent,
    FooterComponent
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
    FooterComponent
  ]
})
export class UiModule { }
