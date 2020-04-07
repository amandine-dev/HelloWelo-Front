import { CscService } from 'src/app/services/csc.service';
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

  submitted = false;

  cities = [];
  countries = [];
  states = [];


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cityService: CityService,
    private router: Router,
    private cscService: CscService
  ) { }

  ngOnInit(): void {
    this.getCountries();

    this.form = this.formBuilder.group({
      firstName: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      lastName: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      nickName: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      birthday: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z0-9!$@#]{6,20}')]),
      CountryId: new FormControl('',[Validators.required]),
      StateId: new FormControl('',[Validators.required]),
      CityId: new FormControl('',[Validators.required]),
    });
  }

  getCities() {
    this.cityService.getCities()
      .subscribe(data => {
        this.cities = data;
      });
  }

  getCountries() {
    this.cscService.getCountries()
      .subscribe(data => {
        this.countries = data;
      });
  }

  onChangeCountry(countryId: number) {
    if (countryId) {
      this.cscService.getStates(countryId).subscribe(
        data => {
          this.states = data;
          this.cities = null;
        }
      );
    } else {
      this.states = null;
      this.cities = null;
    }
  }

  onChangeState(stateId: number) {
    if (stateId) {
      this.cscService.getCities(stateId).subscribe(
        data => {
          this.cities = data;
        });
    } else {
      this.cities = null;
    }
  }

  get f() { return this.form.controls; }

  onSubmit(): void {
    this.submitted = true;
    
    if (this.form.valid) {
      const user = this.form.value as UserModel;

      this.userService.save(user)
        .subscribe(
          (data: UserModel) => {
            location.reload();
          },
          (err: Error) => console.log(err),
          () => console.log('Request has completed')
        );
      console.log(this.form.value);
    }
  }

}
