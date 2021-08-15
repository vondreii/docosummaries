import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { UiModule } from 'src/app/ui/ui.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    ContactComponent
  ],
})
export class ContactModule { }
