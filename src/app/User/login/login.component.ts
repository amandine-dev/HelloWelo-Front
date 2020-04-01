import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
    this.form = new FormGroup({
      email: new FormControl('', Validators.compose([])),
      password: new FormControl('', Validators.compose([])),
    })
  }

  onSubmit() {
    console.log(this.form.valid);

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