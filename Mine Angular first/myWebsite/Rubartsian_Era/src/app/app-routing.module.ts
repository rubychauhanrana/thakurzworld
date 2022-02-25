import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
    {path:'home',component:DashboardComponent},
    {path:'about',component:AboutMeComponent},
    {path:'resume',component:MyResumeComponent},
    {path:'services',component:MyServicesComponent},
    {path:'portfolio',component:PortfolioComponent},
    {path:}
    
  ],
 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
