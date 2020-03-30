import { ContactService } from './../../services/contact.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/models/contact.models';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  contact = [];

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private contactService : ContactService
  ) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      username: new FormControl(''),
      usermail: new FormControl(''),
      message: new FormControl('')
    })
  }

  onSubmit(): void {
    console.log(this.form.valid);

    if (this.form.valid){
      const contact = this.form.value as ContactModel;
      console.log(contact);

      this.contactService.saveContact(contact)
      .subscribe(
        (data: ContactModel) => {
          this.router.navigate(['/contacts']);
        },
        (err: Error) => console.log(err),
        () => console.log('Message send')
      );
    }

  }

}
