import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassserviceService {

  constructor() { }
  public invokeEvent: Subject<any> = new Subject();
}
