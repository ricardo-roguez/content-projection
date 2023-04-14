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

  constructor() {
    this.cardLink = {
      text: 'Voxel',
      link: 'https://www.voxelgroup.net'
    }
  }
}
