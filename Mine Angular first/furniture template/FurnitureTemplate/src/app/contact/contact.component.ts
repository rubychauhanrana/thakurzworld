import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formmodel={
    name:"",
    email:"",
    subject:"",
    message:""

  }

  constructor() { }

  ngOnInit(): void {
  }
 SendMessage(){
    console.log(this.formmodel.name)
    console.log(this.formmodel.email)
    console.log(this.formmodel.subject)
    console.log(this.formmodel.message)
 }
}
