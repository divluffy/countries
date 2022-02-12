import { Component, Input } from '@angular/core';
import { Worlds } from 'src/app/types/world';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() item: Worlds;
}
