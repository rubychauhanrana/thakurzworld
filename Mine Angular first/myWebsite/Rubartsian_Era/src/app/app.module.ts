import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SingleuserComponent } from './singleuser/singleuser.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { BrandComponent } from './brand/brand.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HeroSectionComponent,
    AboutMeComponent,
    MyResumeComponent,
    MyServicesComponent,
    TestimonialComponent,
    PortfolioComponent,
    PricingComponent,
    ContactComponent,
    LoginComponent,
    ListUsersComponent,
    DropdownComponent,
    SingleuserComponent,
    DeleteUserComponent,
    BrandComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
