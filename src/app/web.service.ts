import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable()
export class WebService {
  
  private _bsubject = new BehaviorSubject<string>('Amit');
  Bsubject= this._bsubject.asObservable();
  
  @Output() customEve = new EventEmitter<any>();

  constructor() { }

  getdata():Observable<any>{
    return this._bsubject.asObservable();
  }

  testservice(_d){
    this._bsubject.next(_d);//Behaviour Subject
    this.customEve.emit(_d);//EventEmitter 
  }

}
