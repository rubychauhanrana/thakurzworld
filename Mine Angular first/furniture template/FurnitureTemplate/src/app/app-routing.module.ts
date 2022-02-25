import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesImageComponent } from './features-image/features-image.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { OurServicesComponent } from './our-services/our-services.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path: 'layout', component: LayoutComponent, children: [
 {path: 'home', component: DashboardComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'services', component:OurServicesComponent},
  {path: 'project', component: OurProjectsComponent},
  {path: 'pages', component: FeaturesImageComponent},
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
