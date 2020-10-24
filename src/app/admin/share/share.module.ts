import { NgModule, AfterViewInit, Renderer2  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenungangComponent } from './menungang/menungang.component';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenungangComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,FooterComponent, MenungangComponent
  ]
})
export class ShareModule {
}
