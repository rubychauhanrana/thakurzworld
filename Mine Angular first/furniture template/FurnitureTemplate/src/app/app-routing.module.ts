import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { FeaturesImageComponent } from './features-image/features-image.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { SingleUserComponent } from './single-user/single-user.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path: 'layout', component: LayoutComponent, children: [
 {path: 'home', component: DashboardComponent},
  {path: 'about', component: AboutUsComponent},
  { path: 'singleStudent/:id', component: SingleUserComponent},
  { path: 'deleteStudent/:id', component: DeleteUserComponent},
  {path: 'services', component:OurServicesComponent},
  {path: 'project', component: OurProjectsComponent},
  {path: 'pages', component: FeaturesImageComponent},
  {path: 'contact', component: ContactComponent},
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
