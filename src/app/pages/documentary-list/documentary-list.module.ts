import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentaryListComponent } from './documentary-list.component';
import { UiModule } from 'src/app/ui/ui.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    DocumentaryListComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    AppRoutingModule
  ],
  exports: [
    DocumentaryListComponent
  ]
})
export class DocumentaryListModule { }
