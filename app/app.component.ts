import { Component } from "@angular/core";
import { WeatherService } from "./app.service";

@Component({
  selector: "my-weather",
  template: "Open weather example",
  providers: [ WeatherService ]
})

export class AppComponent {
  constructor(private _weatherInfo: WeatherService) {
    console.log("appc");
    console.log(this._weatherInfo.getWeather());
  }
}
