import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { UiModule } from 'src/app/ui/ui.module';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    ContactComponent,
    FormComponent
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
