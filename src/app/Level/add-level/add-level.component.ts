import { Router } from '@angular/router';
import { LevelService } from './../../services/level.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LevelModel } from 'src/app/models/level.models';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.scss']
})
export class AddLevelComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private levelService: LevelService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : new FormControl(['', [Validators.required]]),
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const level = this.form.value as LevelModel;
      console.log('ici cest bien ?')

      this.levelService.saveLevel(level)
      .subscribe(
        (data: LevelModel) => {
          this.router.navigate(['/level']);
        },
        (err: Error) => console.log(err),
        () => console.log('Level add - Request has completed')
      );
      console.log(this.form.value);
    }
  }

}
