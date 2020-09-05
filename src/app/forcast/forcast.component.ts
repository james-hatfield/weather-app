import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { deserializeForcast, aggregateForcast } from './forcast.utils';
import { IForcast } from '../app.types';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.scss'],
})
export class ForcastComponent {
  forcast = this.http
    .get<IForcast>(
      `${environment.baseUrl}&q=Modesto&units=imperial&appid=${environment.apiKey}`
    )
    .pipe(
      map((forcast) => deserializeForcast(forcast)),
      map((forcast) => aggregateForcast(forcast))
    );

  constructor(private http: HttpClient) {}
}
