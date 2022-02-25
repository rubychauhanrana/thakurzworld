import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MastheadComponent } from './layout/masthead/masthead.component';
import { AboutComponent } from './layout/about/about.component';
import { ServicesComponent } from './layout/services/services.component';
import { PortfolioComponent } from './layout/portfolio/portfolio.component';
import { CalltoactionComponent } from './layout/calltoaction/calltoaction.component';
import { ContactComponent } from './layout/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MastheadComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    CalltoactionComponent,
    ContactComponent,
    LoginComponent,
    DashboardComponent
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
