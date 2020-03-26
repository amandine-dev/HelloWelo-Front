import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {
  form: FormGroup;
  bikerides = [];
  cities = [];
  levels = [];
  types = []

  constructor(
    private formBuilder: FormBuilder,
    private cityService: CityService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getCities() {
    this.cityService.getCities()
      .subscribe(data => {
        this.cities = data;
      });
  }

  onSubmit(){
    
  }

}
