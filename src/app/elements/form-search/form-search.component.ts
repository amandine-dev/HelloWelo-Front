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
      date: new FormControl('')
    });

    this.searchBikerideService.init();
  }

  getCountries() {
    this.cscService.getCountries()
      .subscribe(data => {
        this.countries = data;
      });
  }

  onChangeCountry(countryId: number) {
    console.log(countryId);
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
    console.log(stateId)
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

    if (this.form.value.CityId && !this.form.value.date) {
      const city = this.form.value.CityId;
      console.log(city);

      this.searchBikerideService.getBikeRidesByCity(city)
        .subscribe(data => {
          console.log(data);
          this.searchBikerideService.setbikeRidesByCityResult(data);

          this.router.navigate(['/search-results', 'city']);
        },
          (err: Error) => console.log(err),
          () => console.log('Request completed')
        );
    }

    if (this.form.value.StateId && !this.form.value.CityId && !this.form.value.date) {
      const state = this.form.value.StateId;
      console.log(state);

      this.searchBikerideService.getBikeRidesBySate(state)
        .subscribe(data => {
          console.log(data);
          this.searchBikerideService.setbikeRidesByStateResult(data);

          this.router.navigate(['/search-results', 'state']);
        },
          (err: Error) => console.log(err),
          () => console.log('Request completed')
        );
    }

    if (this.form.value.date && !this.form.value.CountryId) {
      const date = this.form.value.date + 'T00:00:00.000Z';
      console.log(date);

      this.searchBikerideService.getBikeRidesByDate(date)
        .subscribe(data => {
          console.log(data);
          this.searchBikerideService.setbikeRidesByDateResult(data);

          this.router.navigate(['/search-results', 'date']);
        },
          (err: Error) => console.log(err),
          () => console.log('Request completed')
        );
    }

    console.log(this.form.value);
  }
}