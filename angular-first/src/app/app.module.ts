import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ServicesComponent } from './services/services.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { MidSliderComponent } from './mid-slider/mid-slider.component';
import { ProvidedServicesComponent } from './provided-services/provided-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ServicesComponent,
    WelcomeComponent,
    OurClientsComponent,
    MidSliderComponent,
    ProvidedServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
