import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
      firstName: new FormControl(),
      lastName:  new FormControl(),
      nickName: new FormControl(),
      birthday: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      CityId: this.getCities()
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
            this.router.navigate(['/connexion']);
          },
          (err: Error) => console.log(err),
          () => console.log('Request has completed')
        );
      console.log(this.form.value);
    }
  }

}
