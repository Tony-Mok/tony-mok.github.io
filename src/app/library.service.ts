import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor() { }

  getContent(): Observable<string> {
    return observableOf("fake content");
  }
}
