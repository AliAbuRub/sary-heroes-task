import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CallService {
  private toggleSubject = new Subject<any>();
  private searchSubject = new Subject<any>();


  constructor() { }

  sendToggle(message: boolean) {
    this.toggleSubject.next({ message });
}

  getToggle(): Observable<boolean> {
    return this.toggleSubject.asObservable();
}

sendSearch(message: string) {
  this.searchSubject.next({ message });
}

getSearch(): Observable<string> {
  return this.searchSubject.asObservable();
}
}
