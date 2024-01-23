import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

form : FormGroup = this.fb.group({

  from_name:'',
  to_name:'',
  message:'',
  reply_to:'',

});


constructor(private fb:FormBuilder){

}

async  send(){
emailjs.init('UbixQXTe_bu1CL7Rn');
 let response = await emailjs.send("service_si7vewa","template_0c9m61a",{
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      message: this.form.value.message,
      reply_to: this.form.value.reply_to,
      });

      alert('message has been sent');
      this.form.reset();
  }
  }
