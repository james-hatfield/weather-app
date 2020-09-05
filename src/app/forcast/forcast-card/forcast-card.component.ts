import { Component, OnInit, Input } from '@angular/core';
import { AggForcast } from 'src/app/app.types';

@Component({
  selector: 'app-forcast-card',
  templateUrl: './forcast-card.component.html',
  styleUrls: ['./forcast-card.component.scss'],
})
export class ForcastCardComponent {
  @Input() day: AggForcast | undefined;
  displayTemps = false;
}
