import { Component } from '@angular/core';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  constructor(private modalservice:NgbModal){}

  messageDetails={
    fullname:'',
    emailid:'',
    subject: '',
    message:'',
  };



  Send(data:any){
    this.messageDetails={
      fullname: '',
      emailid: '',
      subject: '',
      message: ''
    }
    this.modalservice.dismissAll();
  }


  showNotification() {
   
  }

  openScrollableContent(contact_comp:any) {
		this.modalservice.open(contact_comp, { scrollable: false });
	}

}
