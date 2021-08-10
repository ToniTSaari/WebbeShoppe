import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Service } from './app.services'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeGetComponent } from './time-get/time-get.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
