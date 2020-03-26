import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.pattern('[a-zA-Z0-9!$@#]{6,20}')],
    });
  }
  onSubmit() {
    if (this.form.valid) {
      this.authService.login(
        this.form.value.email,
        this.form.value.password
      ).subscribe(
        (data: UserModel) => {
          console.log(data);
          this.router.navigate(['/']);
        }
      );

      console.log(this.form.value);
    }
  }

}