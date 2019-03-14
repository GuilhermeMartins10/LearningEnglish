import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { PanelComponent } from './panel/panel.component';
import { AttempsComponent } from './panel/attemps/attemps.component';
import { ProgressComponent } from './panel/progress/progress.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    PanelComponent,
    AttempsComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    ToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }