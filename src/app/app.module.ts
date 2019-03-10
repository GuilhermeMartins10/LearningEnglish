import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { PanelComponent } from './panel/panel.component';
import { AttempsComponent } from './panel/attemps/attemps.component';
import { ProgressComponent } from './panel/progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    PanelComponent,
    AttempsComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
