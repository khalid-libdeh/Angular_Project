import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalModule } from 'src/app/modules/external/external.module';


import { HeaderComponent } from '../header/header.component';
import { HeaderButtonComponent } from '../header-button/header-button.component';
import { FooterComponent } from '../footer/footer.component';
import { TitleComponent } from '../title.component';
import { mainContainerComponent } from '../../containers/main-container.component';



@NgModule({
  declarations: [
    HeaderButtonComponent,
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    mainContainerComponent,


  ],
  imports: [
    CommonModule,
    ExternalModule,
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class LayoutModule { }
