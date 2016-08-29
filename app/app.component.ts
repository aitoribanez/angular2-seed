import { Component } from "@angular/core";
import { weather } from "../node_modules/openweather-apis/index.js";
import { CONFIG } from "../config";
import { WeatherService } from "./app.service";

@Component({
  selector: "my-weather",
  template: "Open weather example",
  providers: [ WeatherService ]
})

export class AppComponent {
  private _key = CONFIG.OPEN_WEATHER_KEY;
  private _latitude = 50.0467656;
  private _longitude = 20.0048731;

  constructor(private _weatherInfo: WeatherService) {

    console.log(this._weatherInfo.getWeather());

    weather.setLang("es");
    weather.setCoordinate(this._latitude, this._longitude);
    weather.setAPPID(this._key);
    weather.getAllWeather(function(err, res){
      if (err) { console.log(err); }
      console.log(res);
    });
  }
}
