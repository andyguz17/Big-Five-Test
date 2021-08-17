import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FillDataService {
  dict: any = {};
  API = 'https://big-five-api-oxf3u.ondigitalocean.app/surveys/';
  

  constructor(private http: HttpClient) {}

  setQuestion(code: string, num: number, value: number) {
    this.dict[`${code}${num}`] = value;
  }

  setTime(code: string, num: Number, value: number) {
    this.dict[`${code}${num}_E`] = value;
  }

  sendDict() {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(this.dict);
    return this.http.post(this.API, body, {
      headers,
    });
  }
}
