import { Component, Input, OnInit } from '@angular/core'
@Component({
  selector: 'header-title',
  template: `
    <h4 [ngStyle]="{color:color}">{{title}}</h4>
  `,
  styles: [],
})
export class TitleComponent implements OnInit {
  @Input() title: string = "";
  @Input() color: string = "black";

  constructor() { }
  ngOnInit(): void { }

}