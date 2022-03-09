import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {

  usertype:any

  users=[{name:'Full Name',designation:'developer',image:'/assets/img/team-1.jpg'},
          {name:'Full Name',designation:'designer',image:'/assets/img/team-2.jpg'},
          {name:'Full Name',designation:'manager', image:'/assets/img/team-3.jpg'},
          {name:'Full Name',designation:'seo execitive',image:'/assets/img/team-4.jpg'}
]

  constructor() { }

  ngOnInit(): void {
  }

}
