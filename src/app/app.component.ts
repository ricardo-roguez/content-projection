import { Component } from '@angular/core';
import {CardLink} from "./components/card/card.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'content-projection';
  cardLink: CardLink;
  imageSrc: string;
  cardTitle: string;
  cardBody: string;

  constructor() {
    this.imageSrc="https://picsum.photos/250/180?random=1"
    this.cardTitle="The title"
    this.cardBody="Some quick example text to build on the card title and make up the bulk of the card's content."
    this.cardLink = {
      text: 'Voxel',
      link: 'https://www.voxelgroup.net'
    }
  }
}
