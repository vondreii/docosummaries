import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutDescriptionComponent } from './about-description/about-description.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { UiModule } from 'src/app/ui/ui.module';



@NgModule({
  declarations: [
    AboutComponent, 
    AboutDescriptionComponent, 
    ContributorsComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    AboutComponent, 
    AboutDescriptionComponent, 
    ContributorsComponent
  ],
})
export class AboutModule { }
