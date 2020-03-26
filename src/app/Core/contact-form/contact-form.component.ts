import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form.valid);

  }

}
