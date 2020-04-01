import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CscService } from 'src/app/services/csc.service';
import { SearchBikerideService } from 'src/app/services/search-bikeride.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {
  form: FormGroup;

  countries = [];
  states = [];
  cities = [];
  bikeRides = [];

  constructor(
    private formBuilder: FormBuilder,
    private cscService: CscService,
    private searchBikerideService: SearchBikerideService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCountries();

    this.form = this.formBuilder.group({
      CountryId: new FormControl(''),
      StateId: new FormControl(''),
      CityId: new FormControl(''),
      date: new FormControl ('')
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

  onSubmit(): void {
    if (this.form.value.CityId) {
      const city = this.form.value.CityId;
      console.log(city);
      
      this.searchBikerideService.getBikeRidesByCity(city)
       .subscribe(data => {
         console.log(data);
         this.searchBikerideService.setbikeRidesByCityResult(data);
         
        this.router.navigate(['/search-results']);
      },
      (err: Error) => console.log(err),
      () => console.log('Request completed')
    );
    console.log(this.form.value);
    }
  }

}
