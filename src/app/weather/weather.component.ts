import { Component, Input, OnInit } from '@angular/core';
import { Weather, WeatherService } from './weather.service';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  error: any;
  weather: Weather;
  headers: string[];
  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private weatherService: WeatherService) { }

  ngOnInit() {
    this.customer = this.customerService.getValue();
  }

  clear() {
    this.weather = undefined;
    this.error = undefined;
    this.headers = undefined;
  }

  showWeather() {
    this.weatherService.getWeather_1(this.customer[3]).subscribe((data: Weather) => this.weather = {...data},
      error => this.error = error
    );
  }

  showWeather_v1() {
    this.weatherService.getWeather_1(this.customer[3])
      .subscribe((data: Weather) => this.weather = {
          id: data['id'],
          name:  data['name']
      });
  }
  showWeather_v2() {
    this.weatherService.getWeather()
      // clone the data object, using its known Config shape
      .subscribe((data: Weather) => this.weather = { ...data });
  }

  showWeatherResponse() {
  this.weatherService.getWeatherResponse()
    // resp is of type `HttpResponse<Config>`
    .subscribe(resp => {
      // display its headers
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);

      // access the body directly, which is typed as `Config`.
      this.weather = { ... resp.body };
    });
  }


}
