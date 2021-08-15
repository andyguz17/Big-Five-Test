import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FillDataService {
  dict: any = {};

  constructor() {}

  setQuestion(code: string, num: number, value: number) {
    this.dict[`${code}${num}`] = value;
  }

  setTime(code: string, num: Number, value: number) {
    this.dict[`${code}${num}_E`] = value;
  }

  sendDict() {
    console.log(this.dict);
  }
}
