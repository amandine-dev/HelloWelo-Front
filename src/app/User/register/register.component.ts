import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service';
import { CityService } from 'src/app/services/city.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  cities = [];

  
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cityService: CityService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      nickName: ['', [Validators.required, Validators.maxLength(20)]],
      birthday: ['', Validators.pattern('^([0-9]{4})(-[0-9]{2}){2}$')],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      cityId: this.getCities()
    });
  }


  getCities() {
    this.cityService.getCities()
      .subscribe(data => {
        this.cities = data;
      });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const user = this.form.value as UserModel;

      this.userService.save(user)
        .subscribe(
          (data: UserModel) => {
            this.router.navigate(['/']);
          },
          (err: Error) => console.log(err),
          () => console.log('Request has completed')
        );
      console.log(this.form.value);
    }
  }

}
