import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentaryListComponent } from './documentary-list.component';
import { UiModule } from 'src/app/ui/ui.module';



@NgModule({
  declarations: [
    DocumentaryListComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    DocumentaryListComponent
  ]
})
export class DocumentaryListModule { }
