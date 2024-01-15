import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from './components/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { LetsplayComponent } from './components/letsplay/letsplay.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WinnerdialogComponent } from './components/winnerdialog/winnerdialog.component';
import { LoserdialogComponent } from './components/loserdialog/loserdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MainpageComponent,
    DialogOverviewExampleDialogComponent,
    LetsplayComponent,
    WinnerdialogComponent,
    LoserdialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
