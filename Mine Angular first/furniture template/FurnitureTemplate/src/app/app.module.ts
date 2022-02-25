import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { FeaturesImageComponent } from './features-image/features-image.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { FreeQuoteComponent } from './free-quote/free-quote.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    FeaturesImageComponent,
    AboutUsComponent,
    OurServicesComponent,
    WhyChooseUsComponent,
    OurProjectsComponent,
    FreeQuoteComponent,
    TeamMembersComponent,
    TestimonialComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
