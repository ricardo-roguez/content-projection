import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

export interface CardLink {
  text: string;
  link: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  imports: [NgIf],
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardTitle: string;
  @Input() cardBody: string;
  @Input() imageSrc: string;
  @Input() cardLink: CardLink;
}
