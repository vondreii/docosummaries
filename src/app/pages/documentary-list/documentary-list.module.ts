import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentaryListComponent } from './documentary-list.component';
import { UiModule } from 'src/app/ui/ui.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    DocumentaryListComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  exports: [
    DocumentaryListComponent
  ]
})
export class DocumentaryListModule { }
