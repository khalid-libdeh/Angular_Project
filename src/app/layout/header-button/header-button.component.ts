import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Component, OnInit, Input} from '@angular/core';
import {MatButton} from '@angular/material/button'

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent {
  @Input() text: string = '';
  @Input() iconName: IconProp = ['fas', 'check']; 
  

}
