import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.css']
})
export class OurProjectsComponent implements OnInit {

  usertype:any

  users= [{name:'General Carpentry',image:'/assets/img/portfolio-1.jpg'},
          {name:'Custom Carpentry',image:'/assets/img/portfolio-2.jpg'},
          {name:'General Carpentry',image:'/assets/img/portfolio-3.jpg'},
          {name:'Custom Carpentry',image:'/assets/img/portfolio-4.jpg'},
          {name:'General Carpentry',image:'/assets/img/portfolio-5.jpg'},
          {name:'Custom Carpentry',image:'/assets/img/portfolio-6.jpg'},
]

  constructor() { }

  ngOnInit(): void {
  }

}
