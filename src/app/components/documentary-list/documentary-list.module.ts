import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentaryListComponent } from './documentary-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UiModule } from 'src/app/ui/ui.module';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    DocumentaryListComponent, 
    SidebarComponent, FilterComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    DocumentaryListComponent, 
    SidebarComponent
  ]
})
export class DocumentaryListModule { }
