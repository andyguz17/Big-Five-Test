import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  setQ(q: number, decision: number) {
    console.log(`Answer to Q${q} is ${decision}`);
  }
}
