import { LevelService } from './../../services/level.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-level',
  templateUrl: './list-level.component.html',
  styleUrls: ['./list-level.component.scss']
})
export class ListLevelComponent implements OnInit {

  levels = [];

  constructor(
    private levelService: LevelService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.levelService.getLevels()
    .subscribe(
      (data => {console.log(data);
     this.levels = data})
    );
  }

}