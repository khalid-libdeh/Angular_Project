import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-container',
  template: `
    <div [style.padding-inline]="padding">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: []
})
export class mainContainerComponent {
  @Input() padding: string = '4%';
}