import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HeaderButtonComponent } from '../header-button/header-button.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [
    HeaderButtonComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, FooterComponent]
})
export class LayoutModule { }
