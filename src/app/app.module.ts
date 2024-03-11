import { ExternalModule } from 'src/app/modules/external/external.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout/layout.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ExternalModule

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
