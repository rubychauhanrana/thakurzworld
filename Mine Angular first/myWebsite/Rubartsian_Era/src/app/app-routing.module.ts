import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { SingleuserComponent } from './singleuser/singleuser.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  {path:'layout',component:LayoutComponent,children:[
    {path:'home',component:DashboardComponent},
    {path:'about',component:AboutMeComponent},
    {path:'resume',component:MyResumeComponent},
    {path:'services',component:MyServicesComponent},
    {path:'listusers',component:ListUsersComponent},
    {path:'singleUser/:id',component:SingleuserComponent},
    {path:'deleteUser/:id',component:DeleteUserComponent},
    {path:'updateUser/:id',component:UpdateUserComponent},
    {path:'portfolio',component:PortfolioComponent},
    {path:'dropdown',component:DropdownComponent},
    {path:'pricing',component:PricingComponent},
    {path:'contact',component:ContactComponent},
    
  ],
 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
