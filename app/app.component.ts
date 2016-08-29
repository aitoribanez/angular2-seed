import { Component } from "@angular/core";
import { WeatherService } from "./app.service";

@Component({
  selector: "my-weather",
  template: "Open weather example",
  providers: [ WeatherService ]
})

export class AppComponent {
  constructor(private _weatherInfo: WeatherService) {
    let _weather = this._weatherInfo.getWeather();
    
    _weather.then(function(res) {
      console.log(res);
    });
  }
}
