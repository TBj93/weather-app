import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location: string) {

    return this.http.get(
      'http://api.weatherstack.com/current?access_key=4f1580023cd4fc44a2398cbf97c8ccd3&query=' + location
  );

  }
}
