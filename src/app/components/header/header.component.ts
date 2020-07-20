import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {  } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  outputToParent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  notificationToParent(selected:string){
     this.outputToParent.emit(selected);
  }

}
