import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Weather {
  id: number;
  name: string;
}

@Injectable()
export class WeatherService {

  weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  appid = '43874893e3b7b3c2196bd28dbb797e52';

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get<Weather>(this.weatherUrl)
    .pipe(retry(3), catchError(this.handleError));
  }

  getWeather_1(city: string) {
    let url = this.weatherUrl + city + '&appid=' + this.appid;

    return this.http.get(url);
  }

  getWeather_2() {
    // now returns an Observable of Config
    return this.http.get<Weather>(this.weatherUrl);
  }

  getWeather_3() {
    return this.http.get<Weather>(this.weatherUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getWeatherResponse(): Observable<HttpResponse<Weather>> {
  return this.http.get<Weather>(
    this.weatherUrl, { observe: 'response' });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


}
