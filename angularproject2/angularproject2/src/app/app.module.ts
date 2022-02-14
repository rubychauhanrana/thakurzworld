import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';

import { SliderComponent } from './slider/slider.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MidSliderComponent } from './mid-slider/mid-slider.component';
import { ProductsComponent } from './products/products.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { FeaturesComponent } from './features/features.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    WelcomeComponent,
    MidSliderComponent,
    ProductsComponent,
    OurClientsComponent,
    FeaturesComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
