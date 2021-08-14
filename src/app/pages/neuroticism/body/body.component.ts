import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { COMPLETE, EST } from 'src/app/shared/global';
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

  constructor(private router: Router) {}

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
      window.localStorage.setItem(EST, COMPLETE);
      this.router.navigate(['openness']);
    }
  }

  goBack() {
    if (this.qCounter >= 1) {
      this.initialTime = performance.now();
      this.qCounter--;
    }
  }
}
