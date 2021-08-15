import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FillDataService } from 'src/app/services/fill-data.service';
import { COMPLETE, EST } from 'src/app/shared/global';
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
  answer!: number;

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
    var newTime = performance.now();
    var time = newTime - this.initialTime;
    this.initialTime = newTime;
    this.fillService.setQuestion('EST', this.qCounter + 1, this.answer);
    this.fillService.setTime('EST', this.qCounter + 1, time);

    if (this.qCounter <= 8) {
      this.qCounter++;
    } else if (this.qCounter === 9) {
      this.storageService.setItem(EST, COMPLETE);
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
