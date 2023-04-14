import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-fa-input',
  standalone: true,
  imports: [ NgClass],
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss']
})
export class FaInputComponent {

  @Input() icon: string;

  get classes() {
    const cssClasses = {
      fa: true
    };
    cssClasses['fa-' + this.icon] = true;
    return cssClasses;
  }

}
