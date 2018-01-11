import { Component, OnInit } from '@angular/core';
import { WebService } from './../web.service'

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  data;
  val="something";
  TodoList=[];
  constructor(private _s:WebService) { }

  ngOnInit() {

    this.data=this._s.Bsubject;
    this.addtodo(this.data)
    var _this=this

    this._s.Bsubject.subscribe(
      function(_d){
        this.data=_d;
        _this.addtodo(_d)
        //console.log(,"<<<data");
      }
    )
    
  }

  addtodo(item){
    this.TodoList.push(item)
    //console.log(this.TodoList.length)
  }
}
