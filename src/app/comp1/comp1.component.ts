import { Component, OnInit } from '@angular/core';
import { WebService } from './../web.service'
import { NgModel } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  user;
  user2;
  constructor(private _s:WebService) { }

  ngOnInit() {
    this.user = this._s.Bsubject;
    console.log(this.user,"<<<user")
  }

  sendData(){
    this._s.testservice(this.user2);
  }

}
