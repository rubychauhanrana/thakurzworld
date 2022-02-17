import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FeaturesComponent } from './features/features.component';
import { LayoutComponent } from './layout/layout.component';
import { MidSliderComponent } from './mid-slider/mid-slider.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { ProductsComponent } from './products/products.component';
import { SliderComponent } from './slider/slider.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', redirectTo: '/layout/welcome', pathMatch: 'full'},
  {path:'layout', component:LayoutComponent, children: [
    { path: 'slider', component: SliderComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'mid-slider',component:MidSliderComponent},
    {path:'our-clients',component:OurClientsComponent},
    {path:'features',component:FeaturesComponent},
    {path:'products',component:ProductsComponent},
  ]},
  { path: '**', component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
