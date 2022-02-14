import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  { path: 'layout', component: LayoutComponent, children: [
    { path: 'slider', component: SliderComponent},

  ]},
  { path: 'our-clients', component: OurClientsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
