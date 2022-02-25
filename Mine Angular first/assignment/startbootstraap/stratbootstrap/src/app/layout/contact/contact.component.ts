import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formModel = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log('Hello, World!')
    console.log(this.formModel)
    console.log(this.formModel.email)
  }

}
