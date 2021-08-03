import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { UiModule } from 'src/app/ui/ui.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    AboutComponent
  ],
})
export class AboutModule { }
