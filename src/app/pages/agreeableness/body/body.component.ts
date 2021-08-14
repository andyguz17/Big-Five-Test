import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AGR, COMPLETE } from 'src/app/shared/global';
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

  constructor(
    private router: Router,
    private storageService: LocalStorageService
  ) {}

  setQ(q: number, decision: number) {
    console.log(`Answer to Q${q} is ${decision}`);
  }

  ngOnInit(): void {
    this.initialTime = performance.now();
  }

  goNext() {
    console.log(this.qCounter);

    if (this.qCounter <= 8) {
      var newTime = performance.now();
      var time = newTime - this.initialTime;
      this.initialTime = newTime;
      console.log(time);
      this.qCounter++;
    } else if (this.qCounter === 9) {
      this.storageService.setItem(AGR, COMPLETE);
      this.router.navigate(['conscientiousness']);
    }
  }

  goBack() {
    if (this.qCounter >= 1) {
      this.initialTime = performance.now();
      this.qCounter--;
    }
  }
}
