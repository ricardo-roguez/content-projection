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
  @Output() value = new EventEmitter<string>();
  @Input() placeholder: string = '';
  @Input() type: string;
  @Input() autocomplete: string;
  inputFocus = false;

  get classes() {
    const cssClasses = {
      fa: true
    };
    cssClasses['fa-' + this.icon] = true;
    return cssClasses;
  }

  @HostBinding('class.focus')
  get focus() {
    console.log(this.inputFocus);
    return this.inputFocus;
  }

}
