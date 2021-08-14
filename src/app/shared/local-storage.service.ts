import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private notifier = new Subject();

  setItem(key: string, value: string) {
    window.localStorage.setItem(key, value);
    this.notifier.next();
  }

  getItem(key: string): string {
    return window.localStorage.getItem(key)!;
  }

  removeItem(key: string) {
    window.localStorage.removeItem(key);
    this.notifier.next();
  }

  changed(): Observable<any> {
    return this.notifier.asObservable();
  }
}
