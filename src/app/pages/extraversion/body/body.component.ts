import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FillDataService } from 'src/app/services/fill-data.service';
import { COMPLETE, EXT } from 'src/app/shared/global';
import { LocalStorageService } from 'src/app/shared/local-storage.service';
import { questions } from '../data';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  data = questions;
  qCounter = 0;
  initialTime: any;
  answer = 0;

  constructor(
    private router: Router,
    private fillService: FillDataService,
    private storageService: LocalStorageService
  ) {}

  setQ(decision: number) {
    this.answer = decision;
  }

  ngOnInit(): void {
    this.initialTime = performance.now();
  }

  goNext() {
    if (this.answer !== 0) {
      var newTime = performance.now();
      var time = newTime - this.initialTime;
      this.initialTime = newTime;
      this.fillService.setQuestion('EXT', this.qCounter + 1, this.answer);
      this.fillService.setTime('EXT', this.qCounter + 1, Math.round(time));
      this.answer = 0;

      if (this.qCounter <= 8) {
        this.qCounter++;
      } else if (this.qCounter === 9) {
        this.storageService.setItem(EXT, COMPLETE);
        this.router.navigate(['neuroticism']);
      }
    }
  }

  goBack() {
    if (this.qCounter >= 1) {
      this.initialTime = performance.now();
      this.qCounter--;
    }
  }
}
