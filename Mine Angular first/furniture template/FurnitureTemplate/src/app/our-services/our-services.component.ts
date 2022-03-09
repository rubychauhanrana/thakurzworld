import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})

export class OurServicesComponent implements OnInit {

  userType:any

  users = [{name: 'General Carpentry', image:'/assets/img/service-1.jpg'},
            {name: 'Furniture Manufacturing', image:'/assets/img/service-2.jpg'},
            {name: 'Furniture Remodeling', image:'/assets/img/service-3.jpg'},
            {name: 'Wooden Floor', image:'/assets/img/service-4.jpg'},
            {name: 'Wooden Furniture', image:'/assets/img/service-5.jpg'},
            {name: 'Custom Work', image:'/assets/img/service-6.jpg'},]

  // users = [12,13,14]


            // {name: 'cde', email: 'c@c.com'}]

  constructor() { }

  ngOnInit(): void {
  }

}
