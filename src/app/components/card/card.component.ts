import {Component, Input, OnInit} from '@angular/core';

export interface CardLink {
  text: string;
  link: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cardTitle: string;
  @Input() cardBody: string;
  @Input() cardLink: CardLink;
}
